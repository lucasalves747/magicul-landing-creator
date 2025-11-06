const Description = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-start">
            
            {/* Coluna 1 */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                Seu Negócio Tem Potencial,
                <span className="text-primary block">
                  Mas Algo Está Travando o Crescimento
                </span>
              </h2>

              <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-5 sm:p-6 space-y-4">
                <p className="text-foreground font-semibold text-lg sm:text-xl">
                  O Problema Real:
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Você tem potencial de crescimento, mas a desorganização interna e o desgaste pessoal te impedem de acelerar. 
                  É como ter o motor do seu negócio rodando no vazio, com o freio de mão puxado e o pneu furado.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Imagine o quanto você já perdeu em faturamento, tempo e qualidade de vida por não ter um plano de reinvenção total.
                </p>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-6 text-base sm:text-lg">
              <div className="bg-primary/10 backdrop-blur border border-primary/30 rounded-2xl p-5 sm:p-6">
                <p className="text-foreground font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                  A Solução: X Business Summit
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Em 2 dias de imersão total, você fará a adaptação necessária. O foco é prático: resolveremos seus problemas de 
                  Gestão, Marketing, Vendas, Processos, Financeiro, Saúde e Mentalidade in loco.
                </p>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Diferente de consultorias longas ou eventos que focam em apenas uma área, o X Business Summit oferece uma solução 
                imediata e concentrada, com a entrega de um plano de ação executável que integra todas as áreas do negócio.
              </p>

              <p className="text-foreground font-semibold text-base sm:text-lg leading-relaxed">
                Você sai com seu plano de Reinvenção finalizado. É um ambiente de alta concentração para quebrar barreiras e 
                acelerar os resultados.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
