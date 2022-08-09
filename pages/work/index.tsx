import InfoSection from 'components/InfoSection'
import Section from 'components/Section'
import WORK_EXPERIENCES from './index.data'

const Work = () => (
  <Section title="My Work Experience">
    <InfoSection
      color="Blue-Yellow"
      sectionInfo={WORK_EXPERIENCES.map((we) => ({
        id: we.id,
        info: {
          title: we.title,
          subtitle: we.company,
          dates: we.dates,
          description: we.description,
        },
      }))}
    />
  </Section>
)

export default Work
