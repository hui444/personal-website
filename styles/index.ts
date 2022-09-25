import { MAX_CONTENT_WIDTH } from 'common/constants'
import styled from 'styled-components'

export const StyledH3 = styled.h3`
  font-weight: 600;
`

export const StyledP = styled.p`
  margin-block: 0;

  ul + & {
    margin-top: 10px;
  }
`

export const StyledList = styled.ul`
  margin-block: 0;
  padding-inline-start: 20px;
`

export const StyledLink = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.blue[300]};
  :hover,
  :active {
    color: ${(props) => props.theme.colors.accent.red};
  }
`

// landing page
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlexBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr;
  column-gap: 3rem;
  max-width: calc(${MAX_CONTENT_WIDTH} + 4rem);
  padding-inline: 2rem;
  margin: auto;
`

export const IntroContent = styled.div`
  margin: auto;
`
