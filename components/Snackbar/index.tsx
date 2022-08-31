import SuccessIcon from '../../assets/icons/snackbar/success-tick.svg'
import ErrorIcon from '../../assets/icons/snackbar/error-cross.svg'

import { SnackbarContainer, StyledSnackbar } from './styles'

const Snackbar = ({
  type,
  message,
  isVisible,
}: {
  type?: 'success' | 'error'
  message?: string
  isVisible?: boolean
}) =>
  isVisible && type ? (
    <SnackbarContainer>
      <StyledSnackbar>
        {type === 'success' ? <SuccessIcon /> : <ErrorIcon />}
        <p>{message ?? ''}</p>
      </StyledSnackbar>
    </SnackbarContainer>
  ) : (
    <></>
  )

export default Snackbar
