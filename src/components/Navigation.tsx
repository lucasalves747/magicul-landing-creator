import { Button } from "@/components/ui/button";
import xLogo from "@/assets/x-logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-bold tracking-wider flex items-center gap-2">
              <img src={xLogo} alt="X" className="w-6 h-6" />
              <span>BUSINESS</span>
            </h2>
            <div className="hidden md:flex items-center gap-6">
              <a href="#topicos" className="text-sm hover:text-primary transition-colors">
                TÓPICOS
              </a>
              <a href="#palestrantes" className="text-sm hover:text-primary transition-colors">
                PALESTRANTES
              </a>
              <a href="#checkout" className="text-sm hover:text-primary transition-colors">
                INSCREVA-SE
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">PT // EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
