import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/x-logo.png";
import heroBg from "@/assets/image1.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-40 md:pt-48 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fade preto no final */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/90 z-0" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-6 pb-10 sm:p-10 md:p-14 shadow-2xl border border-white/20"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          {/* Info topo */}
          <div className="mb-8 sm:mb-12 flex flex-col items-center justify-center gap-2 sm:gap-3 fade-in-up delay-100 relative z-30">
            <div className="flex items-center gap-2 sm:gap-3 text-white/90">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm uppercase tracking-wider">
                Imersão de 2 dias
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-wider max-w-[260px] sm:max-w-none text-white/80 relative z-30">
              Evento presencial exclusivo em local premium
            </p>
          </div>

          {/* Título principal */}
          <h1 className="relative mb-8 sm:mb-10 text-5xl sm:text-6xl md:text-7xl font-black leading-none flex flex-col items-center text-white fade-in-up delay-200">
            <span className="relative flex items-center justify-center">
              {/* X decorativo — fica atrás do texto */}
              <img
                src={xLogo}
                alt="X decorativo"
                className="absolute left-0 top-[-160%] transform -translate-x-[60%] w-[130%] sm:w-[110%] opacity-60 z-0 pointer-events-none select-none"
              />
              <span className="relative z-20">BUSINESS</span>
            </span>
            <span className="text-[#FF3B3B] relative z-20 mt-4">SUMMIT</span>
          </h1>

          {/* Descrição */}
          <p className="text-sm sm:text-base md:text-xl mb-10 sm:mb-14 max-w-md sm:max-w-2xl mx-auto leading-relaxed text-white/90 px-2 fade-in-up delay-300 relative z-20">
            Em 2 dias, revolucione seu negócio e elimine gargalos.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center fade-in-up delay-400 relative z-20">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 text-white bg-[#FF3B3B] hover:bg-[#ff5555]"
            >
              Garanta seu acesso
            </Button>
            <Button
              variant="circular"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-6 bg-white/10 border border-white/30 text-white hover:bg-white/20"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
