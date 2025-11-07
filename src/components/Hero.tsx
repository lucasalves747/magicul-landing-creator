import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/x-logo.png";
import heroBg from "@/assets/image1.png"; // substitua pelo nome da sua imagem real

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-40 md:pt-48 pb-16 overflow-hidden opacity"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fade preto no final */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-0" />

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 md:p-14 shadow-2xl border border-white/20"
          style={{
            background: "rgba(0, 0, 0, 0.39)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
          }}
        >
          {/* Info topo */}
          <div className="mb-10 sm:mb-14 flex flex-col items-center justify-center gap-3 fade-in-up delay-100">
            <div className="flex items-center gap-3 sm:gap-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base uppercase tracking-wider ">
                Imersão de 2 dias
              </span>
            </div>
            <p className="text-sm sm:text-base uppercase tracking-wider max-w-xs sm:max-w-none ">
              Evento presencial exclusivo em local premium
            </p>
          </div>

          {/* Título principal */}
          <h1 className="relative mb-10 sm:mb-12 text-5xl sm:text-6xl md:text-7xl font-black leading-none flex flex-col items-center text-foreground fade-in-up delay-200">
            <span className="relative flex items-center justify-center">
              <img
                src={xLogo}
                alt="X decorativo"
                className="absolute left-0 top-[-160%] transform -translate-x-[60%] w-[130%] sm:w-[110%] z-0 opacity-70"
              />
              <span className="relative z-10 ">BUSINESS</span>
            </span>
            <span className="text-primary relative z-20 mt-4">SUMMIT</span>
          </h1>

          {/* Descrição */}
          <p className="text-base sm:text-lg md:text-2xl mb-14 sm:mb-16 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 relative z-10 fade-in-up delay-300">
            Em 2 dias, revolucione seu negócio e elimine gargalos.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center relative z-10 mb-12 sm:mb-14 fade-in-up delay-400">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-7 text-white bg-primary"
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
            {["Gestão", "Marketing", "Vendas", "Financeiro", "Saúde", "Mentalidade"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-border  text-sm sm:text-base" style={{borderColor:"#fff"}}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
