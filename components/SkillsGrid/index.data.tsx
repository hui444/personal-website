import Image from 'next/image'

// programming languages
import CSS3 from '../../assets/icons/css3.svg'
import HTML5 from '../../assets/icons/html5.svg'

import Java from '../../assets/icons/java.svg'
import JavaAnimated from '../../assets/icons/animated/java.gif'

import JavaScript from '../../assets/icons/javascript.svg'
import JavaScriptAnimated from '../../assets/icons/animated/javascript.gif'

import TypeScript from '../../assets/icons/typescript.svg'

import Python from '../../assets/icons/python.svg'
import PythonAnimated from '../../assets/icons/animated/python.gif'

import C from '../../assets/icons/c.svg'
import CSharp from '../../assets/icons/c-sharp.svg'
import CPP from '../../assets/icons/c++.svg'
import Swift from '../../assets/icons/swift.svg'

// tools
import React from '../../assets/icons/react.svg'
import Redux from '../../assets/icons/redux.svg'
import NodeJS from '../../assets/icons/nodejs.svg'
import PostgreSQL from '../../assets/icons/postgresql.svg'
import ASPNET from '../../assets/icons/net-framework.svg'
import SASS from '../../assets/icons/sass.svg'

import { SkillType, ANIMATION } from 'common/types'

const SKILLS: SkillType[] = [
  {
    id: 'skill-1',
    title: 'Programming Languages',
    skill: [
      {
        icon: {
          default: <CSS3 />,
          animation: ANIMATION.ZOOM,
        },
        label: 'CSS 3',
      },
      {
        icon: {
          default: <HTML5 />,
          animation: ANIMATION.ZOOM,
        },
        label: 'HTML 5',
      },
      {
        icon: {
          default: <Java />,
          animated: (
            <Image src={JavaAnimated} alt="Java gif" height={48} width={48} />
          ),
        },
        label: 'Java',
      },
      {
        icon: {
          default: <JavaScript />,
          animated: (
            <Image
              src={JavaScriptAnimated}
              alt="JavaScript gif"
              height={48}
              width={48}
            />
          ),
        },
        label: 'JavaScript',
      },
      {
        icon: {
          default: <TypeScript />,
          animation: ANIMATION.ZOOM,
        },
        label: 'TypeScript',
      },
      {
        icon: {
          default: <Python />,
          animated: (
            <Image
              src={PythonAnimated}
              alt="Python gif"
              height={48}
              width={48}
            />
          ),
        },
        label: 'Python',
      },
      {
        icon: {
          default: <C />,
        },
        label: 'C',
      },
      {
        icon: {
          default: <CSharp />,
        },
        label: 'C#',
      },
      {
        icon: {
          default: <CPP />,
        },
        label: 'C++',
      },
      {
        icon: {
          default: <Swift />,
          animation: ANIMATION.SHAKE,
        },
        label: 'Swift',
      },
    ],
  },
  {
    id: 'skill-2',
    title: 'Tools',
    skill: [
      {
        icon: {
          default: <React />,
        },
        label: 'React',
      },
      {
        icon: {
          default: <Redux />,
          animation: ANIMATION.SHAKE,
        },
        label: 'Redux',
      },
      {
        icon: {
          default: <NodeJS />,
          animation: ANIMATION.ZOOM,
        },
        label: 'NodeJS',
      },
      {
        icon: {
          default: <PostgreSQL />,
          animation: ANIMATION.ZOOM,
        },
        label: 'PostgreSQL',
      },
      {
        icon: {
          default: <ASPNET />,
        },
        label: 'ASP.NET',
      },
      {
        icon: {
          default: <SASS />,
          animation: ANIMATION.SHAKE,
        },
        label: 'SASS/SCSS',
      },
    ],
  },
  {
    id: 'skill-3',
    title: 'Languages',
    text: 'English (Fluent), Chinese/Mandarin (Fluent)',
  },
]

export default SKILLS
