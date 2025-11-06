const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black mb-4">CATALYST</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Transformando negócios através de estratégias comprovadas e conhecimento de ponta.
              </p>
              <p className="text-xs text-muted-foreground">
                🌍 São Paulo, Brasil
                <br />
                📧 contato@catalyst.events
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#topicos" className="hover:text-primary transition-colors">
                    Tópicos
                  </a>
                </li>
                <li>
                  <a href="#palestrantes" className="hover:text-primary transition-colors">
                    Palestrantes
                  </a>
                </li>
                <li>
                  <a href="#checkout" className="hover:text-primary transition-colors">
                    Inscreva-se
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Reembolso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Catalyst Events. Todos os direitos reservados.</p>
            <p className="text-xs text-muted-foreground">CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
