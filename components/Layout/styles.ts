import styled from 'styled-components'
import { NAV_HEIGHT } from 'common/constants'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
`

export const StyledMain = styled.main`
  margin-inline: auto;
  height: 100%;
  min-height: 100vh;
  padding-top: ${NAV_HEIGHT};
`
