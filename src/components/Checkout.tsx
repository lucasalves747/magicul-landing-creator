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

  // Listener opcional — se quiser redirecionar após o envio
  useEffect(() => {
    const iframe = document.getElementById("inline-Pz0IjWar3pz0aKaquR1K") as HTMLIFrameElement;

    const checkRedirect = () => {
      try {
        const url = iframe?.contentWindow?.location.href;
        // Troque abaixo pela URL de "obrigado" do seu Salee, se existir:
        if (url.includes("https://seudominio.com/obrigado")) {
          window.location.href = "/obrigado";
        }
      } catch (e) {
        // Ignora erro de cross-domain
      }
    };

    const interval = setInterval(checkRedirect, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="checkout" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            GARANTA SUA
            <br />
            <span className="text-primary">VAGA AGORA</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12">
            Vagas limitadas para a imersão de 2 dias. Transforme seu negócio com um plano de reinvenção completo.
          </p>

          <Card className="bg-card/50 backdrop-blur border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="text-3xl">
                Investimento no Seu Crescimento
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="max-w-lg mx-auto">
                <iframe
                  src="https://link.salee.ai/widget/form/Pz0IjWar3pz0aKaquR1K"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "492px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  id="inline-Pz0IjWar3pz0aKaquR1K"
                  title="X BUSINESS"
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
