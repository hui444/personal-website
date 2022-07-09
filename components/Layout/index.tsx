import { ReactNode } from 'react'

import useMediaQuery from 'hooks/useMediaQuery'
import { BREAKPOINT } from 'common/constants'
import Nav from 'components/Nav'

import { MainContainer, StyledMain } from './styles'

const Layout = ({ children }: { children: ReactNode }) => {
  const isBreakpoint = useMediaQuery(BREAKPOINT)

  return (
    <MainContainer isBreakpoint={isBreakpoint}>
      <Nav />
      <StyledMain>{children}</StyledMain>
    </MainContainer>
  )
}

export default Layout
