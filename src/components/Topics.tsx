import { Check } from "lucide-react";

const topics = [
  "OS SEGREDOS TO YOUTUBE",
  "VENDAS HIGH TICKET E ALTA PERFORMANCE",
  "PRODUÇÃO DE CONTEÚDO DE EXCELÊNCIA",
  "ACELERAÇÃO COM INTELIGÊNCIA ARTIFICIAL",
  "CRIAÇÃO DE AUTORIDADE E INFLUÊNCIA",
  "MUITOS OUTROS SEGREDOS, DICAS E TRUQUES"
];

const Topics = () => {
  return (
    <section id="topicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          
          <p className="text-xl text-muted-foreground mb-12">
            Um evento presencial exclusivo, desenhado especialmente para brasileiros residentes nos EUA que desejam romper as barreiras digitais e se estabelecer como referências internacionais.
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
