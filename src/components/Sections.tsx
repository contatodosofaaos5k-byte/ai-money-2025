import { CheckCircle2, Rocket, Brain, TrendingUp } from "lucide-react";

// 1) Benefícios principais
export const Benefits = () => {
  const items = [
    {
      icon: Brain,
      title: "Acessível a Todos",
      description:
        "A IA deixou de ser exclusiva de grandes empresas e agora qualquer pessoa pode usar.",
    },
    {
      icon: Rocket,
      title: "Rápido Crescimento",
      description:
        "O mercado de IA cresce a cada dia, criando novas formas de renda.",
    },
    {
      icon: TrendingUp,
      title: "Alta Rentabilidade",
      description:
        "Ferramentas inteligentes permitem gerar resultados com baixo investimento inicial.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Por que investir em <span className="gradient-text">IA em 2025</span>?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          A Inteligência Artificial está transformando o mercado e abrindo
          oportunidades para qualquer pessoa que queira aprender e aplicar as
          ferramentas certas.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-glow"
            >
              <item.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 2) Conteúdo do guia
export const GuideContent = () => {
  const list = [
    "Criar e-books automáticos",
    "Produzir posts para redes sociais",
    "Desenvolver templates prontos",
    "Gerar vídeos automáticos",
    "Construir chatbots de atendimento",
    "Criar artes e designs com IA",
    "Fazer dropshipping com IA",
    "Montar cursos digitais rápidos",
    "Fazer tradução e legendagem",
    "Oferecer consultoria em IA",
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          O que você vai encontrar no{" "}
          <span className="gradient-text">Guia</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          10 maneiras práticas e lucrativas de usar a Inteligência Artificial
          para gerar renda em 2025.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {list.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-success mt-1" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3) Para quem é
export const TargetAudience = () => {
  const audience = [
    "Quem nunca usou Inteligência Artificial, mas quer começar do zero",
    "Profissionais autônomos que desejam aumentar sua renda",
    "Afiliados e criadores digitais que querem automatizar processos",
    "Empreendedores que buscam novas fontes de receita",
    "Estudantes e curiosos que querem aprender IA aplicada",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Para quem é este <span className="gradient-text">Guia?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Este material foi criado pensando em iniciantes e também em quem já
          tem alguma experiência, mas quer acelerar resultados.
        </p>
        <div className="max-w-2xl mx-auto space-y-4 text-left">
          {audience.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
