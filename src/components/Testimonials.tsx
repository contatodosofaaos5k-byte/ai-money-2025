import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empreendedora Digital",
    content: "Consegui criar minha primeira fonte de renda com IA em menos de um mês. O conteúdo é direto e prático!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Desenvolvedor",
    content: "Excelente material! Abriu minha visão para oportunidades que eu nem imaginava existir no mercado de IA.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Designer",
    content: "Transformei meu trabalho usando as estratégias do guia. Agora consigo entregar mais em menos tempo.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Quem Já Está{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Tendo Resultados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que dizem as pessoas que já implementaram essas estratégias
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-4">{testimonial.content}</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
