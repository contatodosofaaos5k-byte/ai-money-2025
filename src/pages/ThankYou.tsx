import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="container max-w-2xl text-center">
        <Card className="p-8 bg-card/80 border-border shadow-lg">
          {/* Ícone de sucesso */}
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

          {/* Título de agradecimento */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            🎉 Seu guia já está a caminho do seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              email!
            </span>
          </h1>

          {/* Mensagem curta */}
          <p className="text-lg text-muted-foreground mb-6">
            Em alguns minutos você receberá o link para baixar o material
            gratuito. Enquanto isso, aproveite esta oportunidade exclusiva 👇
          </p>

          {/* CTA principal */}
          <a
            href="https://pay.hotmart.com/A102195853X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full flex justify-center items-center gap-2 bg-primary text-white hover:bg-primary/90"
            >
              Garantir Meu Acesso Completo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          {/* Selo de pagamento seguro */}
          <div className="flex justify-center mt-6">
            <img
              src="/compra-segura-hotmart-w1000.png"
              alt="Pagamento 100% Seguro - Hotmart, Cartões e Boleto"
              className="h-12 object-contain"
            />
          </div>

          {/* Garantia extra */}
          <p className="text-sm text-muted-foreground mt-4">
            Compra 100% segura 🔒 | Acesso imediato | Garantia de 7 dias
          </p>
        </Card>
      </div>
    </main>
  );
};

export default ThankYou;
