import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const StyledText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  ${(props) => props.theme.typo.body};
`

export const FormContainer = styled.form`
  display: grid;
`
