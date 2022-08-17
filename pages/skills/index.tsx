import { NextPage } from 'next/types'

import Section from 'components/Section'
import SkillsGrid from 'components/SkillsGrid'

const Skills: NextPage = () => (
  <Section title="My Skills">
    <SkillsGrid />
  </Section>
)

export default Skills
