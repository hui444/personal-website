import Section from 'components/Section'
import Skill from 'components/Skill'
import SKILLS from './index.data'

import {
  ContentContainer,
  SkillTitle,
  SkillsText,
  SkillsContainer,
} from './styles'

const Skills = () => {
  return (
    <Section title="My Skills">
      <ContentContainer>
        {SKILLS.map((skill) => (
          <div key={skill.id}>
            <SkillTitle>{skill.title}</SkillTitle>
            {skill.text && <SkillsText>{skill.text}</SkillsText>}
            <SkillsContainer>
              {skill.skill?.map((s) => (
                <Skill key={s.label} icon={s.icon} label={s.label} />
              ))}
            </SkillsContainer>
          </div>
        ))}
      </ContentContainer>
    </Section>
  )
}

export default Skills
