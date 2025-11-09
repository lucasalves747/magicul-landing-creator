import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/logo.png";
import heroBg from "@/assets/image1.png";

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center pt-16 sm:pt-36 md:pt-28 pb-2 sm:pb-8 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fade preto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90 z-0" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-5 sm:p-10 md:p-14 shadow-2xl border border-white/20"
          style={{
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          {/* Info topo */}
          <div className="mb-1 flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 text-white/90">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm uppercase tracking-wider">
                Imersão de 2 dias
              </span>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-white/80">
              Evento presencial exclusivo em local premium
            </p>
          </div>

          {/* Imagem centralizada */}
          <div className="flex justify-center items-center -mt-1 mb-1 sm:mb-3">
            <img
              src={xLogo}
              alt="Logo decorativo"
              className="rotate-90 w-[50%] sm:w-[35%] md:w-[25%]"
            />
          </div>

          {/* Descrição */}
          <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto leading-snug text-white/90 px-2">
            Em 2 dias, revolucione seu negócio e elimine gargalos.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-5 text-white bg-[#FF3B3B] hover:bg-[#ff5555]"
            >
              Garanta seu acesso
            </Button>
            <Button
              variant="circular"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-5 bg-white/10 border border-[#DAA520FF] text-white hover:bg-white/20"
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
