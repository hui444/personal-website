import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const FormInputContainer = styled.div`
  position: relative;
  margin-block: 15px 5px;

  @media screen and (max-width: ${BREAKPOINT}) {
    margin-block: 5px 2px;
  }
`

export const FormInput = styled.input<{
  error?: boolean
}>`
  ${(props) => props.theme.typo.default.form};
  display: block;
  width: 100%;
  height: 44px;
  background: ${(props) => props.theme.colors.glass.dark};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: solid 1px
    ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : props.theme.colors.glass.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.small};
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:hover:not(:focus) {
    background: ${(props) => props.theme.colors.glass.medium};
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : props.theme.colors.blue[300]};
  }

  &:focus {
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : props.theme.colors.blue[300]};
    box-shadow: ${(props) =>
      props.error
        ? `0 0 0 3px ${props.theme.colors.state.error}20`
        : `0 0 0 3px ${props.theme.colors.blue[300]}20`};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 12px;
    top: -9px;
    background: ${(props) => props.theme.colors.pageBackground};
    padding: 0 6px;
    color: ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : 'rgba(255, 255, 255, 0.9)'};
    border-radius: 50px;
  }

  &:focus + label {
    color: ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : props.theme.colors.blue[300]};
  }

  &:focus + label > em {
    color: ${(props) => props.theme.colors.state.error};
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.form};
  }
`

export const FormTextArea = styled(FormInput).attrs({
  as: 'textarea',
})<{
  rows: number
}>`
  height: ${(props) => props.rows * 40}px;
  padding: 10px 15px;
  resize: vertical;
`

export const FormLabel = styled.label<{ error?: boolean }>`
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 12px;
  left: 12px;
  ${(props) => props.theme.typo.default.form};
  background: transparent;
  padding: 0 8px;
  color: ${(props) =>
    props.error ? props.theme.colors.state.error : 'rgba(255, 255, 255, 0.6)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  pointer-events: none;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.form};
  }
`

export const RedAsterisk = styled.em`
  font-style: normal;
`

export const HelperText = styled.p<{ error?: boolean }>`
  margin: 5px;
  font-size: 0.9em;
  color: ${(props) =>
    props.error ? props.theme.colors.state.error : 'rgba(255, 255, 255, 0.7)'};
  padding-left: 12px;
  min-height: calc(0.95em + 3px);
  line-height: 1;
`
