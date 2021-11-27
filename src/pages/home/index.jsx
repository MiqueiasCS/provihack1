

export const Home = () => {
    return(
        <div>
            <header>
                <div>
                    <h2>Logo</h2>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Quem somos</li>
                            <li>Vagas</li>
                            <li>Comunidadeds</li>
                            <li>Login</li>
                        </ul>
                    </nav>
                </div>
                <button>Cadastre-se</button>
            </header>

            {/* first session */}
            <main>
                <div>
                    <div>
                        <h2>Faça Parte do nosso Banco de talentos</h2>
                        <h3>As melhores empresas utilizam o nosso banco de talentos 100% para PDC</h3>
                        <button>Cadastrar Currículo</button>
                    </div>
                    <div>
                        <img alt="imagem_1" />
                    </div>
                </div>

                {/* second sessions */}
                <div>
                    <div>
                        <img alt="imagem_1" />
                    </div>
                    <div>
                        <h2>Lutamos por um mundo mais inclusivo</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quibusdam at obcaecati molestias 
                            vero numquam, fuga.</h3>
                    </div>
                </div>

                {/* third session */}

                <div>
                    <h2>Ajudamos a destacar o seu melhor</h2>
                </div>

                {/* four session */}
                <div>
                    <div>
                        <h3>icon</h3>
                        <h2>Focamos em pessoas</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quibusdam at obcaecati molestias 
                            vero numquam, fuga.</h3>
                    </div>
                    <div>
                        <h3>icon</h3>
                        <h2>Focamos em pessoas</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quibusdam at obcaecati molestias 
                            vero numquam, fuga.</h3>
                    </div>
                    <div>
                        <h3>icon</h3>
                        <h2>Focamos em pessoas</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quibusdam at obcaecati molestias 
                            vero numquam, fuga.</h3>
                    </div>
                </div>

                {/* five session */}
                <div>
                    <section>
                        <div>
                            <h3>Pensando no seu bem estar, você também pode encontrar grupos de apoio nas comunidades</h3>
                        </div>
                        <div>
                            <button>Comunidade</button>
                        </div>
                    </section>    
                </div>
            </main>
            {/* six session */}
            <footer>
                <section>
                    <div>
                        <h3>Contato</h3>
                        <p>atendimento@nossonome.com.br</p>
                        <p>(00) 00000-0000</p>
                    </div>

                    <div>
                        <h3>Endereço</h3>
                        <p>Av. LOrem Ipsum, 20 - 3 Andar</p>
                        <p>Bairro Cidade - Estado</p>
                        <p>CEP</p>
                    </div>

                    <div>
                        <h3>Nossas redes sociais</h3>
                        <p>icon facebook</p>
                        <p>icon instagram</p>
                        <p>icon twitter</p>
                        <p>icon linkedin</p>
                    </div>
                </section>
            </footer>
        </div>
    );
};
