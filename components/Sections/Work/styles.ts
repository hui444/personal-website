import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.blue[300]};
  :hover,
  :active {
    color: ${(props) => props.theme.colors.accent.red};
  }
`
