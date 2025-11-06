import rodolfo from "@/assets/Rodolfo.png";
import dj from "@/assets/Dj.png";
import lucas from "@/assets/Lucas.png";
import matheus from "@/assets/Matheus.png";
import nesio from "@/assets/Nesio.png";
import santiago from "@/assets/Santiago.png";

const speakers = [
  {
    name: "João Adolfo",
    bio: "João Adolfo de Souza é empresário e empreendedor, dono do maior canal do mundo em seu nicho, com mais de 1 bilhão de visualizações. Criador do método SMY e mentor de grandes nomes do marketing digital.",
    image: rodolfo,
  },
  {
    name: "Dr. Santiago Vecina",
    bio: "Médico e palestrante internacional, especialista em nutrologia esportiva e criador do método SAAMS, que transforma saúde e performance de líderes e atletas.",
    image: santiago,
  },
  {
    name: "Nezio Monteiro",
    bio: "Empreendedor serial com 24 empresas e mais de 20 mil pessoas treinadas. Criador do método GSR e referência em gestão simplificada e resultados exponenciais.",
    image: nesio,
  },
  {
    name: "Matheus Rigons",
    bio: "Estrategista digital e criador do Método RIGONS. Especialista em Growth e posicionamento, ajuda empresas a se tornarem investíveis e escaláveis.",
    image: matheus,
  },
  {
    name: "Lucas de Angelo",
    bio: "Filmmaker e criador visual com experiência internacional. Registra grandes eventos e transforma propósito em presença por meio da imagem.",
    image: lucas,
  },
  {
    name: "DJ Belieny",
    bio: "Mentor e empresário internacional, especialista em IA, negócios e desenvolvimento humano, com mais de 30 anos de experiência global.",
    image: dj,
  },
];

const Speakers = () => {
  return (
    <section id="palestrantes" className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-center leading-tight">
            CONHEÇA OS
            <br />
            <span className="text-primary">ESPECIALISTAS</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-16 text-center max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Aprenda com quem está na linha de frente e já gerou resultados extraordinários para centenas de empresas.
          </p>

          {/* Grid de palestrantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 flex flex-col"
              >
                {/* Imagem */}
                <div className="aspect-[4/5] sm:aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center sm:text-left">
                    {speaker.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-center sm:text-left">
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
