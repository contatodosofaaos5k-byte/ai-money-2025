import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1h"),
});

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = await ratelimit.limit(`subscribe:${ip}`);

  if (!limit.success) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await req.json();
  const { name, email, recaptchaToken } = body;

  if (!name || !email || !recaptchaToken) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Verificação do reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET!;
  const verify = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    }
  );
  const verifyJson = await verify.json();

  if (!verifyJson.success || verifyJson.score < 0.5) {
    return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Chamada Brevo
  const brevoResp = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name },
      listIds: [5], // troque pelo ID real
      updateEnabled: true,
    }),
  });

  if (!brevoResp.ok) {
    const errJson = await brevoResp.json();
    console.error("Brevo error:", errJson);
    return new Response(JSON.stringify({ error: "Failed to register" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}