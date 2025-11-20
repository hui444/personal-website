import Image from 'next/image'

// programming languages
import CSS3 from 'public/icons/css3.svg'
import HTML5 from 'public/icons/html5.svg'

import JavaScript from 'public/icons/javascript.svg'
import JavaScriptAnimated from 'public/icons/animated/javascript.gif'

import TypeScript from 'public/icons/typescript.svg'

import Python from 'public/icons/python.svg'
import PythonAnimated from 'public/icons/animated/python.gif'

import CSharp from 'public/icons/c-sharp.svg'

// tools
import React from 'public/icons/react.svg'
import Redux from 'public/icons/redux.svg'
import NodeJS from 'public/icons/nodejs.svg'
import PostgreSQL from 'public/icons/postgresql.svg'
import SASS from 'public/icons/sass.svg'

import { SkillType, ANIMATION } from 'common/types'

const SKILLS: SkillType[] = [
  {
    id: 'skill-1',
    title: 'Programming Languages',
    skill: [
      {
        icon: {
          default: <Image src={CSS3} alt="CSS3 icon" height={48} width={48} />,
          animation: ANIMATION.ZOOM,
        },
        label: 'CSS 3',
      },
      {
        icon: {
          default: (
            <Image src={HTML5} alt="HTML5 icon" height={48} width={48} />
          ),
          animation: ANIMATION.ZOOM,
        },
        label: 'HTML 5',
      },
      {
        icon: {
          default: (
            <Image
              src={TypeScript}
              alt="TypeScript icon"
              height={48}
              width={48}
            />
          ),
          animation: ANIMATION.ZOOM,
        },
        label: 'TypeScript',
      },
      {
        icon: {
          default: (
            <Image
              src={JavaScript}
              alt="JavaScript icon"
              height={48}
              width={48}
            />
          ),
          animated: (
            <Image
              src={JavaScriptAnimated}
              alt="JavaScript gif"
              height={48}
              width={48}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          ),
        },
        label: 'JavaScript',
      },
      {
        icon: {
          default: (
            <Image src={Python} alt="Python icon" height={48} width={48} />
          ),
          animated: (
            <Image
              src={PythonAnimated}
              alt="Python gif"
              height={48}
              width={48}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          ),
        },
        label: 'Python',
      },
      {
        icon: {
          default: (
            <Image src={CSharp} alt="C Sharp icon" height={48} width={48} />
          ),
        },
        label: 'C#',
      },
    ],
  },
  {
    id: 'skill-2',
    title: 'Tools',
    skill: [
      {
        icon: {
          default: (
            <Image src={React} alt="React icon" height={48} width={48} />
          ),
        },
        label: 'React',
      },
      {
        icon: {
          default: (
            <Image src={Redux} alt="Redux icon" height={48} width={48} />
          ),
          animation: ANIMATION.SHAKE,
        },
        label: 'Redux',
      },
      {
        icon: {
          default: (
            <Image src={NodeJS} alt="NodeJS icon" height={48} width={48} />
          ),
          animation: ANIMATION.ZOOM,
        },
        label: 'NodeJS',
      },
      {
        icon: {
          default: (
            <Image
              src={PostgreSQL}
              alt="PostgreSQL icon"
              height={48}
              width={48}
            />
          ),
          animation: ANIMATION.ZOOM,
        },
        label: 'PostgreSQL',
      },
      {
        icon: {
          default: <Image src={SASS} alt="SASS icon" height={48} width={48} />,
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
