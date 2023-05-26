import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


:root {
    --background: #121212;
    --titleText: #000;
    --inputContent: #111111;
  }

  html {
  scroll-behavior: smooth;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 500 16px Inter, sans-serif;
}
`
