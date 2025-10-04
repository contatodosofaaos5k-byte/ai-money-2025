import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ⚙️ reCAPTCHA v3 site key (do Google)
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e email.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // ✅ Executa reCAPTCHA v3
      const token = await getRecaptchaToken();

      // ✅ Envia para o backend seguro (api/subscribe)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, recaptchaToken: token }),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Você receberá o guia no seu email 📩",
        });

        setEmail("");
        setName("");
        navigate("/thank-you"); // ✅ Redireciona
      } else {
        const err = await response.json();
        console.error("Erro subscribe:", err);
        toast({
          title: "Erro",
          description: err?.error || "Não foi possível cadastrar.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro de conexão",
        description: "Tente novamente em alguns minutos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // 🔒 Função para obter token reCAPTCHA v3
  const getRecaptchaToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) return reject("reCAPTCHA não carregado.");
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-3xl text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Guia Gratuito 2025</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Baixe agora seu{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Guia de IA
          </span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Preencha os dados abaixo e receba imediatamente no seu email 📩
        </p>

        {/* Card Form */}
        <Card className="p-8 bg-card/80 border-border shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Baixar Agora"}
              <Download className="w-5 h-5 ml-2" />
            </Button>
          </form>
        </Card>
      </div>

      {/* reCAPTCHA Script */}
      <script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      ></script>
    </main>
  );
};

export default LeadMagnet;

// 👇 adiciona tipo global para evitar erro de TS
declare global {
  interface Window {
    grecaptcha: any;
  }
}