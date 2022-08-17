import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'

import InfoLink from 'components/InfoLink'
import Section from 'components/Section'
import TextField from 'components/TextField'
import Button from 'components/Button'

import useSnackbar from 'hooks/useSnackbar'
import { EMAIL_REGEX } from 'common/constants'
import { MONTHS } from 'common/months'
import GitHubIcon from '../../assets/icons/github-blue.svg'
import LinkedInIcon from '../../assets/icons/linkedin-blue.svg'
import MailIcon from '../../assets/icons/mail-blue.svg'

import { ContentContainer, StyledText, FormContainer } from '@styles/index'
import 'antd/dist/antd.css'

interface FormInput {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInput>({ mode: 'onChange' })

  const sendToEmail = async (data: FormInput) => {
    axios({
      method: 'POST',
      url: process.env.NEXT_PUBLIC_FORM_URL,
      data: data,
    }).catch((err) => {
      console.log('error: ', err)
    })
  }

  const getSendTime = () => {
    const today = new Date()
    const year = today.getFullYear()

    const month = MONTHS[today.getMonth()]
    const date = today.getDate()
    const hour = today.getHours()
    const minute = `0${today.getMinutes()}`.slice(-2)
    const time = `${hour % 12 === 0 ? 12 : hour % 12}:${minute} ${
      hour < 12 ? 'AM' : 'PM'
    }`
    return `${date} ${month} ${year} ${time}`
  }

  const sendToTele = (data: FormInput) => {
    const TELE_API = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELE_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}`
    const text = `
<b>${data.subject}</b>

${data.message}

<i>Submitted by:</i> 
${data.name}
${data.email}

${getSendTime()}
`

    fetch(TELE_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        parse_mode: 'html',
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: null,
        silent: false,
      }),
    }).catch((err) => {
      console.log('error: ', err)
    })
  }

  const [success] = useSnackbar('success')
  const [error] = useSnackbar('error')

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    Promise.all([sendToEmail(data), sendToTele(data)])
      .then(() => {
        success('Your message has been sent!')
        reset()
      })
      .catch(() => error('Something went wrong, please try again!'))
  }

  return (
    <Section title="Contact Me!">
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
