import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-2xl text-center">
        <Card className="p-8 bg-card/80 border-border shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">
            🎉 Seu guia está a caminho do seu <span className="text-primary">email</span>!
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Em alguns minutos você receberá o link para baixar o material gratuito.
            Enquanto isso, dê o próximo passo e garanta acesso ao conteúdo completo 👇
          </p>

          <Button
            size="lg"
            className="w-full"
            onClick={() =>
              window.open("https://go.hotmart.com/SEU-LINK", "_blank") // ⚡ coloque seu link Hotmart
            }
          >
            Garantir Meu Acesso Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Compra 100% segura 🔒 — acesso imediato após a confirmação.
          </p>
        </Card>
      </div>
    </main>
  );
};

export default ThankYou;