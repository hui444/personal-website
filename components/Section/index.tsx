import React from 'react'

import { MainContainer } from './styles'

interface SectionProps {
  title: string
  children: React.ReactNode
}

const Section = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<SectionProps>
>((props, ref) => (
  <MainContainer ref={ref}>
    <h1>{props.title}</h1>
    <div>{props.children}</div>
  </MainContainer>
))

Section.displayName = 'Section'

export default Section
