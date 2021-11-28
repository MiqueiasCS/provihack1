import { MainHeader, Container, Cabecalho } from "./styles";
import { FaUniversalAccess } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  const handleToPageRegister = () => {
    navigate("/register")
  }

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
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <div className="menu-navegacao">
          <nav>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about-us"><li>Quem somos</li></Link>
              <Link to="/dashboard"><li>Canditados</li></Link>
              <Link to="/community"><li>Comunidades</li></Link>
              <Link to="/login"><li>Login</li></Link>
            </ul>
          </nav>
          <button onClick={ handleToPageRegister }>Cadastre-se</button>
        </div>
      </MainHeader>
    </Container>
  );
};
