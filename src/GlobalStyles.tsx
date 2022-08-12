import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        /*----- COLORS -----*/
        --black-color: #000;
        --white-color: #FFF;
        --error-color: #F43B47;
        /*----- FONTS -----*/
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        list-style: none;
        outline: none;
        border: none;
        text-decoration: none;
    }
    html {
        overscroll-behavior: contain;
        height: 100%;
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }
    body{
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, input{
        
    }
`;

export default GlobalStyles;



/*---------- THEMES ----------*/

export const lightTheme = {
    backgroundOriginal: "#FFF",
    colorPrimary: "#000"
}

export const darkTheme = {
    backgroundOriginal: "#000",
    colorPrimary: "#FFF"
}