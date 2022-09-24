import Head from 'next/head'
import { ReactNode } from 'react'

import useMediaQuery from 'hooks/useMediaQuery'
import { BREAKPOINT } from 'common/constants'
// import Nav from 'components/Nav'
// <Nav />
import { MainContainer, StyledMain } from './styles'

const Layout = ({ children }: { children: ReactNode }) => {
  const isBreakpoint = useMediaQuery(BREAKPOINT)

  return (
    <>
      <Head>
        <title>Hui Hui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer isBreakpoint={isBreakpoint}>
        <StyledMain>{children}</StyledMain>
      </MainContainer>
    </>
  )
}

export default Layout
