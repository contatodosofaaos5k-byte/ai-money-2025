import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Guia Completo 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            10 Maneiras de Ganhar Dinheiro com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Descubra estratégias comprovadas para monetizar IA e transformar seu
            futuro financeiro em 2025
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botão Hotmart */}
            <a
              href="https://go.hotmart.com/A102195853X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Quero Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* Botão Bônus */}
            <a href="/bonus" className="w-full sm:w-auto">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                Quero Meu Bônus - Clique aqui
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

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-secondary">5.000+</span>
              <span>Pessoas já iniciaram</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-secondary">4.9/5</span>
              <span>Avaliação média</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
