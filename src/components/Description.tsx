import { useEffect, useState, useRef } from "react";

const Description = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText =
    "Seu Negócio Tem Potencial, Mas Algo Está Travando o Crescimento";
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // Observa quando o título entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  // Animação de digitação
  useEffect(() => {
    if (!isVisible) return;
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      className="pt-0 sm:pt-12 md:pt-20 pb-10 sm:pb-16 md:pb-20 relative"
      style={{
        background:
          "linear-gradient(to bottom, hsl(0, 0%, 5%) 30%, #ff0202dc 60%, hsl(0, 0%, 5%))",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">
            {/* Coluna 1 */}
            <div className="space-y-6 text-white">
              <h2
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight text-primary"
              >
                {text}
                <span className="text-primary animate-pulse">_</span>
              </h2>

              <div className="bg-[#DAA520FF] backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-6 space-y-4">
                <p className="text-black font-semibold text-lg sm:text-xl">
                  O Problema Real:
                </p>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Você tem potencial de crescimento, mas a desorganização
                  interna e o desgaste pessoal te impedem de acelerar. É como
                  ter o motor do seu negócio rodando no vazio, com o freio de
                  mão puxado e o pneu furado.
                </p>
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  Imagine o quanto você já perdeu em faturamento, tempo e
                  qualidade de vida por não ter um plano de reinvenção total.
                </p>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-6 text-white text-base sm:text-lg">
              <div className=" bg-[#DAA520FF] border border-white/20 rounded-2xl p-5 sm:p-6">
                <p className="text-black font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  A Solução: X Business Summit
                </p>
                <p className="text-black  text-sm sm:text-base leading-relaxed">
                  Em 2 dias de imersão total, você fará a adaptação necessária.
                  O foco é prático: resolveremos seus problemas de Gestão,
                  Marketing, Vendas, Processos, Financeiro, Saúde e Mentalidade
                  in loco.
                </p>
              </div>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Diferente de consultorias longas ou eventos que focam em apenas
                uma área, o X Business Summit oferece uma solução imediata e
                concentrada, com a entrega de um plano de ação executável que
                integra todas as áreas do negócio.
              </p>

              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                Você sai com seu plano de Reinvenção finalizado. É um ambiente
                de alta concentração para quebrar barreiras e acelerar os
                resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
