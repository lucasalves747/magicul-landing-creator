import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex items-center justify-center gap-4 text-muted-foreground">
          <Calendar className="w-5 h-5" />
          <span className="text-sm uppercase tracking-wider">15 de Dezembro, 2025 • 19:00</span>
          <p className="text-sm uppercase tracking-wider">PAINEL VIP E ALMOÇO: 10AM - 1:30PM</p>
        </div>
        
        
        <h1 className="hero-text mb-6 text-glow leading-none">
          X DIGITAL
          <br />
          <span className="text-primary">SUMMIT</span>
         
          
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Transforme sua presença digital
          <br />
          em prosperidade financeira
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
          <span className="px-4 py-2 rounded-full border border-border text-sm">estratégia digital</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">funil de vendas</span>
          <span className="px-4 py-2 rounded-full border border-border text-sm">crescimento acelerado</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
