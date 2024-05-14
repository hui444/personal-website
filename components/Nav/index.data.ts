import { SECTIONS } from 'common/constants'

type NavLink = {
  id: SECTIONS
  label: string
  path: string
}

export const NAV_LINKS: NavLink[] = [
  { id: SECTIONS.ABOUT, label: 'About Me', path: `/#${SECTIONS.ABOUT}` },
  { id: SECTIONS.WORK, label: 'Work Experiences', path: `/#${SECTIONS.WORK}` },
  { id: SECTIONS.PROJECTS, label: 'Projects', path: `/#${SECTIONS.PROJECTS}` },
  { id: SECTIONS.SKILLS, label: 'Skills', path: `/#${SECTIONS.SKILLS}` },
  {
    id: SECTIONS.EDUCATION,
    label: 'Education',
    path: `/#${SECTIONS.EDUCATION}`,
  },
  { id: SECTIONS.CONTACT, label: 'Contact', path: `/#${SECTIONS.CONTACT}` },
]

export const ORDERED_SECTIONS: SECTIONS[] = [
  SECTIONS.ABOUT,
  SECTIONS.WORK,
  SECTIONS.PROJECTS,
  SECTIONS.SKILLS,
  SECTIONS.EDUCATION,
  SECTIONS.CONTACT,
]
