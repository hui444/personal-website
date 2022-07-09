import styled from 'styled-components'
import { BREAKPOINT, NAV_HEIGHT, MAX_CONTENT_WIDTH } from 'common/constants'

export const MainContainer = styled.div<{ isBreakpoint: boolean }>`
  width: ${(props) => (props.isBreakpoint ? `${BREAKPOINT}px` : '100vw')};
  height: 100%;
  min-height: 100vh;
  position: relative;
`

export const StyledMain = styled.main`
  padding: calc(${NAV_HEIGHT} + 1rem) 2rem 1rem;
  margin-inline: auto;
  max-width: ${MAX_CONTENT_WIDTH};
`
