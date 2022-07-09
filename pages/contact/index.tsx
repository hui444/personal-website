import InfoLink from 'components/InfoLink'

import GitHubIcon from '../../assets/icons/github-blue.svg'
import LinkedInIcon from '../../assets/icons/linkedin-blue.svg'
import MailIcon from '../../assets/icons/mail-blue.svg'

import { ContentContainer, StyledText, FormContainer } from './styles'

const Contact = () => {
  return (
    <>
      <h1>Contact Me!</h1>
      <ContentContainer>
        <div>
          <StyledText>
            You can find me on
            <InfoLink
              openNewTab
              icon={<GitHubIcon height={24} width={24} />}
              label="GitHub"
              href="https://github.com/hui444"
            />
            or
            <InfoLink
              openNewTab
              icon={<LinkedInIcon height={24} width={24} />}
              label="LinkedIn"
              href="https://www.linkedin.com/in/hui-hui-fang/"
            />
          </StyledText>
          <StyledText>
            or email me at
            <InfoLink
              icon={<MailIcon height={24} width={24} />}
              label="huihuiwork@yahoo.com"
              href="mailto:huihuiwork@yahoo.com"
              changeStroke
            />
          </StyledText>
        </div>
        <FormContainer>
          <StyledText>
            Otherwise, you can fill in this form and I will get back to you as
            soon as I can!
          </StyledText>
        </FormContainer>
      </ContentContainer>
    </>
  )
}

export default Contact
