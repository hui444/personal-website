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

// contacts page
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const StyledText = styled.p`
  grid-area: text;
  display: flex;
  align-items: center;
  margin-block: 0 5px;
  ${(props) => props.theme.typo.body};
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    'text text'
    'name email'
    'subject subject'
    'message message'
    'message message'
    'button button';
  column-gap: 26px;
`
