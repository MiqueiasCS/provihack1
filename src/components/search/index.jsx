import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

export const Search = () => {
  const [inputValue, SetInputValue] = useState("");

  const handleInput = (e) => {
    console.log(inputValue);
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
