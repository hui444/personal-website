import styled, { css, keyframes } from 'styled-components'

import { ANIMATION } from 'common/types'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  i {
    height: 48px;
    width: 48px;
  }

  label {
    margin-top: 5px;
  }

  > .animated {
    display: none;
  }

  :hover {
    > .default {
      display: none;
    }
    > .animated {
      display: block;
    }
  }
`

const zoom = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
`

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledIcon = styled.div<{ type?: ANIMATION }>`
  animation: ${(props) =>
      props.type === ANIMATION.ZOOM
        ? css`
            ${zoom} 700ms
          `
        : props.type === ANIMATION.SHAKE
        ? css`
            ${shake} 1s
          `
        : css`
            ${spin} 2s
          `}
    linear infinite;
  height: 48px;
  width: 48px;
`
