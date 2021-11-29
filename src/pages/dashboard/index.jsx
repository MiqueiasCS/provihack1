import { Container } from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { NextPage } from "../../components/nextPage";
import { Search } from "../../components/search";
import { ContainerPersonCardUser } from "../../components/containerCardUser";
import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../providers/users";

export const Dashboard = () => {
  const { users } = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <Container>
      <Header />
      <div className="search">
        <h2>Encontre o candidato ideal</h2>
        <Search users={users} setFilteredUsers={setFilteredUsers} />
      </div>

      <ContainerPersonCardUser filteredUsers={filteredUsers} />

      <div className="next_page">
        <NextPage />
      </div>
      <Footer />
    </Container>
  );
};
