import { Check } from "lucide-react";

const topics = [
  {
    title: "Diagnóstico 360º",
    description: "Identificação e solução imediata dos problemas mais críticos em todas as áreas do negócio"
  },
  {
    title: "Plano de Ação Estratégico",
    description: "Criação de um plano de reinvenção executável, com foco em crescimento e expansão digital"
  },
  {
    title: "Alinhamento de Liderança",
    description: "Transformação completa do líder, alinhando propósito, saúde e mentalidade com a estratégia de negócios"
  },
  {
    title: "Otimização Financeira e de Processos",
    description: "Estratégias para aumentar a margem de lucro e automatizar o que é manual"
  },
  {
    title: "Marketing e Vendas de Alto Valor",
    description: "Construção de autoridade digital e funis de vendas que convertem"
  },
  {
    title: "Networking Exclusivo",
    description: "Conexão com outros líderes e empreendedores em um formato de grupo fechado e exclusivo"
  }
];

const Topics = () => {
  return (
    <section id="topicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-center">
            O QUE VOCÊ VAI
            <br />
            <span className="text-primary">CONQUISTAR</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Uma imersão de 2 dias em ambiente exclusivo, com foco total em soluções práticas para o seu negócio
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-lg">{topic.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm pl-10">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
