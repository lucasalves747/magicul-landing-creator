import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Checkout = () => {
  // Carrega o script externo do Salee apenas uma vez
  useEffect(() => {
    const scriptId = "salee-form-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.salee.ai/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Listener opcional — redireciona após envio se necessário
  useEffect(() => {
    const iframe = document.getElementById("inline-Pz0IjWar3pz0aKaquR1K") as HTMLIFrameElement;

    const checkRedirect = () => {
      try {
        const url = iframe?.contentWindow?.location.href;
        if (url.includes("https://seudominio.com/obrigado")) {
          window.location.href = "/obrigado";
        }
      } catch {
        // ignora erro de cross-domain
      }
    };

    const interval = setInterval(checkRedirect, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="checkout" className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
            GARANTA SUA
            <br />
            <span className="text-primary">VAGA AGORA</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-12 px-2 sm:px-0">
            Vagas limitadas para a imersão de 2 dias. Transforme seu negócio com um plano de reinvenção completo.
          </p>

          <Card className="bg-card/50 backdrop-blur border border-primary/30 rounded-3xl overflow-hidden">
            <CardHeader className="px-4 sm:px-8 pt-6 sm:pt-8">
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                Investimento no Seu Crescimento
              </CardTitle>
            </CardHeader>

            <CardContent className="px-4 sm:px-8 pb-6 sm:pb-10">
              <div className="w-full max-w-lg mx-auto">
                <iframe
                  src="https://link.salee.ai/widget/form/Pz0IjWar3pz0aKaquR1K"
                  id="inline-Pz0IjWar3pz0aKaquR1K"
                  title="X BUSINESS"
                  className="w-full border-none rounded-xl"
                  style={{
                    height: "min(550px, 80vh)",
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
