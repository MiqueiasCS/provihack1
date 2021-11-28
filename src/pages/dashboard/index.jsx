import { Container } from "./styles";
import { Header } from "../../componentes/header";
import { Footer } from "../../componentes/footer";
import { NextPage } from "../../componentes/nextPage";
import { Search } from "../../componentes/search/search";
import { ContainerPersonCardUser } from "../../components/containerCardUser";

export const Dashboard = () => {
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
      <Footer />
    </Container>
  );
};
