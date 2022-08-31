import { useForm, SubmitHandler } from 'react-hook-form'

import InfoLink from 'components/InfoLink'
import Section from 'components/Section'
import TextField from 'components/TextField'
import Button from 'components/Button'

import { EMAIL_REGEX, SNACKBAR_ANIMATION_DURATION } from 'common/constants'
import GitHubIcon from '../../assets/icons/github-blue.svg'
import LinkedInIcon from '../../assets/icons/linkedin-blue.svg'
import { sendToEmail, sendToTele } from 'common/helper'
import MailIcon from '../../assets/icons/mail-blue.svg'
import { FormInput } from 'common/types'

import { ContentContainer, StyledText, FormContainer } from '@styles/index'
import Snackbar from 'components/Snackbar'
import { useEffect, useState } from 'react'

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInput>({ mode: 'onChange' })

  const [submissionResult, setSubmissionResult] = useState<
    'success' | 'error' | undefined
  >()

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    Promise.all([sendToEmail(data), sendToTele(data)])
      .then(() => {
        setSubmissionResult('success')
        reset()
      })
      .catch(() => setSubmissionResult('error'))
  }

  useEffect(() => {
    if (submissionResult) {
      setTimeout(() => {
        setSubmissionResult(undefined)
      }, SNACKBAR_ANIMATION_DURATION)
    }
  })

  return (
    <Section title="Contact Me!">
      <Snackbar
        isVisible={Boolean(submissionResult)}
        type={submissionResult}
        message={
          submissionResult &&
          (submissionResult === 'success'
            ? 'Your message has been sent!'
            : 'Something went wrong, please try again!')
        }
      />
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
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <StyledText>
            Otherwise, you can fill in this form and I will get back to you as
            soon as I can!
          </StyledText>
          <TextField
            style={{ gridArea: 'name' }}
            label="Name"
            required
            register={register('name', {
              required: 'Please input a name!',
            })}
            error={errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            style={{ gridArea: 'email' }}
            label="Email address"
            required
            register={register('email', {
              required: 'Please input an email!',
              pattern: { value: EMAIL_REGEX, message: 'Invalid email!' },
            })}
            error={errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            style={{ gridArea: 'subject' }}
            label="Subject"
            required
            register={register('subject', {
              required: 'Please input a subject!',
            })}
            error={errors.subject}
            helperText={errors.subject?.message}
          />
          <TextField
            textArea
            style={{ gridArea: 'message' }}
            label="Type your message here..."
            required
            register={register('message', {
              required: 'Please leave a message!',
            })}
            error={errors.message}
            helperText={errors.message?.message}
          />
          <Button style={{ gridArea: 'button' }} isDisabled={!isValid}>
            submit
          </Button>
        </FormContainer>
      </ContentContainer>
    </Section>
  )
}

export default Contact
