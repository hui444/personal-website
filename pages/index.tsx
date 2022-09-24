import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next/types'
import { useRef } from 'react'

import portraitSrc from '../assets/images/portrait.jpg'
import Section from 'components/Section'
import InfoSection from 'components/InfoSection'
import { EducationType, InfoSectionProps, WorkType } from 'common/types'
import { PAGES, SERVER } from 'common/constants'
import SkillsGrid from 'components/SkillsGrid'
import Nav from 'components/Nav'
import Contact from 'components/Contact'

import { FlexBox, MainContainer } from '@styles/index'

const Home: NextPage<{
  workInfo: WorkType[]
  educationInfo: EducationType[]
}> = (props) => {
  const aboutSectionRef = useRef(null)
  const educationSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const workSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  const refs = {
    [PAGES.ABOUT]: aboutSectionRef,
    [PAGES.EDUCATION]: educationSectionRef,
    [PAGES.SKILLS]: skillsSectionRef,
    [PAGES.WORK]: workSectionRef,
    [PAGES.CONTACT]: contactSectionRef,
  }

  return (
    <>
      <Nav refs={refs} />
      <MainContainer>
        <FlexBox ref={aboutSectionRef}>
          <div>
            <h1>
              Hello,
              <br />I am Hui Hui!
            </h1>
            <p>
              Final year Computer Engineering undergraduate at the National
              University of Singapore, with a strong background in web
              development and special care on the user experience. Passionate
              for learning new technologies and methodologies.
            </p>
          </div>
          <Image
            src={portraitSrc}
            alt="Hui Hui's self portrait"
            objectFit="contain"
            objectPosition="right bottom"
            layout="responsive"
          />
        </FlexBox>

        <Section ref={educationSectionRef} title="My Education">
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

        <Section ref={skillsSectionRef} title="My Skills">
          <SkillsGrid />
        </Section>

        <Section ref={workSectionRef} title="My Work Experience">
          <InfoSection
            color="Yellow-Blue"
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
            showDuration
          />
        </Section>

        <Contact ref={contactSectionRef} />
      </MainContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const workInfo = await (await fetch(`${SERVER}/api/work`)).json()
  const educationInfo = await (await fetch(`${SERVER}/api/education`)).json()

  return {
    props: { educationInfo, workInfo },
  }
}

export default Home
