import { ChangeEvent, Dispatch, SetStateAction, CSSProperties } from 'react'

import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { FieldError } from 'react-hook-form/dist/types/errors'
import {
  FormInput,
  FormInputContainer,
  FormLabel,
  FormTextArea,
  HelperText,
  RedAsterisk,
} from './styles'

interface InputProps {
  label: string
  required?: boolean
  defaultValue?: string
  helperText?: string
  error?: boolean | FieldError
  setter?: Dispatch<SetStateAction<string>>
  register?: UseFormRegisterReturn
  style?: CSSProperties
}

type TextAreaProps =
  | {
      textArea: true
      rows?: number
    }
  | {
      textArea?: never
      rows?: never
    }

type TextFieldProps = InputProps & TextAreaProps

const TextField = (props: TextFieldProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.setter) {
      props.setter(event.target.value)
    }
    console.log(event.target.value)
  }

  const hasError = (error?: boolean | FieldError) => {
    if (typeof error === 'boolean') {
      return error
    } else {
      return error !== undefined
    }
  }

  return (
    <FormInputContainer style={props.style}>
      {props.textArea ? (
        <FormTextArea
          rows={props.rows ?? 3}
          placeholder=" "
          defaultValue={props.defaultValue}
          onChange={onChange}
          error={hasError(props.error)}
          id={props.label}
          {...props.register}
        />
      ) : (
        <FormInput
          placeholder=" "
          defaultValue={props.defaultValue}
          onChange={onChange}
          error={hasError(props.error)}
          id={props.label}
          {...props.register}
        />
      )}
      <FormLabel htmlFor={props.label}>
        {props.label}
        {props.required && <RedAsterisk> *</RedAsterisk>}
      </FormLabel>
      <HelperText error={hasError(props.error)}>{props.helperText}</HelperText>
    </FormInputContainer>
  )
}

export default TextField
