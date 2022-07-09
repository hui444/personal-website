import SKILLS from './index.data'

import { ContentContainer, SkillTitle, SkillsText } from './styles'

const Skills = () => {
  return (
    <>
      <h1>My Skills</h1>
      <ContentContainer>
        {SKILLS.map((skill) => (
          <div key={skill.id}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillsText>{skill.text}</SkillsText>
          </div>
        ))}
      </ContentContainer>
    </>
  )
}

export default Skills
