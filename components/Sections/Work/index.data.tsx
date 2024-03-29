import React from 'react'

import { WorkType } from 'common/types'

import { StyledLink } from './styles'

const WORK_EXPERIENCES: WorkType[] = [
  {
    id: 'work-4',
    title: 'Software Development Intern, Map Creator',
    company: 'Motional Singapore Pte. Ltd.',
    dates: {
      startDate: {
        month: 8,
        year: 2022,
      },
      isCurrent: true,
    },
    description: {
      text: [
        'Develop and implement software features that enhance user experience, ensuring optimal functionality and debugging where necessary',
        'Leverage React Leaflet and RxJS to construct interactive map objects and validations in the web application, streamlining map annotation processes for greater efficiency',
      ],
      skills:
        'TypeScript, React, Redux, RxJS, ReactLeaflet, CSS, Git, Figma, C#, MVC',
    },
  },
  {
    id: 'work-3',
    title: 'Frontend Engineer Intern (Trust and Safety Platform)',
    company: 'TikTok Pte. Ltd.',
    dates: {
      startDate: { month: 5, year: 2022 },
      endDate: { month: 7, year: 2022 },
    },
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
    dates: {
      startDate: { month: 6, year: 2021 },
      endDate: { month: 1, year: 2022 },
    },
    description: {
      text: [
        'Successfully executed website development, bringing concepts to full deployment with precision and efficiency',
        'Conducted thorough error-checking and accuracy assessments, promptly resolving any issues to ensure seamless website performance',
      ],
      skills: 'HTML, CSS, ASP.NET (C#), Figma, TFVC',
    },
  },
  {
    id: 'work-1',
    title: 'Frontend Lead',
    company: 'NUS Raffles Hall Developers (RHDevs)',
    dates: {
      startDate: { month: 8, year: 2020 },
      endDate: { month: 5, year: 2022 },
    },
    description: {
      text: [
        <React.Fragment key="work-experience-1__RHApp">
          Innovatively led the creation of a Progressive Web Application,
          improving the digital experience for 400 residents (
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
          Skillfully managed a website to effectively train and onboard new team
          members (
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
