import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${theme.colors.pageBackground}
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  h1 {
    ${theme.typo.h1};
    margin-block: 0;
  }
  
  h2 {
    ${theme.typo.h2};
    margin-block: 0;
  }
  
  h3 {
    ${theme.typo.h3};
    margin-block: 0;
  }

`
