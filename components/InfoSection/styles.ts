import styled from 'styled-components'
import { DATE_WIDTH } from 'common/constants'

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`

const LINE_WIDTH = '2.5px'

export const VerticalLine = styled.hr`
  border: ${LINE_WIDTH} solid ${(props) => props.theme.colors.blue[300]};
  margin-right: calc((${DATE_WIDTH} + ${LINE_WIDTH}) / -2);
`

export const InfoContainer = styled.div`
  > div + div {
    margin-top: 3rem;
  }
`
