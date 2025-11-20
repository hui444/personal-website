import { BREAKPOINT } from 'common/constants'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${theme.colors.pageBackground};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    ${theme.typo.default.h1};
    margin-block: 0;
    color: #ffffff;
    
    @media screen and (max-width: ${BREAKPOINT}) {
      ${theme.typo.mobile.h1};
    }
  }
  
  h2 {
    ${theme.typo.default.h2};
    margin-block: 0;
    color: #ffffff;
    
    @media screen and (max-width: ${BREAKPOINT}) {
      ${theme.typo.mobile.h2};
    }
  }
  
  h3 {
    ${theme.typo.default.h3};
    margin-block: 0;
    color: rgba(255, 255, 255, 0.9);
    
    @media screen and (max-width: ${BREAKPOINT}) {
      ${theme.typo.mobile.h3}; 
    }
  }
  
  p {
    ${theme.typo.default.body};
    margin-block: 0;
    color: ${theme.colors.neutral[300]};
    
    @media screen and (max-width: ${BREAKPOINT}) {
      ${theme.typo.mobile.body}; 
    }
  }
`
