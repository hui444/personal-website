import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const EmbededPrototype = styled.iframe.attrs({
  width: '400',
  height: '600',
  allowFullScreen: true,
})`
  flex-shrink: 0;

  @media screen and (max-width: ${BREAKPOINT}) {
    margin: auto;
  }
`
