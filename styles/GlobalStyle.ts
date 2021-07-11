import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
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
