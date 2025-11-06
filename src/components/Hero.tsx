import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import xLogo from "@/assets/x-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32">
     

      <div className="container mx-auto px-4 sm:px-6 text-center relative">
        {/* Info topo */}
        <div className="mb-6 sm:mb-8 flex flex-col items-center justify-center gap-2 text-muted-foreground relative z-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm uppercase tracking-wider">
              Imersão de 2 dias
            </span>
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-wider max-w-xs sm:max-w-none">
            Evento presencial exclusivo em local premium
          </p>
        </div>

        {/* Título principal */}
        <h1 className="mb-4 sm:mb-6 text-5xl sm:text-6xl md:text-7xl font-black leading-none flex flex-col items-center text-foreground relative">
          <span className="relative">
            {/* camada do X que fica na frente do fundo, mas atrás do texto */}
            <img
              src={xLogo}
              alt="X decorativo"
              className="absolute left-0 top-[-150%] transform -translate-x-[60%] w-[130%] sm:w-[110%] opacity-35 z-0"
            />
            {/* texto com z-index mais alto */}
            <span className="relative z-10">BUSINESS</span>
          </span>
          <span className="text-primary relative z-20">SUMMIT</span>
        </h1>

        {/* Descrição */}
        <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-10 text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 relative z-10">
          Em 2 dias de imersão total, você sairá com um plano de Reinvenção do
          seu negócio, resolvendo os gargalos de Gestão, Marketing, Vendas,
          Processos, Financeiro, Saúde e Mentalidade que o impedem de crescer.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center relative z-10">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
          >
            Garanta seu acesso
          </Button>
          <Button
            variant="circular"
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6"
          >
            Saiba mais
          </Button>
        </div>

        {/* Tags */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 relative z-10">
          {[
            "Gestão",
            "Marketing",
            "Vendas",
            "Processos",
            "Financeiro",
            "Saúde",
            "Mentalidade",
          ].map((item) => (
            <span
              key={item}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border text-xs sm:text-sm"
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
