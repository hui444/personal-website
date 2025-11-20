import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.glass.medium};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.glass.light};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
`

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  white-space: pre;
  flex: 1;

  > p {
    white-space: break-spaces;
  }
`

export const ProjectTitle = styled.h2`
  margin-block: 0 5px;
  ${(props) => props.theme.typo.default['body--bold']};
  color: #ffffff;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile['body--bold']};
  }
`
