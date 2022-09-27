import { CSSProperties } from 'react'

import { StyledButton } from './styles'

const Button = ({
  style,
  children,
  isDisabled,
}: {
  style?: CSSProperties
  children: string
  isDisabled?: boolean
}) => (
  <StyledButton style={style} isDisabled={isDisabled}>
    {children}
  </StyledButton>
)

export default Button
