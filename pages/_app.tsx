import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import { GlobalStyle } from '@styles/global'
import theme from '@styles/theme'
import Layout from 'components/Layout'
import useMediaQuery from 'hooks/useMediaQuery'
import Construction from 'components/Construction'
import { BREAKPOINT } from 'common/constants'

function MyApp({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const isBreakpoint = useMediaQuery(BREAKPOINT)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {isVisible && isBreakpoint ? (
          <Construction isVisible={isVisible} setIsVisible={setIsVisible} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </>
  )
}

export default MyApp
