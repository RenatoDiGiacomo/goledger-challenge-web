import { createGlobalStyle, css } from "styled-components";

function HeadersLoop() {
  let headers = '';

  for (let i = 0; 6; i++) {
    headers += `h${i}`
  }
  return css`${headers}`
}

export const GlobalStyle = createGlobalStyle`

  *,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,p,div,span,li,a{
    color: white
  }
  body{
    background: linear-gradient(to bottom, #1a1a1a,#000000);
    height: 100vh;
  }
`

