import { PAGES } from 'common/constants'

type NavLink = {
  id: PAGES
  label: string
  path: string
}

const NAV_LINKS: NavLink[] = [
  { id: PAGES.ABOUT, label: 'About Me', path: `/#${PAGES.ABOUT}` },
  { id: PAGES.EDUCATION, label: 'Education', path: `/#${PAGES.EDUCATION}` },
  // { id: 'nav-3', label: 'Blog', path: '/#blog' },
  { id: PAGES.SKILLS, label: 'Skills', path: `/#${PAGES.SKILLS}` },
  { id: PAGES.WORK, label: 'Work Experience', path: `/#${PAGES.WORK}` },
  { id: PAGES.CONTACT, label: 'Contact', path: `/#${PAGES.CONTACT}` },
]

export default NAV_LINKS
