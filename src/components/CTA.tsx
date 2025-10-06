import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece Sua Jornada com IA{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Hoje Mesmo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de estar à frente no mercado de inteligência artificial. 
            Acesso imediato após a compra.
          </p>
          
          {/* Botão de Compra */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://go.hotmart.com/A102195853X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Garantir Meu Acesso Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Imagem de Pagamento Seguro */}
          <div className="flex justify-center mt-6">
            <img
              src="/compra-segura-hotmart-w1000.png"
              alt="Pagamento 100% Seguro - Hotmart, Cartões e Boleto"
              className="max-h-16 mx-auto"
            />
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
