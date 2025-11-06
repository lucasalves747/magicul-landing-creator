import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/x-logo.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 sm:pt-40 md:pt-48 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 text-center relative">
        
        {/* Info topo */}
        <div className="mb-10 sm:mb-14 flex flex-col items-center justify-center gap-3 text-muted-foreground relative z-10 fade-in-up delay-100">
          <div className="flex items-center gap-3 sm:gap-4">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base uppercase tracking-wider">
              Imersão de 2 dias
            </span>
          </div>
          <p className="text-sm sm:text-base uppercase tracking-wider max-w-xs sm:max-w-none">
            Evento presencial exclusivo em local premium
          </p>
        </div>

        {/* Título principal */}
        <h1 className="relative mb-10 sm:mb-12 text-5xl sm:text-6xl md:text-7xl font-black leading-none flex flex-col items-center text-foreground fade-in-up delay-200">
          <span className="relative flex items-center justify-center">
            {/* X centralizado */}
            <img
              src={xLogo}
              alt="X decorativo"
              className="absolute left-0 top-[-160%] transform -translate-x-[60%] w-[130%] sm:w-[110%] opacity-35 z-0"
            />
            <span className="relative z-10">BUSINESS</span>
          </span>
          <span className="text-primary relative z-20 mt-4">SUMMIT</span>
        </h1>

        {/* Descrição */}
        <p className="text-base sm:text-lg md:text-2xl mb-14 sm:mb-16 text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 relative z-10 fade-in-up delay-300">
          Em 2 dias, revolucione seu negócio e elimine gargalos.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center relative z-10 mb-12 sm:mb-14 fade-in-up delay-400">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-7"
          >
            Garanta seu acesso
          </Button>
          <Button
            variant="circular"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-7"
          >
            Saiba mais
          </Button>
        </div>

        {/* Tags */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 relative z-10 fade-in-up delay-500">
          {[
            "Gestão",
            "Marketing",
            "Vendas",
            "Financeiro",
            "Saúde",
            "Mentalidade",
          ].map((item) => (
            <span
              key={item}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-border text-sm sm:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
