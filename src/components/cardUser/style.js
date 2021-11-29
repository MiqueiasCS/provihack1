import styled from "styled-components";

export const ContainerCard = styled.div`

    display: flex;
    justify-content: space-between;
    margin: 40px 0px;

    padding: 20px;

    align-items: center;

    border: 2px solid white;
    border-radius: 5px;
    background-color: #eff9f5;

    button{
        margin-top: 15px;
        padding:10px 40px;
        background-color: #41b57d;
        border-radius: 5px;
        color: white;
        text-transform: #fff;
    }

    .container-flex{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    :hover{
        border: 2px  solid #41b57d;
        cursor: pointer;
        transition: 0.5s;
    }
`;

export const ContainerSub = styled.div`

    border: 1x solid red;
    max-width: 50%;
    min-width: 10%;
    margin: 30px 0px;

    h2{
        margin: 15px 0px;
    }

    .description{
        color:#808080;
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin-right: 20px;
    }

    .email{
        margin: 10px 0px;
        color: #41b57d;
    }
`;