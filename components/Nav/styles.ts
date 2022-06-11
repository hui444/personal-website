import styled from 'styled-components'

export const StyledNav = styled.nav`
  width: 100vw;
  height: 3rem;
  background: ${(props) => props.theme.colors.blue[300]};
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
