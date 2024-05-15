import React from 'react'

import { WorkType } from 'common/types'

import { StyledLink } from './styles'

const WORK_EXPERIENCES: WorkType[] = [
  {
    id: 'work-5',
    title: 'Software Developer, Map Creator',
    company: 'Motional Singapore Pte. Ltd.',
    dates: {
      startDate: { month: 7, year: 2023 },
      isCurrent: true,
    },
    description: {
      text: [
        'Effectively resolved technical issues and improved user experience through systematic bug fixes and enhancements',
        'Demonstrated strong software development skills by implementing new features to expand functionality and optimize processes',
        'Ensured project success by providing comprehensive documentation for developers and users, facilitating seamless integration and understanding',
        "Contributed to team's technical advancement by laying groundwork for future features and actively participating in discussions and presentations",
      ],
      skills:
        'TypeScript, React, Redux, RxJS, ReactLeaflet, CSS, Git, Figma, Jest',
    },
  },
  {
    id: 'work-4',
    title: 'Software Development Intern, Map Creator',
    company: 'Motional Singapore Pte. Ltd.',
    dates: {
      startDate: { month: 8, year: 2022 },
      endDate: { month: 4, year: 2023 },
      isCurrent: false,
    },
    description: {
      text: [
        'Developed and implement software features that enhance user experience, ensuring optimal functionality and debugging where necessary',
        'Leveraged React Leaflet and RxJS to construct interactive map objects and validations in the web application, streamlining map annotation processes for greater efficiency',
      ],
      skills:
        'TypeScript, React, Redux, RxJS, ReactLeaflet, CSS, Git, Figma, C#, MVC, PostgreSQL',
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
        'Implemented cross-platform web-based features, user interfaces, Node.js and Golang based services to support community safety in TikTok',
        'Responsible for optimizing scalability, reliability and responsiveness of web-based application pages, and to deliver compelling end user experience',
        'Implemented complex web applications with efficient and reusable front-end systems',
        'Collaborated with product design, product management, and software engineering teams to deliver compelling user-facing products;',
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
          improving the digital experience for 400 residents, with features like
          facility booking
        </React.Fragment>,
        'Collaborated with backend developers and designers to build the web application',
        'Led a team to create a comprehensive feature to help ease supper collation amongst hall resident (March - July 2021)',
        <React.Fragment key="work-experience-1__training-website">
          Skillfully managed a website to effectively train and onboard new team
          members on React and Redux (
          <StyledLink
            href="https://github.com/rhdevs/rhdevs-frontend-training-AY2122"
            target="_blank"
            rel="noreferrer"
          >
            RHDevs training website repository
          </StyledLink>
          )
        </React.Fragment>,
      ],
      skills: 'TypeScript, React, Redux, CSS (styled-components), Git, Figma',
    },
  },
]

export default WORK_EXPERIENCES
