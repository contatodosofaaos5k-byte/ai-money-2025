// api/subscribe.ts
// Função serverless da Vercel (Node runtime padrão, SEM @vercel/node!)

import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1h'), // 10 req por IP/hora
});

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // body pode vir como string dependendo do runtime
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const ip =
      (req.headers['x-forwarded-for'] as string) ||
      req.socket?.remoteAddress ||
      'unknown';

    // anti-spam
    const limit = await ratelimit.limit(`subscribe:${ip}`);
    if (!limit.success) {
      return res.status(429).json({ error: 'Too many requests' });
    }

    const { name, email, recaptchaToken } = body || {};
    if (!name || !email || !recaptchaToken) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // validação reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:
        `secret=${encodeURIComponent(recaptchaSecret || '')}` +
        `&response=${encodeURIComponent(recaptchaToken)}`,
    });
    const verifyJson = await verify.json();
    if (!verifyJson.success || (verifyJson.score !== undefined && verifyJson.score < 0.5)) {
      return res.status(403).json({ error: 'reCAPTCHA failed' });
    }

    // chamada Brevo
    const BREVO_KEY = process.env.BREVO_API_KEY;
    const brevoResp = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name },
        listIds: [5], // troque pelo ID da sua lista
        updateEnabled: true,
      }),
    });

    const brevoJson = await brevoResp.json();
    if (!brevoResp.ok) {
      console.error('Brevo error:', brevoResp.status, brevoJson);
      return res.status(500).json({ error: 'Failed to register contact' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}
