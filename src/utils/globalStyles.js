import { createGlobalStyle } from "styled-components";
import theme from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    /* Font imported in index.html page */
    margin: unset !important;
  }

  a{
    color: ${theme.colors.black};
  }

`;

export default GlobalStyle;
