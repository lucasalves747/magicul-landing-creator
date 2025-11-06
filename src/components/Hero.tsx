import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/x-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating circular elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center animate-pulse">
        <span className="text-sm font-medium"></span>
      </div>

      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-foreground flex items-center justify-center hover:scale-110 transition-transform duration-500">
        <span className="text-background text-sm font-bold"></span>
      </div>
      <img
        src={xLogo}
        alt="X"
        className="w-100 h-100 md:w-100 md:h-100 lg:w-100 lg:h-100 absolute left-0 top-0 lg:left-100 lg:top-10 lg:m-20  md:m-0 opacity-70 z-0"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Imersão de 2 dias</span>
          </div>
          <p className="text-sm uppercase tracking-wider">Evento presencial exclusivo em local premium</p>
        </div>

        <h1 className="hero-text mb-6 text-glow leading-none flex flex-col items-center">
          <span className="flex items-center justify-center relative">
            <span className="relative z-10">BUSINESS</span>
          </span>
          <span className="text-primary">SUMMIT</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Em 2 dias de imersão total, você sairá com um plano de Reinvenção do seu negócio, resolvendo os gargalos de
          Gestão, Marketing, Vendas, Processos, Financeiro, Saúde e Mentalidade que o impedem de crescer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Garanta seu acesso
          </Button>
          <Button variant="circular" size="lg" className="text-lg px-12 py-6">
            Saiba mais
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <span className="px-4 py-2 rounded-full border border-border text-sm">Gestão</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Marketing</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Vendas</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Processos</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Financeiro</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Saúde</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">Mentalidade</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
