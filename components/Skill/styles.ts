import styled, { css, keyframes } from 'styled-components'

import { ANIMATION } from 'common/types'
import { BREAKPOINT } from 'common/constants'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.25rem;
  cursor: pointer;
  background: ${(props) => props.theme.colors.glass.medium};
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  min-width: 120px;
  max-width: 180px;
  box-sizing: border-box;

  i {
    height: 56px;
    width: 56px;
    min-width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    flex-shrink: 0;

    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
  }

  label {
    margin-top: 10px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.3s ease;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: visible;
  }

  > .animated {
    display: none;
  }

  :hover {
    transform: translateY(-6px) scale(1.05);
    background: ${(props) => props.theme.colors.glass.light};
    box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.4);
    border-color: ${(props) => props.theme.colors.blue[300]};

    > .default {
      display: none;
    }
    > .animated {
      display: block;
    }

    i {
      transform: scale(1.1);
    }

    label {
      color: ${(props) => props.theme.colors.blue[300]};
    }
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: row;
    padding: 0.75rem;
    max-width: none;
    min-width: auto;
    width: auto;

    i {
      transform: scale(0.8);
      height: 40px;
      width: 40px;
      min-width: 40px;

      img {
        width: 32px;
        height: 32px;
      }
    }

    label {
      margin-top: 0;
      margin-left: 8px;
      text-align: left;
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
