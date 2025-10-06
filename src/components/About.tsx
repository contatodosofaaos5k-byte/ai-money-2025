import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Métodos práticos e testados",
  "Ferramentas e recursos incluídos",
  "Atualizações constantes de conteúdo",
  "Suporte e comunidade ativa",
  "Acesso imediato ao material completo"
];

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por Que Este{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Guia é Diferente
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Este não é apenas mais um curso teórico. É um guia prático e direto ao ponto, 
              criado para pessoas que querem resultados reais com inteligência artificial.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Você vai descobrir oportunidades concretas de monetização, com passo a passo 
              claro e ferramentas específicas para cada estratégia.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-card border-border shadow-card animate-scale-in">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Conteúdo Incluído</div>
                <div className="text-3xl font-bold text-foreground">10 Estratégias</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Tempo Estimado</div>
                <div className="text-3xl font-bold text-foreground">1 hora de leitura por dia</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Nível</div>
                <div className="text-3xl font-bold text-foreground">Iniciante</div>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Investimento</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-secondary">R$47</span>
                  <span className="text-lg text-muted-foreground line-through">R$ 297</span>
                </div>
                <div className="text-sm text-secondary mt-1">Oferta por tempo limitado</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
