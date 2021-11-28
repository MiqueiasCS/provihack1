import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { NextPage } from "../../componentes/nextPage";
import { Search } from "../../componentes/search/search";
import { ContainerPersonCardUser } from "../../components/containerCardUser";
import { useContext } from "react";
import { UsersContext } from "../../providers/users";

export const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <Container>
      <Header />
      <div className="search">
        <h2>Encontre o candidato ideal</h2>
        <Search />
      </div>

      <ContainerPersonCardUser />
      
      <div className="next_page">
        <NextPage />
      </div>
      <button onClick={() => console.log(users)}>usuarios cadastrados</button>
      <Footer />
    </Container>
  );
};
