import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-6 sm:p-10 md:p-12">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight">
              TEM DÚVIDAS?
              <br />
              <span className="text-primary">FALE CONOSCO</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-2 sm:px-0">
              Nossa equipe está pronta para responder todas as suas perguntas
              sobre a imersão e ajudá-lo a garantir sua vaga.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá! Tenho interesse no evento Catalyst",
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground mt-4">
              Respondemos em até 2 horas durante horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
