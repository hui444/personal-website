import styled from 'styled-components'
import { NAV_HEIGHT } from 'common/constants'

export const StyledNav = styled.nav`
  width: 100%;
  height: ${NAV_HEIGHT};
  background: ${(props) => props.theme.colors.blue[300]};
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 300;
`

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
`
