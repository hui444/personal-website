import styled from 'styled-components'
import { BREAKPOINT } from 'common/constants'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: ${BREAKPOINT}) {
    gap: 1.5rem;
  }
`

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${BREAKPOINT}) {
    gap: 0;
  }
`
