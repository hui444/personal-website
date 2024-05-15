import dynamic from 'next/dynamic'
import type { NextPage } from 'next/types'
import { Suspense, ComponentType, RefAttributes } from 'react'

import { SECTIONS } from 'common/constants'
import Nav from 'components/Nav'
import Layout from 'components/Layout'
import LoadingSpinner from 'components/LoadingSpinner'
import { ORDERED_SECTIONS } from 'components/Nav/index.data'
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
const Projects = dynamic(() => import('components/Sections/Projects'), {
  suspense: true,
})

const SECTION_TO_COMPONENT_MAP: Record<
  SECTIONS,
  ComponentType<RefAttributes<HTMLDivElement>>
> = {
  [SECTIONS.ABOUT]: About,
  [SECTIONS.WORK]: Work,
  [SECTIONS.SKILLS]: Skills,
  [SECTIONS.EDUCATION]: Education,
  [SECTIONS.CONTACT]: Contact,
  [SECTIONS.PROJECTS]: Projects,
}

const Home: NextPage = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Layout>
        <Nav />
        <MainContainer>
          {ORDERED_SECTIONS.map((section) => {
            const Component = SECTION_TO_COMPONENT_MAP[section]
            return <Component key={section} />
          })}
        </MainContainer>
      </Layout>
    </Suspense>
  )
}

export default Home
