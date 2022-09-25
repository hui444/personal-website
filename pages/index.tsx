import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next/types'
import { useRef } from 'react'

import portraitSrc from '../assets/images/portrait.jpg'
import Section from 'components/Section'
import InfoSection from 'components/InfoSection'
import { EducationType, InfoSectionProps, WorkType } from 'common/types'
import { SECTIONS, SERVER } from 'common/constants'
import SkillsGrid from 'components/SkillsGrid'
import Nav from 'components/Nav'
import Contact from 'components/Contact'

import { FlexBox, IntroContent, MainContainer } from '@styles/index'

const Home: NextPage<{
  workInfo: WorkType[]
  educationInfo: EducationType[]
}> = (props) => {
  const aboutSectionRef = useRef(null)
  const educationSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const workSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  return (
    <>
      <Nav
        refs={{
          [SECTIONS.ABOUT]: aboutSectionRef,
          [SECTIONS.EDUCATION]: educationSectionRef,
          [SECTIONS.SKILLS]: skillsSectionRef,
          [SECTIONS.WORK]: workSectionRef,
          [SECTIONS.CONTACT]: contactSectionRef,
        }}
      />
      <MainContainer>
        <FlexBox ref={aboutSectionRef} className={SECTIONS.ABOUT}>
          <IntroContent>
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
          </IntroContent>
          <Image
            src={portraitSrc}
            alt="Hui Hui's self portrait"
            objectFit="contain"
            objectPosition="right bottom"
            layout="responsive"
          />
        </FlexBox>

        <Section
          ref={educationSectionRef}
          title="My Education"
          section={SECTIONS.EDUCATION}
        >
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

        <Section
          ref={skillsSectionRef}
          title="My Skills"
          section={SECTIONS.SKILLS}
        >
          <SkillsGrid />
        </Section>

        <Section
          ref={workSectionRef}
          title="My Work Experience"
          section={SECTIONS.WORK}
        >
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
