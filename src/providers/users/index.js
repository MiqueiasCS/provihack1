import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const UsersContext = createContext();

export const UsersProviders = ({ children }) => {
  const [users, setUsers] = useState([]);

  const createUser = (data, navigate) => {
    api
      .post("", data)
      .then((response) => {
        toast.success(`Cadastro realizado!!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setUsers([...users, response.data]);
        navigate("/dashboard");
      })
      .catch((e) => {
        toast.error("Este email já está cadastrado!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
