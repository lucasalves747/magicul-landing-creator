import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              TEM DÚVIDAS?
              <br />
              <span className="text-primary">FALE CONOSCO</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Nossa equipe está pronta para responder todas as suas perguntas
              e ajudá-lo a aproveitar ao máximo este evento.
            </p>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6"
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no evento Catalyst', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Respondemos em até 2 horas durante horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
