import React from 'react'

import { StyledLink } from './styles'
type Work = {
  id: string
  title: string
  company: string
  dates: string
  description?: {
    text: React.ReactNode[]
    skills: string
  }
}

const WORK_EXPERIENCES: Work[] = [
  {
    id: 'work-4',
    title: 'Software Development Intern, Map Creator (Front-End)',
    company: 'Motional Singapore Pte. Ltd.',
    dates: 'Aug 2022 - Present',
  },
  {
    id: 'work-3',
    title: 'Frontend Engineer Intern (Trust and Safety Platform)',
    company: 'TikTok Pte. Ltd.',
    dates: 'May 2022 - Jul 2022',
    description: {
      text: [
        'Implement cross-platform web-based features, user interfaces, Node.js and Golang based services to support community safety in TikTok',
        'Responsible for optimizing scalability, reliability and responsiveness of web-based application pages, and to deliver compelling end user experience',
        'Implement complex web applications with efficient and reusable front-end systems',
        'Collaborate with product design, product management, and software engineering teams to deliver compelling user-facing products;',
      ],
      skills: 'JavaScript, React, HTML/CSS, Git, Figma',
    },
  },
  {
    id: 'work-2',
    title: 'R&D Software Engineering Intern',
    company: 'Makino Asia Pte Ltd',
    dates: 'Jun 2021 - Jan 2022',
    description: {
      text: [
        'Redesign web pages and assessed UIUX designs for technical feasibility',
        'Implemented website from concept to deployment',
        'Did error-checking and accuracy checks to make sure software projects were correct, resolving any errors or other problem that were found',
      ],
      skills: 'HTML, CSS, ASP.NET (C#), Figma, TFVC',
    },
  },
  {
    id: 'work-1',
    title: 'Frontend Lead',
    company: 'NUS Raffles Hall Developers (RHDevs)',
    dates: 'Aug 2020 - Apr 2022',
    description: {
      text: [
        <React.Fragment key="work-experience-1__RHApp">
          Pioneered the development of a Progressive Web Application in the
          frontend, serving some 400 residents (
          <StyledLink
            href="http://www.rhapp.lol"
            target="_blank"
            rel="noreferrer"
          >
            RHapp
          </StyledLink>
          )
        </React.Fragment>,
        'Collaborated with backend developers and designers to build the web application',
        'Led a team to create a comprehensive feature to help ease supper collation amongst hall resident (March - July 2021)',
        <React.Fragment key="work-experience-1__training-website">
          Maintained a website to facilitate training of new members (
          <StyledLink
            href="https://rhdevs-frontend-training-ay-2122.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            RHDevs training website
          </StyledLink>
          )
        </React.Fragment>,
      ],
      skills: 'TypeScript, React, Redux, CSS (styled-components), Git, Figma',
    },
  },
]

export default WORK_EXPERIENCES
