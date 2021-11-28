import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-navegacao {
    display: flex;
    justify-content: space-evenly;
    width: 560px;
    align-items: center;

    nav ul {
      display: flex;
      justify-content: space-around;
      width: 440px;

      li {
        cursor: pointer;

        :hover {
          color: #41b57d;
          transition: 0.5s;
        }
      }
    }

    button {
      background-color: #41b57d;
      border-radius: 6px;
      color: #ffffff;
      width: 100px;
      height: 40px;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  .first_session {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 70px 0;
    height: 380px;

    > div {
      display: flex;
      flex-direction: column;
      height: 350px;
      justify-content: space-evenly;
      width: 620px;

      h2 {
        font-weight: 600;
        font-size: 56px;
        color: #212529;
      }
      p {
        font-size: 24px;
      }
      button {
        background-color: #41b57d;
        border-radius: 6px;
        color: #ffffff;
        width: 234px;
        height: 53px;
        font-weight: bold;
        font-size: 14px;
        padding: 18px 32px;
      }
    }

    .first_image {
      width: 580px;
      img {
        width: 100%;
      }
    }
  }

  .second_session {
    display: flex;
    align-items: center;
    margin: 40px 0;
    height: 280px;

    .second_image {
      width: 1000px;
      img {
        width: 80%;
      }
    }

    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .marcador {
        font-size: 20px;
      }
      h2 {
        font-weight: 600;
        font-size: 48px;
        color: #212529;
      }
      p {
        font-size: 24px;
      }
    }
  }

  .third_session {
    margin: 40px 0;
    width: 500px;

    .marcador {
      font-size: 20px;
    }
    h2 {
      font-weight: 600;
      font-size: 48px;
      color: #212529;
    }
  }

  .four_session {
    display: flex;
    margin: 40px 0;
    justify-content: space-between;

    > div {
      width: 318px;
      height: 178px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      svg {
        color: #41b57d;
        font-size: 36px;
      }
      h2 {
        color: #41b57d;
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  .five_session {
    background-color: #41b57d;
    height: 100px;
    margin: 40px 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;

      div.message {
        width: 500px;
        font-size: 20px;
      }

      div {
        button {
          border-radius: 6px;
          background: #ffffff;
          border: 1px solid #ffffff;
          height: 40px;
          width: 115px;
          color: #41b57d;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
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
    width: 1100px;

    div {
      h3 {
        font-size: 16px;
        line-height: 38px;
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
        }
      }
    }
  }
`;
