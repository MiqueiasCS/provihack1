import styled from "styled-components";

export const ContainerForm = styled.div`

    width: 40%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    button{
        padding: 15px 0px;
        width: 100%;
        background-color: #41b57d;
        border: none;
        border-radius: 5px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
    }

    strong{
        color: #41b57d;
    }

    .text-error{
        font-size: 12px;
        color: red;
    }

    input{
        
        border: 2px solid #808080;
        border-radius: 5px;

        :focus{
            border:2px solid #41b57d;
        }
    }
`;

export const ContainerText = styled.div`

    margin: 20px 0px;

    .input-photo{

        padding: 15px 10px;
        border: 2px solid #808080;
        border-radius: 5px;

        :focus{
            border:2px solid #41b57d;
        }
    }
`;

export const ContainerLabel = styled.div`

    display: flex;
    text-align: left;
    flex-direction: column;

    margin-bottom: 20px;

    input, textarea, select{

        padding: 15px 10px;
        border: 2px solid #808080;
        border-radius: 5px;

        :focus{
            border:2px solid #41b57d;
        }
    }
`;

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;