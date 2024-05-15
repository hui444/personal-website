import { memo } from 'react'

import { SECTIONS } from 'common/constants'
import InfoSection from 'components/InfoSection'
import { EducationType, SectionInfoProps } from 'common/types'

import Section from '../Section'
import EDUCATION from './index.data'

const Education = memo(function Education() {
  return (
    <Section title="My Education" section={SECTIONS.EDUCATION}>
      <InfoSection
        color="Blue-Yellow"
        sectionInfo={EDUCATION.map(
          (e: EducationType): SectionInfoProps => ({
            id: e.id,
            info: {
              title: e.school,
              subtitle: e.study,
              dates: e.dates,
              description: { element: e.description },
            },
            hasFade: e.hasFade,
          })
        )}
      />
    </Section>
  )
})

Education.displayName = 'Education'

export default Education
