import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const UsersContext = createContext();

export const UsersProviders = ({ children }) => {
  const [users, setUsers] = useState([]);

  const createUser = (data) => {
    api
      .post("", data)
      .then((response) => console.log(response))
      .catch((e) => console.log("ERRO", e));
  };

  const deleteUser = (user_id) => {
    const newUserList = users.filter((user) => user.id !== user_id);
    api
      .delete(`/${user_id}`)
      .then((response) => {
        console.log(response);
        setUsers(newUserList);
      })
      .catch((e) => console.log("Error", e));
  };

  const getByNivel = (user_nivel) => {
    api
      .get("", { params: { nivel: user_nivel } })
      .then((response) => console.log(response))
      .catch((e) => console.log("Erro", e));
  };

  const getbyId = (user_id) => {
    api
      .get(`/${user_id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log("Error", e));
  };

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setUsers([...response.data.content]);
      })
      .catch((e) => {
        console.log("ERROR", e);
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, createUser, deleteUser, getByNivel, getbyId }}
    >
      {children}
    </UsersContext.Provider>
  );
};

//get,post /users
//user_by_id get /users/<id>
//delete /users/<id>
//put /users/<id>
// users?nivel=júnior get
// oauth/token -> *** post
