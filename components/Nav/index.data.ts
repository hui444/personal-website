import { SECTIONS } from 'common/constants'

type NavLink = {
  id: SECTIONS
  label: string
  path: string
}

const NAV_LINKS: NavLink[] = [
  { id: SECTIONS.ABOUT, label: 'About Me', path: `/#${SECTIONS.ABOUT}` },
  { id: SECTIONS.WORK, label: 'Work Experiences', path: `/#${SECTIONS.WORK}` },
  { id: SECTIONS.SKILLS, label: 'Skills', path: `/#${SECTIONS.SKILLS}` },
  {
    id: SECTIONS.EDUCATION,
    label: 'Education',
    path: `/#${SECTIONS.EDUCATION}`,
  },
  { id: SECTIONS.CONTACT, label: 'Contact', path: `/#${SECTIONS.CONTACT}` },
]

export default NAV_LINKS
