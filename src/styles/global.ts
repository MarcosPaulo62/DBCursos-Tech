import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
    black: "#000000",
    offWhite: "#F5F5F5",
    error: "#F34F50",
    success: "#36C76C",
  },
};
