import styled, { css } from 'styled-components'
import { MAX_CONTENT_WIDTH } from 'common/constants'

export const MainContainer = styled.div<{ isLast?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 2rem;
  ${(props) =>
    props.isLast &&
    css`
      padding-bottom: 3rem;
    `}

  h1 + div {
    margin-top: 50px;
  }
`

export const ContentContainer = styled.div`
  padding-inline: 2rem;
  max-width: calc(${MAX_CONTENT_WIDTH} + 4rem);
  width: 100%;
  margin: auto;
`
