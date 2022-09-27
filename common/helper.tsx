import axios from 'axios'

import { MONTHS } from './months'
import { Dates, FormInput } from './types'

import { StyledLink } from 'styles'

export const replaceWithLink = (
  text: string,
  anchor?: {
    label?: string
    link?: string
  }[]
): string | JSX.Element[] => {
  if (anchor) {
    const textArray = text.split('<a>')
    return textArray.map((str, index) => {
      return (
        <>
          {str}
          {index !== textArray.length - 1 && (
            <StyledLink href={anchor[index].link}>
              {anchor[index].label}
            </StyledLink>
          )}
        </>
      )
    })
  }
  return text
}

export const stringifyDate = (date: Dates): string => {
  const startDate = date.startDate
  let dateString = ''

  if (startDate.month) {
    dateString += `${MONTHS[startDate.month - 1]} `
  }

  dateString += `${startDate.year} - `

  if (date.endDate) {
    const endDate = date.endDate
    if (endDate.month) {
      dateString += `${MONTHS[endDate.month - 1]} `
    }
    dateString += endDate.year
  } else {
    dateString += 'Present'
  }

  return dateString
}

export const getDuration = (dates: Dates): string => {
  const startDate = dates.startDate
  const today = new Date()
  const endDate = dates.isCurrent
    ? { month: today.getMonth() + 1, year: today.getFullYear() }
    : dates.endDate
  let years = endDate.year - startDate.year
  let months = years * 12

  if (startDate.month && endDate.month) {
    months += endDate.month - startDate.month + 1
  }

  years = ~~(months / 12)
  months = months % 12

  let duration = ''

  if (years) {
    duration += `${years} yrs`
  }

  if (months) {
    if (years) {
      duration += ' '
    }
    duration += `${months} mos`
  }

  return duration
}

export const getSendTime = () => {
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

export const sendToEmail = async (data: FormInput) => {
  axios({
    method: 'POST',
    url: process.env.NEXT_PUBLIC_FORM_URL,
    data: data,
  }).catch((err) => {
    console.log('error: ', err)
  })
}

export const sendToTele = (data: FormInput) => {
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
