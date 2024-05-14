import SuccessIcon from 'public/icons/snackbar/success-tick.svg'
import ErrorIcon from 'public/icons/snackbar/error-cross.svg'

import { SnackbarContainer, StyledSnackbar } from './styles'
import Image from 'next/image'

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
        {type === 'success' ? <Image src={SuccessIcon} alt="success" /> : <Image src={ErrorIcon} alt="error" />}
        <p>{message ?? ''}</p>
      </StyledSnackbar>
    </SnackbarContainer>
  ) : (
    <></>
  )

export default Snackbar
