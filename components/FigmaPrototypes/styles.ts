import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const EmbededPrototype = styled.iframe.attrs({
  width: '400',
  height: '800',
  allowFullScreen: true,
  loading: 'lazy',
  sandbox: 'allow-same-origin allow-scripts allow-popups allow-forms',
})`
  flex-shrink: 0;
  border: none;

  @media screen and (max-width: ${BREAKPOINT}) {
    margin: auto;
    max-width: 100%;
    width: 100%;
    height: 600px;
  }
`
