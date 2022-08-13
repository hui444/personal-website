import styled from 'styled-components'

export const StyledButton = styled.button<{ isDisabled?: boolean }>`
  height: 36px;
  width: 100%;
  background-color: ${(props) =>
    props.isDisabled ? '#ccc' : props.theme.colors.blue[300]};
  border: none;
  border-radius: 8px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.neutral[100]};
  ${(props) => props.theme.typo.form};
`
