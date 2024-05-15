import { ReactNode, memo } from 'react'

import { SECTIONS } from 'common/constants'

import { MainContainer, ContentContainer } from './styles'

interface SectionProps {
  section: SECTIONS
  title: string
  children: ReactNode
  isLast?: boolean
}

const Section = memo(function Section(props: SectionProps) {
  return (
    <MainContainer className={props.section} isLast={props.isLast}>
      <ContentContainer>
        <h1>{props.title}</h1>
        <div>{props.children}</div>
      </ContentContainer>
    </MainContainer>
  )
})

Section.displayName = 'Section'

export default Section
