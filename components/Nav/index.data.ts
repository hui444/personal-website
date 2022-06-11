type NavLink = {
  id: string
  label: string
  path: string
}

const NAV_LINKS: NavLink[] = [
  { id: 'nav-1', label: 'About Me', path: '/#about' },
  { id: 'nav-2', label: 'Education', path: '/education' },
  { id: 'nav-3', label: 'Blog', path: '/blog' },
  { id: 'nav-4', label: 'Work Experience', path: '/work' },
  { id: 'nav-5', label: 'Skills', path: '/skills' },
  { id: 'nav-6', label: 'Contact', path: '/contact' },
]

export default NAV_LINKS
