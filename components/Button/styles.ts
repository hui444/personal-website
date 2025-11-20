import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const StyledButton = styled.button<{ isDisabled?: boolean }>`
  height: 44px;
  width: 100%;
  background: ${(props) =>
    props.isDisabled
      ? 'rgba(255, 255, 255, 0.1)'
      : props.theme.colors.glass.light};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  border-radius: ${(props) => props.theme.borderRadius};
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.neutral[600]};
  font-weight: 600;
  ${(props) => props.theme.typo.default.form};
  box-shadow: ${(props) =>
    props.isDisabled ? 'none' : '0 4px 16px 0 rgba(31, 38, 135, 0.2)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.colors.glass.medium};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.4);
    border-color: ${(props) => props.theme.colors.blue[300]};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: ${(props) => props.theme.shadows.small};
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.form};
  }
`
