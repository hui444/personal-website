import { SECTIONS } from 'common/constants'
import React from 'react'

import { MainContainer, ContentContainer } from './styles'

interface SectionProps {
  section: SECTIONS
  title: string
  children: React.ReactNode
  isLast?: boolean
}

const Section = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SectionProps>
>((props, ref) => (
  <MainContainer className={props.section} ref={ref} isLast={props.isLast}>
    <ContentContainer>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </ContentContainer>
  </MainContainer>
))

Section.displayName = 'Section'

export default Section
