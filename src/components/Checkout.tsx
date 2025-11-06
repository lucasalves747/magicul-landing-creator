import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    country: "BR",
    price: "R$ 497",
    installments: "ou 12x de R$ 49,70"
  },
  {
    country: "US",
    price: "$97",
    installments: "or 3x of $32.33"
  },
  {
    country: "EU",
    price: "€87",
    installments: "ou 3x de €29"
  }
];

const benefits = [
  "Acesso completo ao evento ao vivo",
  "Gravação disponível por 30 dias",
  "Material complementar em PDF",
  "Templates e frameworks prontos",
  "Certificado de participação",
  "Grupo exclusivo no Telegram",
  "Bônus: Sessão de Q&A privada"
];

const Checkout = () => {
  const [selectedCountry, setSelectedCountry] = useState("BR");
  
  const selectedPricing = pricingPlans.find(p => p.country === selectedCountry) || pricingPlans[0];
  
  return (
    <section id="checkout" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            GARANTA SUA
            <br />
            <span className="text-primary">VAGA AGORA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Vagas limitadas. Não perca essa oportunidade de transformar seu negócio.
          </p>
          
          <Card className="bg-card/50 backdrop-blur border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="text-3xl">Investimento no Seu Crescimento</CardTitle>
              <CardDescription className="text-base">
                Selecione seu país e escolha a melhor forma de pagamento
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div>
                <label className="text-sm font-medium mb-2 block">Selecione seu país</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BR">🇧🇷 Brasil</SelectItem>
                    <SelectItem value="US">🇺🇸 Estados Unidos</SelectItem>
                    <SelectItem value="EU">🇪🇺 Europa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-background/50 rounded-2xl p-8 border border-border">
                <div className="text-center mb-6">
                  <div className="text-5xl font-black text-primary mb-2">
                    {selectedPricing.price}
                  </div>
                  <div className="text-muted-foreground">
                    {selectedPricing.installments}
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="hero" size="lg" className="w-full text-lg py-6">
                  Garantir minha vaga
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  🔒 Pagamento 100% seguro • Garantia de 7 dias
                </p>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>⚡ Restam apenas <span className="text-primary font-bold">23 vagas</span></p>
                <p className="mt-2">🎯 Mais de 477 pessoas já garantiram acesso</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
