import { forwardRef } from 'react'
import styled from 'styled-components'

import { SECTIONS, BREAKPOINT } from 'common/constants'

import Section from '../Section'
import { PROJECTS } from './index.data'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  gap: 3rem;

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    gap: 2rem;
  }
`

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  white-space: pre;

  > p {
    white-space: break-spaces;
  }
`

const ProjectTitle = styled.h2`
  margin-block: 0 5px;
  ${(props) => props.theme.typo.default['body--bold']};

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile['body--bold']};
  }
`

const Projects = forwardRef<HTMLDivElement>((_, ref) => (
  <Section ref={ref} title="My Projects" section={SECTIONS.PROJECTS}>
    <ProjectsContainer>
      {PROJECTS.map(({ title, description, component: Component }, index) => (
        <ProjectContainer key={title} reverse={index % 2 !== 0}>
          <ProjectDetailsContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <p>{description}</p>
          </ProjectDetailsContainer>
          <Component />
        </ProjectContainer>
      ))}
    </ProjectsContainer>
  </Section>
))

Projects.displayName = 'Projects'

export default Projects
