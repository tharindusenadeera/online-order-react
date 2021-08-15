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
  .ant-custom-modal{
    top: 25px;
    .ant-modal-close{
      color: ${theme.colors.white};
      opacity: 0.75;
      &:hover{
        opacity: 1;
      }
      &:focus{
        outline: unset;
      }
    }
    .ant-modal-body{
      padding: unset;
    }
  }

`;

export default GlobalStyle;
