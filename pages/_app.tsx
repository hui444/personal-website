import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "styles/global";
import theme from "styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
