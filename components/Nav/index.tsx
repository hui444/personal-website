import { useRouter } from 'next/router'
import { RefObject, useEffect, useState, useCallback } from 'react'

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

const Nav = ({
  refs,
}: {
  refs: Record<SECTIONS, RefObject<HTMLDivElement>>
}) => {
  const router = useRouter()
  const scrollToSection = (eleRef: RefObject<HTMLDivElement>) => {
    if (eleRef.current) {
      window.scrollTo({
        top: eleRef.current.offsetTop - SECTION_OFFSET,
        behavior: 'smooth',
      })
    }
  }
  const defaultActiveLink =
    router.asPath === '/'
      ? SECTIONS.ABOUT
      : (router.asPath.slice(2) as SECTIONS)
  const [activeLink, setActiveLink] = useState<SECTIONS>(defaultActiveLink)
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

  const handleScroll = useCallback(() => {
    for (const section of ORDERED_SECTIONS) {
      const { top, bottom } =
        document.querySelector(`.${section}`)?.getBoundingClientRect() ??
        DEFAULT_BOUNDING_CLIENT_RECT

      if (top < window.innerHeight && bottom >= OFFSET) {
        setActiveLink(section)
        return
      }
    }
  }, [])

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
          {NAV_LINKS.map((navItem) => (
            <NavItem
              onClick={() => {
                setSidebarIsOpen(false)
                setActiveLink(navItem.id)
                scrollToSection(refs[navItem.id])
              }}
              name={navItem.label}
              to={navItem.path}
              key={navItem.id}
              isActive={activeLink === navItem.id}
            />
          ))}
        </StyledUl>
      </StyledNav>
    </div>
  )
}

export default Nav
