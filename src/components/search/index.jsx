import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export const Search = ({ users, setFilteredUsers }) => {
  const [inputValue, SetInputValue] = useState("");

  const handleUsers = () => {
    if (inputValue === "") {
      setFilteredUsers(users);
    } else {
      let newList = users.filter((user) => {
        let nivel =
          user.nivel.toLocaleLowerCase() === inputValue.toLocaleLowerCase();
        let state = user.state === inputValue.toUpperCase();
        let city =
          user.city.toLocaleLowerCase() === inputValue.toLocaleLowerCase();

        return nivel || state || city;
      });
      setFilteredUsers(newList);
    }
  };

  const handleInput = (e) => {
    // console.log(inputValue);
    handleUsers();
    SetInputValue("");
  };

  return (
    <Container>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            SetInputValue(e.target.value);
          }}
          placeholder="Pesquise por cargo, cidade ou estado"
        />
        <AiOutlineSearch onClick={handleInput} />
      </div>
    </Container>
  );
};
