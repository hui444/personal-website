import styled from 'styled-components'
import { BREAKPOINT, DATE_WIDTH } from 'common/constants'

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;

  @media screen and (max-width: ${BREAKPOINT}) {
    display: block;
  }
`

const LINE_WIDTH = '2.5px'

export const VerticalLine = styled.hr`
  border: ${LINE_WIDTH} solid ${(props) => props.theme.colors.blue[300]};
  margin-right: calc((${DATE_WIDTH} + ${LINE_WIDTH}) / -2);
  background-color: ${(props) => props.theme.colors.blue[300]};

  @media screen and (max-width: ${BREAKPOINT}) {
    display: none;
  }
`

export const InfoContainer = styled.div`
  > div + div {
    margin-top: 3rem;

    @media screen and (max-width: ${BREAKPOINT}) {
      margin-top: 2rem;
    }
  }

  :last-child {
    border-bottom: 3rem solid ${(props) => props.theme.colors.pageBackground};

    @media screen and (max-width: ${BREAKPOINT}) {
      border-bottom-width: 2rem;
    }
  }
`
