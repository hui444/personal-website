import { SECTIONS } from 'common/constants'
import { InfoSectionProps, WorkType } from 'common/types'
import InfoSection from 'components/InfoSection'
import { forwardRef } from 'react'
import Section from '../Section'
import WORK_EXPERIENCES from './index.data'

const Work = forwardRef<HTMLDivElement>((_, ref) => (
  <Section ref={ref} title="My Work Experience" section={SECTIONS.WORK}>
    <InfoSection
      color="Yellow-Blue"
      sectionInfo={WORK_EXPERIENCES.map(
        (we: WorkType): InfoSectionProps => ({
          id: we.id,
          info: {
            title: we.title,
            subtitle: we.company,
            dates: we.dates,
            description: we.description,
          },
        })
      )}
      showDuration
    />
  </Section>
))

Work.displayName = 'Work'

export default Work
