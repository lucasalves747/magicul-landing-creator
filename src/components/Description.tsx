const Description = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                UM EVENTO QUE VAI
                <span className="text-primary block">TRANSFORMAR</span>
                SEU NEGÓCIO
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Durante este evento exclusivo, você terá acesso às estratégias mais avançadas 
                e comprovadas do mercado. Não são teorias vazias, mas métodos testados e 
                validados que geraram milhões em resultados.
              </p>
              
              <p>
                Nossos especialistas compartilharão cases reais, frameworks prontos para usar 
                e insights que só quem está na linha de frente conhece. Você sairá com um 
                plano de ação claro e executável.
              </p>
              
              <p className="text-foreground font-semibold">
                Este não é mais um evento comum. É uma oportunidade única de acelerar 
                seu crescimento com quem realmente entende do assunto.
              </p>
              
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-black text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Horas de conteúdo</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Participantes</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Prático</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
