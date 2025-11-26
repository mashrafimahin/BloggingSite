import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0; padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #ffffff;
        min-height: auto;
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
