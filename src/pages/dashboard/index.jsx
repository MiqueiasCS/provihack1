import { Container } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { NextPage } from "../../components/nextPage";
import { Search } from "../../components/search";
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
