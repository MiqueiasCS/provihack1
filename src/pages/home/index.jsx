import { Container, Header, Footer, Main } from "./styles";
import FirstImage from "../../assets/image.png";
import SecondIMage from "../../assets/image_2.png";
import { CgHeart, CgFacebook } from "react-icons/cg";
import { BiBriefcaseAlt } from "react-icons/bi";
import { RiUserSmileLine, RiTwitterFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

export const Home = () => {
  return (
    <Container>
      <Header>
        <div>
          <h2>Logo</h2>
        </div>
        <div className="menu-navegacao">
          <nav>
            <ul>
              <li>Home</li>
              <li>Quem somos</li>
              <li>Vagas</li>
              <li>Comunidades</li>
              <li>Login</li>
            </ul>
          </nav>
          <button>Cadastre-se</button>
        </div>
      </Header>

      <Main>
        {/* first session */}
        <div className="first_session">
          <div>
            <h2>Faça Parte do nosso Banco de talentos</h2>
            <p>
              As melhores empresas utilizam o nosso banco de talentos 100% para
              PDC
            </p>
            <button>Cadastrar Currículo</button>
          </div>
          <div className="first_image">
            <img src={FirstImage} alt="imagem_1" />
          </div>
        </div>

        {/* second session */}
        <div className="second_session">
          <div className="second_image">
            <img src={SecondIMage} alt="imagem_2" />
          </div>
          <div>
            <p className="marcador">Nosso propósito</p>
            <h2>Lutamos por um mundo mais inclusivo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
        </div>

        {/* third session */}

        <div className="third_session">
          <p className="marcador">Benefícios</p>
          <h2>Ajudamos a destacar o seu melhor</h2>
        </div>

        {/* four session */}
        <div className="four_session">
          <div>
            <RiUserSmileLine />
            <h2>Focamos em pessoas</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
          <div>
            <BiBriefcaseAlt />
            <h2>Focamos em pessoas</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
          <div>
            <CgHeart />
            <h2>Focamos em pessoas</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
        </div>

        {/* five session */}
        <div className="five_session">
          <div>
            <div className="message">
              <p>
                Pensando no seu bem estar, você também pode encontrar grupos de
                apoio nas comunidades
              </p>
            </div>
            <div>
              <button>Comunidade</button>
            </div>
          </div>
        </div>
      </Main>
      {/* six session */}
      <Footer>
        <div>
          <h2>Logo</h2>
        </div>
        <section>
          <div className="contato">
            <h3>Contato</h3>
            <p>atendimento@nossonome.com.br</p>
            <p>(00) 00000-0000</p>
          </div>

          <div className="endereco">
            <h3>Endereço</h3>
            <p>Av. LOrem Ipsum, 20 - 3 Andar</p>
            <p>Bairro Cidade - Estado</p>
            <p>CEP</p>
          </div>

          <div className="redes_socias">
            <h3>Nossas redes sociais</h3>
            <div>
              <CgFacebook />
              <FiInstagram />
              <RiTwitterFill />
              <AiFillLinkedin />
            </div>
          </div>
        </section>
      </Footer>
    </Container>
  );
};
