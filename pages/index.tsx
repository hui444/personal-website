import dynamic from 'next/dynamic'
import type { NextPage } from 'next/types'
import { useRef, Suspense } from 'react'

import { SECTIONS } from 'common/constants'
import Nav from 'components/Nav'
import Layout from 'components/Layout'
import LoadingSpinner from 'components/LoadingSpinner'

import { MainContainer } from 'styles'

const About = dynamic(() => import('components/Sections/About'), {
  suspense: true,
})
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

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Layout>
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
          <About ref={aboutSectionRef} />

          <Education ref={educationSectionRef} />

          <Skills ref={skillsSectionRef} />

          <Work ref={workSectionRef} />

          <Contact ref={contactSectionRef} />
        </MainContainer>
      </Layout>
    </Suspense>
  )
}

export default Home
