import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        font-family: 'Inter', sans-serif;
    }
    
    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ol, ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: 0;
    }

   img {
        max-width: 100%;
    }

    

   
`;

export const ColorsTheme = {
  color: {
    blue: "#1C58F8",
    white: "#FFFFFF",
    darkBlue: "#070F26",
    mediumBlue: "#000F38",
    black: "#000000",
    offWhite: "#F5F5F5",
    error: "#FC0000",
    success: "#36C76C",
  },
};
