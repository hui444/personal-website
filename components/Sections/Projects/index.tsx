import { SECTIONS } from 'common/constants'

import Section from '../Section'
import { PROJECTS } from './index.data'
import {
  ProjectsContainer,
  ProjectContainer,
  ProjectDetailsContainer,
  ProjectTitle,
} from './styles'
import { memo } from 'react'

const Projects = memo(function Projects() {
  return (
    <Section title="My Projects" section={SECTIONS.PROJECTS}>
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
  )
})

Projects.displayName = 'Projects'

export default Projects
