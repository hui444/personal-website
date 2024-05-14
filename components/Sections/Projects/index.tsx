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

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
  }
`

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: auto;
  margin-right: 3rem;
  white-space: pre;

  > p {
    white-space: break-spaces;
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    margin: 0 0 2rem;
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
      {PROJECTS.map(({ title, description, component: Component }) => (
        <ProjectContainer key={title}>
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
