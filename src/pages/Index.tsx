import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Benefits, GuideContent, TargetAudience } from "@/components/Sections";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Seção Hero (topo da página) */}
      <Hero />

      {/* Seções de conteúdo */}
      <Benefits />
      <GuideContent />
      <TargetAudience />

      {/* Seção sobre você/produto */}
      <About />

      {/* Depoimentos de clientes */}
      <Testimonials />

      {/* Chamada para ação final */}
      <CTA />

      {/* Rodapé */}
      <Footer />
    </main>
  );
};

export default Index;
