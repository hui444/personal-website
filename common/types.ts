export interface EducationType {
  id: string
  school: string
  study: string
  dates: string
  description: FormattedText
  hasFade: boolean
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
  dates: string
  description?: {
    formattedText?: FormattedText
    list?: string[] | TextWithLink[]
    skills?: string
  }
}

export interface InfoSectionProps {
  id: string
  info: InfoCardProps
  hasFade?: boolean
}

export interface WorkType {
  id: string
  title: string
  company: string
  dates: string
  description?: {
    text?: string[]
    textWithLink?: TextWithLink[]
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
      default: React.ReactElement
      animated?: React.ReactElement
      animation?: ANIMATION
    }
    label: string
  }[]
}
