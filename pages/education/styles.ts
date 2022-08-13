import styled from 'styled-components'

export const StyledH3 = styled.h3`
  font-weight: 600;
`

export const StyledP = styled.p`
  margin-block: 0;

  ul + & {
    margin-top: 10px;
  }
`

export const StyledList = styled.ul`
  margin-block: 0;
  padding-inline-start: 20px;
`
