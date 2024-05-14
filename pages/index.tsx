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
import About from 'components/Sections/About'
import Work from 'components/Sections/Work'
import Skills from 'components/Sections/Skills'
import Education from 'components/Sections/Education'
import Contact from 'components/Sections/Contact'
import Projects from 'components/Sections/Projects'
import { MainContainer } from 'styles'

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
  const aboutSectionRef = useRef(null)
  const educationSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const workSectionRef = useRef(null)
  const contactSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)

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
    [
      aboutSectionRef,
      workSectionRef,
      skillsSectionRef,
      educationSectionRef,
      contactSectionRef,
      projectsSectionRef,
    ]
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
