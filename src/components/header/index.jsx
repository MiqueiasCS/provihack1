import { MainHeader, Container, Cabecalho } from "./styles";
import { FaUniversalAccess } from "react-icons/fa";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <Container>
      <Cabecalho>
        <nav className="usertype">
          <ul>
            <li>Para candidatos</li>
            <li>Para empresas</li>
          </ul>
        </nav>
        <nav className="accessibility">
          <ul>
            <li>
              <span>Torne o site acessível</span> <FaUniversalAccess />
            </li>
          </ul>
        </nav>
      </Cabecalho>

      <hr className="top" />

      <MainHeader>
        <div>
          <img src={Logo} alt="logo" />
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
      </MainHeader>
    </Container>
  );
};
