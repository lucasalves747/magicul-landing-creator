import { Check } from "lucide-react";

const topics = [
  "Estratégias de marketing digital comprovadas",
  "Construção de funis de vendas de alta conversão",
  "Automação de processos para escalar seu negócio",
  "Análise de dados e métricas que importam",
  "Posicionamento de marca e diferenciação no mercado",
  "Técnicas avançadas de copywriting",
  "Growth hacking e crescimento exponencial",
  "Gestão de equipes e liderança transformadora"
];

const Topics = () => {
  return (
    <section id="topicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-glow">
            O QUE VOCÊ VAI
            <br />
            <span className="text-primary">APRENDER</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Transformamos seu investimento em um fluxo constante
            <br />
            de clientes e desenvolvimento rápido.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
