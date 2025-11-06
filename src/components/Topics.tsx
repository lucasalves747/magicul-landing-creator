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
    <section id="topicos" className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-center leading-tight">
            O QUE VOCÊ VAI
            <br />
            <span className="text-primary">CONQUISTAR</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-14 text-center leading-relaxed px-2 sm:px-0">
            Uma imersão de 2 dias em ambiente exclusivo, com foco total em soluções práticas para o seu negócio
          </p>
          
          {/* Cards */}
          <div className="grid gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className="flex flex-col gap-3 p-5 sm:p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-base sm:text-lg leading-snug">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base pl-9 sm:pl-11 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;
