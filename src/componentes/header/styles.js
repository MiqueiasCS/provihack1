import styled from "styled-components";

export const Container = styled.div`
  hr.top {
    border: 1px solid rgba(209, 209, 209, 0.2);
    margin-bottom: 24px;
  }
`;

export const Cabecalho = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  .usertype {
    ul {
      display: flex;
      width: 250px;
      justify-content: space-between;
      align-items: center;

      li {
        font-size: 14px;
        cursor: pointer;

        :hover {
          color: #41b57d;
          transition: 0.5s;
        }
      }

      li:first-child {
        color: #41b57d;
      }
    }
  }
  .accessibility {
    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 180px;
        cursor: pointer;

        span {
          font-size: 14px;
        }

        svg {
          font-size: 20px;
        }

        :hover {
          color: #41b57d;
          transition: 0.5s;
        }
      }
    }
  }
`;

export const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  .menu-navegacao {
    display: flex;
    justify-content: space-between;
    width: 590px;
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

      li:first-child {
        color: #41b57d;
      }
    }

    button {
      background-color: #41b57d;
      border-radius: 6px;
      color: #ffffff;
      width: 130px;
      height: 50px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;
