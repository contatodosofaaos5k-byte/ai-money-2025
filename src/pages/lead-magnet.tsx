import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const navigate = useNavigate();

  // 🔹 carrega o script do reCAPTCHA só uma vez
  useEffect(() => {
    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const getRecaptchaToken = async (): Promise<string | null> => {
    if (!(window as any).grecaptcha) {
      return null;
    }
    return await (window as any).grecaptcha.execute(
      import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      { action: "submit" }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e email.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const token = await getRecaptchaToken();
      if (!token) {
        toast({
          title: "Erro",
          description: "Falha ao validar reCAPTCHA.",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, recaptchaToken: token }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Você receberá o guia no seu email 📩",
        });
        setName("");
        setEmail("");
        navigate("/thank-you");
      } else {
        toast({
          title: "Erro",
          description: data.error || "Não foi possível cadastrar.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro de conexão",
        description: "Não conseguimos conectar ao servidor. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Baixe agora seu{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Guia de IA
          </span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Preencha os dados abaixo e receba imediatamente no seu email 📩
        </p>

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
    </main>
  );
};

export default LeadMagnet;
