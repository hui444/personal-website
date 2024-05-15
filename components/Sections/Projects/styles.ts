import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  white-space: pre;

  > p {
    white-space: break-spaces;
  }
`

export const ProjectTitle = styled.h2`
  margin-block: 0 5px;
  ${(props) => props.theme.typo.default['body--bold']};

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile['body--bold']};
  }
`
