import { NAV_HEIGHT, SNACKBAR_ANIMATION_DURATION } from 'common/constants'
import styled, { keyframes } from 'styled-components'

const MessageMoveInOut = keyframes`
  0% {
    max-height: 0;
    padding: 0;
    opacity: 0;
  }
  20% {
    max-height: 150px;
    padding: 8px;
    opacity: 1;
  }
  80% {
    max-height: 150px;
    padding: 8px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    padding: 0;
    opacity: 0;
  }
`

export const SnackbarContainer = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 1000;
  top: calc(${NAV_HEIGHT} - 10px);
  left: 0;
  animation: ${SNACKBAR_ANIMATION_DURATION}ms ${MessageMoveInOut} forwards;
`

export const StyledSnackbar = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  background-color: ${(props) => props.theme.colors.neutral[100]};
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

  p {
    margin-left: 8px;
    margin-block: 0;
  }
`
