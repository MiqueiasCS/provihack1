import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 40px;
  height: 158px;

  div {
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 1040px;

    div {
      h3 {
        font-size: 16px;
        /* line-height: 38px; */
        margin-bottom: 12px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
      }
    }

    .contato {
    }
    .endereco {
    }
    .redes_socias {
      div {
        display: flex;
        justify-content: space-between;
        svg {
          color: #41b57d;
          font-size: 24px;
          cursor: pointer;

          :hover {
            color: #41b57dad;
          }
        }
      }
    }
  }
`;
