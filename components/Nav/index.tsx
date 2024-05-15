import { useRouter } from 'next/router'
import { useEffect, useState, useCallback, memo } from 'react'

import Logo from 'components/Logo'
import NavItem from 'components/NavItem'
import { NAV_LINKS, ORDERED_SECTIONS } from './index.data'
import { SECTIONS, SECTION_OFFSET } from 'common/constants'

import {
  StyledNav,
  StyledUl,
  HamburgerButton,
  BurgerLine1,
  BurgerLine2,
  BurgerLine3,
  Overlay,
} from './styles'

const DEFAULT_BOUNDING_CLIENT_RECT: Pick<DOMRect, 'top' | 'bottom'> = {
  top: 0,
  bottom: 0,
}

const OFFSET = SECTION_OFFSET + 5

const Nav = memo(function Nav() {
  const router = useRouter()

  const getBoundingRectBySection = useCallback(
    (section: SECTIONS) =>
      document.querySelector(`.${section}`)?.getBoundingClientRect() ??
      DEFAULT_BOUNDING_CLIENT_RECT,
    []
  )

  const scrollToSection = useCallback(
    (section: SECTIONS) => {
      const top =
        getBoundingRectBySection(section).top + window.scrollY - SECTION_OFFSET

      window.scrollTo({ top, behavior: 'smooth' })
    },
    [getBoundingRectBySection]
  )

  const defaultActiveLink =
    router.asPath === '/'
      ? SECTIONS.ABOUT
      : (router.asPath.slice(2) as SECTIONS)
  const [activeLink, setActiveLink] = useState<SECTIONS>(defaultActiveLink)
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    for (const section of ORDERED_SECTIONS) {
      const { top, bottom } = getBoundingRectBySection(section)

      if (top < window.innerHeight && bottom >= OFFSET) {
        setActiveLink(section)
        return
      }
    }
  }, [getBoundingRectBySection])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div>
      <Overlay
        isActive={sidebarIsOpen}
        onClick={() => setSidebarIsOpen(false)}
      />
      <StyledNav>
        <HamburgerButton onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
          <BurgerLine1 isActive={sidebarIsOpen} />
          <BurgerLine2 isActive={sidebarIsOpen} />
          <BurgerLine3 isActive={sidebarIsOpen} />
        </HamburgerButton>
        <Logo />
        <StyledUl isActive={sidebarIsOpen}>
          {NAV_LINKS.map(({ id, label, path }) => (
            <NavItem
              onClick={(e) => {
                e.preventDefault()
                setSidebarIsOpen(false)
                setActiveLink(id)
                scrollToSection(id)
              }}
              name={label}
              to={path}
              key={id}
              isActive={activeLink === id}
            />
          ))}
        </StyledUl>
      </StyledNav>
    </div>
  )
})

export default Nav
