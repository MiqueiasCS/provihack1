import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

a{
    text-decoration: none;
    cursor: pointer;
}

button{
    cursor: pointer;
}

ul, li{
    list-style: none;
}

.container-app{
    max-width: 1260px;
    margin: 0 auto;
    padding: 20px;
}

`;