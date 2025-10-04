import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-hero px-4 text-center">
      {/* Ícone */}
      <div className="flex items-center justify-center mb-6">
        <AlertTriangle className="w-16 h-16 text-primary animate-bounce" />
      </div>

      {/* Título */}
      <h1 className="text-6xl font-extrabold text-foreground mb-4">
        404
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg">
        Oops! A página que você está procurando não existe ou foi movida.  
        Verifique o endereço ou volte para a página inicial.
      </p>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/">
          <Button variant="hero" size="lg">
            Voltar para Início
          </Button>
        </a>
        <a href="/lead-magnet">
          <Button variant="hero-outline" size="lg">
            Ganhar Meu Bônus
          </Button>
        </a>
      </div>
    </main>
  );
};

export default NotFound;