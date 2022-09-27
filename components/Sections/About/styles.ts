import styled from 'styled-components'

import { BREAKPOINT, MAX_CONTENT_WIDTH } from 'common/constants'

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 2fr 1fr;
  grid-template-areas: 'greeting image' 'description image';
  column-gap: 3rem;
  max-width: calc(${MAX_CONTENT_WIDTH} + 4rem);
  padding-inline: 2rem;
  margin: auto;

  @media screen and (max-width: ${BREAKPOINT}) {
    grid-template-rows: max-content max-content;
    grid-template-areas: 'greeting image' 'description description';
    gap: 1rem;
    padding-bottom: 2rem;
  }
`

export const Greeting = styled.h1`
  grid-area: greeting;
  margin-block: auto;
`

export const Description = styled.p`
  grid-area: description;
`

export const ImageContainer = styled.div`
  grid-area: image;
  @media screen and (max-width: ${BREAKPOINT}) {
    clip-path: circle(40% at 50% 50%);
  }
`
