import { GetStaticProps, NextPage } from 'next/types'
import fetch from 'node-fetch'

import { EducationType, InfoSectionProps } from 'common/types'
import InfoSection from 'components/InfoSection'
import Section from 'components/Section'

const Education: NextPage<{ educationInfo: EducationType[] }> = (props) => (
  <Section title="My Education">
    <InfoSection
      color="Blue-Yellow"
      sectionInfo={props.educationInfo.map(
        (e: EducationType): InfoSectionProps => ({
          id: e.id,
          info: {
            title: e.school,
            subtitle: e.study,
            dates: e.dates,
            description: { formattedText: e.description },
          },
          hasFade: e.hasFade,
        })
      )}
    />
  </Section>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/education')
  const educationInfo = await res.json()
  return {
    props: {
      educationInfo,
    },
  }
}

export default Education
