import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #b9b9be;
  border-radius: 6px;
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      border: none;
      width: 338px;
    }
    svg {
      color: #41b57d;
      font-size: 18px;
    }
  }
`;
