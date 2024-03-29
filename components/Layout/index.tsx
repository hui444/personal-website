import Head from 'next/head'
import { ReactNode } from 'react'

import { MainContainer, StyledMain } from './styles'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Head>
      <title>Hui Hui</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainContainer>
      <StyledMain>{children}</StyledMain>
    </MainContainer>
  </>
)

export default Layout
