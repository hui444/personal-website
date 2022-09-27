import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { NextPage } from 'next/types'
import { useRef, Suspense } from 'react'

import portraitSrc from 'assets/images/portrait.jpg'
// import useMediaQuery from 'hooks/useMediaQuery'
import { SECTIONS } from 'common/constants'
import Nav from 'components/Nav'
import Layout from 'components/Layout'
import LoadingSpinner from 'components/LoadingSpinner'

import { FlexBox, IntroContent, MainContainer } from 'styles'

// const Construction = dynamic(() => import('components/Construction'), {
//   suspense: true,
// })
const Education = dynamic(() => import('components/Sections/Education'), {
  suspense: true,
})
const Skills = dynamic(() => import('components/Sections/Skills'), {
  suspense: true,
})
const Work = dynamic(() => import('components/Sections/Work'), {
  suspense: true,
})
const Contact = dynamic(() => import('components/Sections/Contact'), {
  suspense: true,
})

const Home: NextPage = () => {
  const aboutSectionRef = useRef(null)
  const educationSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const workSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  // const [isVisible, setIsVisible] = useState<boolean>(true)
  // const isBreakpoint = useMediaQuery(BREAKPOINT)

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* {isVisible && isBreakpoint ? (
        <Construction isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : ( */}
      <Layout>
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
                  development and special care on the user experience.
                  Passionate for learning new technologies and methodologies.
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

            <Education ref={educationSectionRef} />

            <Skills ref={skillsSectionRef} />

            <Work ref={workSectionRef} />

            <Contact ref={contactSectionRef} />
          </MainContainer>
        </>
      </Layout>
      {/* )} */}
    </Suspense>
  )
}

export default Home
