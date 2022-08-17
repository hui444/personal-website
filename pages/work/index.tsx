import { GetStaticProps, NextPage } from 'next/types'
import fetch from 'node-fetch'

import InfoSection from 'components/InfoSection'
import Section from 'components/Section'
import { WorkType, InfoSectionProps } from 'common/types'

const Work: NextPage<{ workInfo: WorkType[] }> = (props) => (
  <Section title="My Work Experience">
    <InfoSection
      color="Blue-Yellow"
      sectionInfo={props.workInfo?.map(
        (we: WorkType): InfoSectionProps => ({
          id: we.id,
          info: {
            title: we.title,
            subtitle: we.company,
            dates: we.dates,
            description: {
              list: we.description?.text || we.description?.textWithLink,
              skills: we.description?.skills,
            },
          },
        })
      )}
    />
  </Section>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/work')
  const workInfo = await res.json()
  return {
    props: {
      workInfo,
    },
  }
}

export default Work
