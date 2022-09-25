import { BREAKPOINT } from 'common/constants'
import styled from 'styled-components'

export const StyledLogo = styled.div`
  cursor: pointer;
  margin-right: 15px;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.neutral[100]};

  @media screen and (max-width: ${BREAKPOINT}px) {
    margin-right: 0;
  }
`
