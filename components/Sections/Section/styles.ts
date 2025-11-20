import styled, { css } from 'styled-components'

import { BREAKPOINT, MAX_CONTENT_WIDTH } from 'common/constants'

export const MainContainer = styled.div<{ isLast?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem;
  ${(props) =>
    props.isLast &&
    css`
      padding-bottom: 4rem;
    `}

  h1 + div {
    margin-top: 3rem;
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    padding-top: 2rem;
    padding-bottom: 2rem;

    h1 + div {
      margin-top: 1.5rem;
    }
  }
`

export const ContentContainer = styled.div`
  padding-inline: 2rem;
  max-width: calc(${MAX_CONTENT_WIDTH} + 4rem);
  width: 100%;
  margin: auto;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
