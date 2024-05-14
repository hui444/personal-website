import styled from 'styled-components'

export const StyledA = styled.a<{ isActive?: boolean }>`
  color: ${(props) => props.theme.colors.neutral[100]};
  font-weight: ${(props) => (props.isActive ? 600 : 'normal')};

  text-transform: capitalize;
  white-space: nowrap;
  transition: color 250ms ease;

  :hover,
  :active {
    font-weight: 600;
  }
`
