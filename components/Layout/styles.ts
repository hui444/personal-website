import styled from 'styled-components'
import { NAV_HEIGHT } from 'common/constants'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: ${(props) => props.theme.colors.pageBackground};
  background-image: radial-gradient(
      at 20% 30%,
      rgba(14, 165, 233, 0.15) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 80%, rgba(167, 139, 250, 0.15) 0px, transparent 50%),
    radial-gradient(at 40% 60%, rgba(244, 114, 182, 0.15) 0px, transparent 50%);
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(14, 165, 233, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: float1 20s ease-in-out infinite;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: fixed;
    bottom: -20%;
    left: -5%;
    width: 800px;
    height: 800px;
    background: radial-gradient(
      circle,
      rgba(167, 139, 250, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: float2 25s ease-in-out infinite;
    z-index: 0;
    pointer-events: none;
  }

  @keyframes float1 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(50px, -100px) scale(1.1);
    }
    66% {
      transform: translate(-30px, 50px) scale(0.9);
    }
  }

  @keyframes float2 {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(-80px, 120px) scale(1.2);
    }
    66% {
      transform: translate(60px, -80px) scale(0.8);
    }
  }
`

export const BackgroundBlob = styled.div<{
  top?: string
  left?: string
  right?: string
  bottom?: string
  color: string
  size: string
  delay: string
}>`
  position: fixed;
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: ${(props) => props.color};
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  filter: blur(60px);
  opacity: 0.3;
  animation: blob ${(props) => props.delay} ease-in-out infinite;
  z-index: 0;
  pointer-events: none;

  @keyframes blob {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      transform: translate(0, 0) scale(1);
    }
    25% {
      border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
      transform: translate(20px, -30px) scale(1.1);
    }
    50% {
      border-radius: 30% 70% 70% 30% / 70% 30% 30% 70%;
      transform: translate(-20px, 20px) scale(0.9);
    }
    75% {
      border-radius: 70% 30% 30% 70% / 30% 70% 70% 30%;
      transform: translate(30px, 10px) scale(1.05);
    }
  }
`

export const StyledMain = styled.main`
  margin-inline: auto;
  height: 100%;
  min-height: 100vh;
  padding-top: ${NAV_HEIGHT};
  position: relative;
  z-index: 1;
`
