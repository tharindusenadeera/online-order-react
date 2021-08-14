import { createGlobalStyle } from "styled-components";
import theme from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font.default};
    /* Font imported in index.html page */
    margin: unset !important;
  }

  a{
    color: ${theme.colors.black};
  }

  //Ant Modal
  .Ant-ustom-modal{
    .ant-modal-body{
      padding: unset;
    }
  }

`;

export default GlobalStyle;
