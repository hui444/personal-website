import Image from 'next/image'
import { memo } from 'react'

import { SECTIONS } from 'common/constants'
import portraitSrc from 'assets/images/portrait.jpg'

import { MainContainer, Greeting, Description, ImageContainer } from './styles'

const About = memo(function About() {
  return (
    <MainContainer className={SECTIONS.ABOUT}>
      <Greeting>
        Hello,
        <br />I am Hui&nbsp;Hui!
      </Greeting>
      <Description>
        Experienced fullstack software engineer dedicated to building scalable
        applications that deliver exceptional user experiences. With 2+ years of
        professional experience, I&apos;ve expanded from crafting intuitive
        interfaces to delivering end-to-end solutions across frontend and
        backend systems. I excel at solving complex technical challenges,
        optimizing performance, and leveraging modern technologies to deliver
        exceptional results. Committed to continuous growth, I eagerly pursue
        new skills and methodologies to stay ahead in this dynamic industry.
      </Description>
      <ImageContainer>
        <Image
          src={portraitSrc}
          alt="Hui Hui's self portrait"
          placeholder="blur"
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </ImageContainer>
    </MainContainer>
  )
})

About.displayName = 'About'

export default About
