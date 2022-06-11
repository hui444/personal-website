import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 2rem 1rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
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
