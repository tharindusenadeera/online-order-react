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

  //Menu
  .nav-menu{
    li{
      a{
        color: ${theme.colors.white};

        &:hover{
          color: ${theme.colors.gold};
        }
      }
    } 
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

  //Ant Drawer{
  .drawer-custom{
    .ant-drawer-content-wrapper{
      @media ${theme.device.xs}{
        width: 100% !important; //Drawer size in Mobile
      }
      @media ${theme.device.sm}{
        width: 500px !important; //Drawer size in Tab & Dekstop
      }
      .ant-drawer-header{
        background-color: ${theme.colors.greyf3f4f4};
        .ant-drawer-title{
          font-size: 1.375rem ;
          font-weight: 400;
        }
        .ant-drawer-close{
          &:focus{
            outline: unset;
          }
        }
      }
      .ant-drawer-body{
        padding: unset;
      }
    }
    
  }
  

`;

export default GlobalStyle;
