import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-inline: 1rem;
`

export const ConstructionText = styled.p`
  text-align: center;
`

export const StyledButton = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.colors.blue[100]};
  border: none;
  border-radius: 5px;
  width: fit-content;
`
