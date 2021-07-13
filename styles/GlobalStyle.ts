import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
  /* height: 100%; */
  /* overflow: auto; */
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul, li{
   list-style:none;
   }
  body {
    box-sizing: border-box;
    color: #2b2b2b;
  }
`

export default GlobalStyle
