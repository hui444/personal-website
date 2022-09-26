import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
