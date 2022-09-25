import { BREAKPOINT } from 'common/constants'
import styled from 'styled-components'

export const StyledA = styled.a<{ isActive?: boolean }>`
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.neutral[100]
      : props.theme.colors.blue[400]};
  text-transform: capitalize;
  white-space: nowrap;
  transition: color 250ms ease;

  :hover,
  :active {
    color: ${(props) => props.theme.colors.neutral[100]};
  }

  @media screen and (max-width: ${BREAKPOINT}px) {
    color: ${(props) => props.theme.colors.blue[400]};
  }
`
