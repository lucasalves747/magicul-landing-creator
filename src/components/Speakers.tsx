import rodolfo from "@/assets/Rodolfo.png";
import dj from "@/assets/Dj.png";
import lucas from "@/assets/Lucas.png";
import matheus from "@/assets/Matheus.png";
import nesio from "@/assets/Nesio.png";
import santiago from "@/assets/Santiago.png";
const speakers = [
  {
    name: "João Adolfo",
    bio: "João Adolfo de Souza é empresário e empreendedor, dono do maior canal do mundo em seu nicho, com mais de 20 canais monetizados e mais de 1 bilhão de visualizações. Com mais de 7 milhões de seguidores, ele se destaca por ajudar outros empresários a prosperar no ambiente digital. Criador do método Segredos Milionários do YouTube (SMY), já auxiliou milhares de pessoas a alavancarem seus canais e aumentarem a monetização. Mentor de grandes nomes do marketing digital, foi reconhecido por Pablo Marçal, que o convidou para gerenciar seu canal no YouTube. Com ampla experiência como palestrante, já se apresentou em diversos estados e no exterior, incluindo Dubai. Sua empresa gera mais de mil clientes orgânicos por dia graças às suas estratégias digitais inovadoras.",
    image: rodolfo
  },
  {
    name: "Dr. Santiago Vecina",
    bio: "Médico, empresário e palestrante internacional, Santiago Vecina é especialista em nutrologia esportiva e otimização da saúde. Criador do método SAAMS, que une saúde, nutrição e propósito, ajuda pessoas a perder até 20 kg em dois meses e alcançar feitos como completar o Ironman. Já transformou a vida de atletas e profissionais de alta performance, levando equipes como o Esporte Clube São Bento e os Vipers ao topo de competições nacionais. Autor do livro “Médico do Corpo e da Alma”, inspira uma vida com energia, foco e resultados extraordinários. Se você busca o próximo nível, Santiago é o mentor ideal para te guiar.",
    image: santiago
  },
  {
    name: "Nezio Monteiro",
    bio: "Nezio Monteiro é um empreendedor serial com 24 empresas em diversos segmentos e mais de 20 mil pessoas treinadas em cursos, mentorias e eventos. Especialista em GSR (Gestão Simplificada de Resultados), criou um modelo inovador de gestão que elimina burocracias e impulsiona resultados exponenciais. Cristão, casado com Jessyca e pai de Ana Liz, é palestrante, Ironman e escritor, com o propósito de destravar negócios e empresários que compartilham seus valores e têm mensagens fortes em seus corações.",
    image: nesio
  },
  {
    name: "Matheus Rigons",
    bio: "Empresário, pai de duas filhas e estrategista digital, é criador do Método RIGONS®️, framework que prepara empresas para escalar com estrutura, posicionamento e atração de investimentos. Já participou de múltiplos lançamentos de 6 e 7 dígitos ao lado de nomes como Pablo Marçal e Nézio Monteiro. Hoje, é sócio de Hewerton e Santiago na construção de ecossistemas empresariais de alto valor nos EUA. Especialista em Growth com foco em equity e posicionamento digital, conecta empresas em expansão a fundos de investimento. Acredita que estrutura vem antes da escala — e que nenhuma empresa está pronta para crescer até estar pronta para ser investida.",
    image: matheus
  },
  {
    name: "Lucas de Angelo",
   
    bio: "Lucas de Angelo é filmmaker e criador de narrativas visuais com experiência nos bastidores de grandes nomes do digital. Ex-baterista profissional, traz da música o olhar sensível, o ritmo e a capacidade de capturar emoções reais. Iniciou sua trajetória ao lado de Nézio Monteiro e ganhou destaque ao registrar o primeiro Ironman do grupo de Pablo Marçal no México. Desde então, filmou triatlos, ralis, eventos transformacionais e produções internacionais nos EUA e em Portugal, ao lado de Tiago Rocha. Hoje, é sócio e fundador da Plataforma Global de Miami. Sua missão é transformar propósito em presença e imagem em legado, entregando vídeos que unem verdade, movimento e autoridade.",
    image: lucas
  },
  {
    name: "DJ Belieny",
    
    bio: "Especialista em tecnologia, inteligência artificial, negócios e desenvolvimento humano, DJ tem mais de 30 anos de experiência, atuou com a ONU e empreendeu com sucesso nos EUA por mais de duas décadas. Mentor reconhecido e criador de um método exclusivo para acelerar o potencial de empreendedores, já participou de negócios milionários em vários países. Formado em coaching e PNL, é membro de uma das principais associações de coaching dos EUA, unindo performance técnica, inteligência emocional e propósito. Voluntário em educação, ensinou ciência da computação pelo programa TEALS da Microsoft. Cristão, marido de Patricia Belieny e pai de três filhos, une fé e resultados em tudo o que faz.",
    image: dj
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
