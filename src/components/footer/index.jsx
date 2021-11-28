import { Container } from "./styles";
import Logo from "../../assets/logo.png";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";

export const Footer = () => {
  return (
    <Container>
      <div>
        <img src={Logo} alt="logo" />
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
    </Container>
  );
};
