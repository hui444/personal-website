import Image from 'next/image'
import { forwardRef } from 'react'

import { SECTIONS } from 'common/constants'
import portraitSrc from 'assets/images/portrait.jpg'

import { MainContainer, Greeting, Description, ImageContainer } from './styles'

const About = forwardRef<HTMLDivElement>((_, ref) => (
  <MainContainer ref={ref} className={SECTIONS.ABOUT}>
    <Greeting>
      Hello,
      <br />I am Hui&nbsp;Hui!
    </Greeting>
    <Description>
      Experienced software developer specializing in frontend web development
      and dedicated to optimizing user experience. With a solid foundation built
      through internship experiences and a year of full-time employment, I excel
      in crafting intuitive interfaces and leveraging established technologies
      to deliver exceptional results. Committed to continuous growth, I eagerly
      pursue new skills and methodologies to stay ahead in this dynamic
      industry.
    </Description>
    <ImageContainer>
      <Image
        src={portraitSrc}
        alt="Hui Hui's self portrait"
        objectFit="contain"
        objectPosition="right bottom"
        layout="responsive"
        placeholder="blur"
      />
    </ImageContainer>
  </MainContainer>
))

About.displayName = 'About'

export default About
