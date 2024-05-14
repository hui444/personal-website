import { ComponentType, ReactElement, ReactNode } from 'react'

interface DateType {
  month?: number
  year: number
}

export type Dates = {
  startDate: DateType
} & (
  | {
      endDate: DateType
      isCurrent?: false
    }
  | {
      endDate?: undefined
      isCurrent: true
    }
)

export enum FADE_POSITION {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface EducationType {
  id: string
  school: string
  study: string
  dates: Dates
  description: ReactNode
  hasFade?: FADE_POSITION
}

export interface FormattedText {
  title: string
  content: { title?: string; list: string[] }[]
}

export interface TextWithLink {
  text: string
  anchor?: {
    label: string
    link: string
  }[]
}

export interface InfoCardProps {
  title: string
  subtitle: string
  dates: Dates
  description?: {
    element?: ReactNode
    text?: ReactNode[]
    skills?: string
  }
}

export interface SectionInfoProps {
  id: string
  info: InfoCardProps
  hasFade?: FADE_POSITION
}

export interface WorkType {
  id: string
  title: string
  company: string
  dates: Dates
  description?: {
    text: ReactNode[]
    skills: string
  }
}

export enum ANIMATION {
  ZOOM = 'zoom',
  SPIN = 'spin',
  SHAKE = 'shake',
}

export type SkillType = {
  id: string
  title: string
  text?: string
  skill?: {
    icon: {
      default: ReactElement
      animated?: ReactElement
      animation?: ANIMATION
    }
    label: string
  }[]
}

export interface FormInput {
  name: string
  email: string
  subject: string
  message: string
}

export interface ProjectType {
  title: string
  description: string
  component: ComponentType
}
