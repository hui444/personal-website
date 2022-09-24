import styled from 'styled-components'

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
