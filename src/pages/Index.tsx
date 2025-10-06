import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Benefits, GuideContent, TargetAudience } from "@/components/Sections";
import GoogleAd from "@/components/GoogleAd";

/**
 * 🔹 Loader de anúncio enquanto o banner do AdSense ainda está carregando
 */
const AdLoader = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-pulse text-sm text-muted-foreground bg-muted/10 px-6 py-3 rounded-lg shadow-sm">
      Carregando anúncio...
    </div>
  </div>
);

/**
 * 🔹 Componente que mostra o bloco de anúncio com loader até renderizar
 */
const AdWithLoader = ({ slot }: { slot: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return isLoaded ? <GoogleAd slot={slot} /> : <AdLoader />;
};

/**
 * 🧠 Página principal AI Money 2025
 */
const Index = () => {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* 🌟 Seção principal (Hero) */}
      <Hero />

      {/* ✅ Anúncio entre Hero e Conteúdo */}
      <AdWithLoader slot="6612452569" />

      {/* 💡 Seções do conteúdo */}
      <Benefits />

      {/* ✅ Segundo bloco de anúncio */}
      <AdWithLoader slot="6612452569" />

      <GuideContent />
      <TargetAudience />
      <About />
      <Testimonials />

      {/* ✅ Último bloco de anúncio antes do CTA */}
      <AdWithLoader slot="6612452569" />

      {/* 🚀 Seção final (call to action e rodapé) */}
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
