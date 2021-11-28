import styled from "styled-components";


export const ContainerLogin = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text-social-media{
        text-align: center;
        margin: 35px auto;
        color: #b0b0b0;
    }

    span{
        color: red;
    }

    strong{
        color: #41b57d;
    }
`;

export const ContainerTextLogin = styled.div`

    max-width: 50%;

    div{
        width: 400px;
    }

    h2{
        font-size: 50px;
    }
`;

export const ContainerFormLogin = styled.div`

    width: 500px;

    .title-form{
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`

    display: flex;
    
    flex-direction: column;

    div{
        margin: 20px 0px;
        text-align: left;

        input{
            padding: 20px;
            border: none;
            border-radius: 7px;
            width: 100%;

            border:2px solid;
            
            :focus{
                border: 2px solid #41b57d;
            }
        }
    }

    button{
        padding: 20px 0px;
        background-color: #41b57d;
        border: none;
        border-radius: 10px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        
        :hover{
            filter:brightness(0.9);
            transition: 0.3s;
        }
    }
`;

export const ContainerAccess = styled.div`
    display: flex;
    justify-content: space-around;

    div{
        width: 100px;
        text-align: center;
    }
`;