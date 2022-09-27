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
      Final year Computer Engineering undergraduate at the National University
      of Singapore, with a strong background in web development and special care
      on the user experience. Passionate for learning new technologies and
      methodologies.
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
