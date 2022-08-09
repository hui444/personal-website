import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  > .animated {
    display: none;
  }

  :hover {
    > .default {
      display: none;
    }
    > .animated {
      display: block;
    }
  }
`
