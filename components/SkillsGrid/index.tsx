import Skill from '../Skill'
import { SkillType } from 'common/types'

import {
  ContentContainer,
  SkillTitle,
  SkillsText,
  SkillsContainer,
} from './styles'
import SKILLS from './index.data'

const SkillsGrid = () => (
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
)

export default SkillsGrid
