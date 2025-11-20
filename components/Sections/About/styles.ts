import styled from 'styled-components'

import { BREAKPOINT, MAX_CONTENT_WIDTH } from 'common/constants'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas: 'greeting image' 'description image';
  column-gap: 4rem;
  row-gap: 2rem;
  max-width: calc(${MAX_CONTENT_WIDTH} + 4rem);
  padding-inline: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin: auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: ${(props) => props.theme.colors.gradient.fun1};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 0;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: -30px;
    width: 150px;
    height: 150px;
    background: ${(props) => props.theme.colors.gradient.fun4};
    border-radius: 50%;
    opacity: 0.1;
    z-index: 0;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'greeting' 'image' 'description';
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`

export const Greeting = styled.h1`
  grid-area: greeting;
  margin-block: auto;
  color: #ffffff;
  animation: fadeInUp 0.6s ease-out, wave 3s ease-in-out infinite;
  position: relative;
  z-index: 1;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1deg);
    }
    75% {
      transform: rotate(-1deg);
    }
  }
`

export const Description = styled.p`
  grid-area: description;
  animation: fadeInUp 0.8s ease-out 0.2s both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const ImageContainer = styled.div`
  grid-area: image;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  animation: fadeIn 1s ease-out 0.4s both, bounce 4s ease-in-out infinite;
  position: relative;
  z-index: 1;
  border: 2px solid ${(props) => props.theme.colors.glass.border};
  background: ${(props) => props.theme.colors.glass.dark};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    border-width: 3px;
    margin: 0 10%;
  }
`
