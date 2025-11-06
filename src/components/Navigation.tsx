import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import xLogo from "@/assets/x-logo.png";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={xLogo} alt="X" className="w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="text-lg sm:text-xl font-bold tracking-wider">
              BUSINESS
            </h2>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#topicos"
              className="text-sm hover:text-primary transition-colors"
            >
              TÓPICOS
            </a>
            <a
              href="#palestrantes"
              className="text-sm hover:text-primary transition-colors"
            >
              PALESTRANTES
            </a>
            <a
              href="#checkout"
              className="text-sm hover:text-primary transition-colors"
            >
              INSCREVA-SE
            </a>
          </div>

          {/* Idioma + botão mobile */}
          <div className="flex items-center gap-3">
           

            {/* Botão mobile */}
            <button
              className="md:hidden text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col items-center gap-4 py-6">
            <a
              href="#topicos"
              className="text-sm hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              TÓPICOS
            </a>
            <a
              href="#palestrantes"
              className="text-sm hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              PALESTRANTES
            </a>
            <a
              href="#checkout"
              className="text-sm hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              INSCREVA-SE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
