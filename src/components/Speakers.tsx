import speaker1 from "@/assets/speaker1.jpg";
import speaker2 from "@/assets/speaker2.jpg";
import speaker3 from "@/assets/speaker3.jpg";

const speakers = [
  {
    name: "Ana Carolina Silva",
    role: "CEO & Growth Strategist",
    bio: "15+ anos de experiência em crescimento empresarial. Responsável por escalar 50+ empresas de 6 para 8 dígitos. Especialista em funis de alta conversão.",
    image: speaker1
  },
  {
    name: "Ricardo Oliveira",
    role: "Marketing Digital Expert",
    bio: "Ex-CMO de unicórnios brasileiros. Gerenciou +R$100M em investimento de mídia. Especialista em estratégias de aquisição e retenção.",
    image: speaker2
  },
  {
    name: "Juliana Santos",
    role: "Sales & Automation Specialist",
    bio: "Criadora do método S.A.L.E.S usado por 200+ empresas. Especialista em automação de vendas e otimização de processos comerciais.",
    image: speaker3
  }
];

const Speakers = () => {
  return (
    <section id="palestrantes" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
            CONHEÇA OS
            <br />
            <span className="text-primary">ESPECIALISTAS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Aprenda com quem está na linha de frente e já gerou resultados 
            extraordinários para centenas de empresas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                  <p className="text-primary font-semibold mb-4">{speaker.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
