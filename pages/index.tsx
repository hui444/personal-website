import dynamic from 'next/dynamic'
import type { NextPage } from 'next/types'
import {
  useRef,
  Suspense,
  useMemo,
  ComponentType,
  RefAttributes,
  RefObject,
} from 'react'

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
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const educationSectionRef = useRef<HTMLDivElement>(null)
  const skillsSectionRef = useRef<HTMLDivElement>(null)
  const workSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)
  const projectsSectionRef = useRef<HTMLDivElement>(null)

  const SECTION_TO_REF_MAP: Record<
    SECTIONS,
    RefObject<HTMLDivElement>
  > = useMemo(
    () => ({
      [SECTIONS.ABOUT]: aboutSectionRef,
      [SECTIONS.WORK]: workSectionRef,
      [SECTIONS.SKILLS]: skillsSectionRef,
      [SECTIONS.EDUCATION]: educationSectionRef,
      [SECTIONS.CONTACT]: contactSectionRef,
      [SECTIONS.PROJECTS]: projectsSectionRef,
    }),
    []
  )

  const ORDERED_COMPONENTS: {
    section: SECTIONS
    component: ComponentType<RefAttributes<HTMLDivElement>>
    ref: RefObject<HTMLDivElement>
  }[] = useMemo(
    () =>
      ORDERED_SECTIONS.map((section) => ({
        section,
        component: SECTION_TO_COMPONENT_MAP[section],
        ref: SECTION_TO_REF_MAP[section],
      })),
    [SECTION_TO_REF_MAP]
  )

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Layout>
        <Nav refs={SECTION_TO_REF_MAP} />
        <MainContainer>
          {ORDERED_COMPONENTS.map(({ section, component: Component, ref }) => (
            <Component ref={ref} key={section} />
          ))}
        </MainContainer>
      </Layout>
    </Suspense>
  )
}

export default Home
