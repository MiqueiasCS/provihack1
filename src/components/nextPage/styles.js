import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;

  > div {
    cursor: pointer;
  }

  > div:first-child {
    background-color: #41b57d;
    color: #ffffff;
  }

  svg {
    font-size: 20px;
  }
`;

export const NumberContainer = styled.div`
  text-align: center;
  width: 25px;
  height: 25px;
  font-size: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
