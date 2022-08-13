import InfoSection from 'components/InfoSection'
import Section from 'components/Section'
import EDUCATION, { EducationType } from './index.data'

const Education = () => (
  <Section title="My Education">
    <InfoSection
      color="Blue-Yellow"
      sectionInfo={EDUCATION.map((e: EducationType) => ({
        id: e.id,
        info: {
          title: e.school,
          subtitle: e.study,
          dates: e.dates,
          description: { element: e.description },
        },
        hasFade: e.hasFade,
      }))}
    />
  </Section>
)

export default Education
