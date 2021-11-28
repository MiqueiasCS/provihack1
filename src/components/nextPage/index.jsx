import { Container } from "./styles";
import { Number } from "./num";
import { BsArrowRight } from "react-icons/bs";

export const NextPage = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container>
      {numbers.map((num, index) => (
        <Number key={index} number={num} />
      ))}
      <p>próxima</p>
      <BsArrowRight />
    </Container>
  );
};
