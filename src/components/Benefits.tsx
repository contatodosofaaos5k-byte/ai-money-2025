import { Card } from "@/components/ui/card";
import { Bot, DollarSign, Rocket, TrendingUp, Zap, Brain, Target, Lightbulb, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "E-books Automáitocs",
    description: "Crie e venda e-books completos em poucas horas usando IA"
  },
  {
    icon: DollarSign,
    title: "Monetização Direta",
    description: "Venda seus serviços de IA para empresas e clientes"
  },
  {
    icon: Rocket,
    title: "Criação de SaaS",
    description: "Desenvolva produtos digitais escaláveis com IA"
  },
  {
    icon: TrendingUp,
    title: "Consultoria em IA",
    description: "Torne-se um especialista requisitado no mercado"
  },
  {
    icon: Target,
    title: "Nichos Rentáveis",
    description: "Descubra oportunidades inexploradas de mercado"
  },
  {
    icon: Lightbulb,
    title: "Geração de Conteúdo",
    description: "Crie e venda conteúdo em escala com IA"
  },
  {
    icon: Users,
    title: "Agência de IA",
    description: "Monte sua própria agência especializada"
  },
  {
    icon: Clock,
    title: "Renda Passiva",
    description: "Estabeleça fontes de renda recorrentes"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Você Vai{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Aprender
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            10 estratégias práticas e comprovadas para começar a lucrar com IA hoje mesmo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
