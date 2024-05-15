import { memo } from 'react'

import { SECTIONS } from 'common/constants'
import { SkillType } from 'common/types'
import Skill from 'components/Skill'
import Section from '../Section'

import SKILLS from './index.data'
import {
  ContentContainer,
  SkillsContainer,
  SkillsText,
  SkillTitle,
} from './styles'

const Skills = memo(function Skills() {
  return (
    <Section title="My Skills" section={SECTIONS.SKILLS}>
      <ContentContainer>
        {SKILLS.map((skill: SkillType) => (
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
})

Skills.displayName = 'Skills'

export default Skills
