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
  height: 40px;
  background: transparent;
  border: solid 1px
    ${(props) => (props.error ? props.theme.colors.state.error : '#ccc')};
  transition: all 0.3s ease;
  padding: 0 15px;
  outline: none;
  border-radius: 8px;

  &:focus {
    border-color: ${(props) =>
      props.error
        ? props.theme.colors.state.error
        : props.theme.colors.blue[300]};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 12px;
    top: -9px;
    color: ${(props) =>
      props.error ? props.theme.colors.state.error : '#999'};
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
  top: 10px;
  left: 10px;
  ${(props) => props.theme.typo.default.form};
  background: ${(props) => props.theme.colors.pageBackground};
  padding: 0 10px;
  color: ${(props) => (props.error ? props.theme.colors.state.error : '#999')};
  transition: all 0.3s ease;

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
  color: ${(props) => (props.error ? props.theme.colors.state.error : '#666')};
  padding-left: 12px;
  min-height: calc(0.95em + 3px);
  line-height: 1;
`

export const Icon = styled.i`
  position: absolute;
  top: 10px;
  right: 15px;
`
