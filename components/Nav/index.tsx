import { RefObject } from 'react'
import { useRouter } from 'next/router'

import Logo from 'components/Logo'
import NavItem from 'components/NavItem'
import NAV_LINKS from './index.data'

import { StyledNav, StyledUl } from './styles'
import { PAGES } from 'common/constants'

const Nav = ({ refs }: { refs: Record<PAGES, RefObject<HTMLDivElement>> }) => {
  const router = useRouter()
  const scrollToSection = (eleRef: RefObject<HTMLDivElement>) => {
    if (eleRef.current) {
      window.scrollTo({
        top: eleRef.current.offsetTop - 48,
        behavior: 'smooth',
      })
    }
  }

  return (
    <StyledNav>
      <Logo />
      <StyledUl>
        {NAV_LINKS.map((navItem) => (
          <NavItem
            onClick={() => scrollToSection(refs[navItem.id])}
            name={navItem.label}
            to={navItem.path}
            key={navItem.id}
            isActive={
              (router.asPath === '/' && navItem.id === PAGES.ABOUT) ||
              router.asPath === navItem.path
            }
          />
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default Nav
