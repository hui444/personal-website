import { useRouter } from 'next/router'
import { RefObject, useEffect, useState } from 'react'

import Logo from 'components/Logo'
import NavItem from 'components/NavItem'
import NAV_LINKS from './index.data'
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

  function handleScroll() {
    const observable = {
      [SECTIONS.ABOUT]: document.querySelector(`.${SECTIONS.ABOUT}`),
      [SECTIONS.EDUCATION]: document.querySelector(`.${SECTIONS.EDUCATION}`),
      [SECTIONS.SKILLS]: document.querySelector(`.${SECTIONS.SKILLS}`),
      [SECTIONS.WORK]: document.querySelector(`.${SECTIONS.WORK}`),
      [SECTIONS.CONTACT]: document.querySelector(`.${SECTIONS.CONTACT}`),
    }

    const defaultValues = {
      top: 0,
      bottom: 0,
    }

    const pos = {
      [SECTIONS.ABOUT]:
        observable[SECTIONS.ABOUT]?.getBoundingClientRect() ?? defaultValues,
      [SECTIONS.EDUCATION]:
        observable[SECTIONS.EDUCATION]?.getBoundingClientRect() ??
        defaultValues,
      [SECTIONS.SKILLS]:
        observable[SECTIONS.SKILLS]?.getBoundingClientRect() ?? defaultValues,
      [SECTIONS.WORK]:
        observable[SECTIONS.WORK]?.getBoundingClientRect() ?? defaultValues,
      [SECTIONS.CONTACT]:
        observable[SECTIONS.CONTACT]?.getBoundingClientRect() ?? defaultValues,
    }

    const offset = SECTION_OFFSET + 5

    if (
      pos[SECTIONS.ABOUT].top < window.innerHeight &&
      pos[SECTIONS.ABOUT].bottom >= offset
    ) {
      setActiveLink(SECTIONS.ABOUT)
    } else if (
      pos[SECTIONS.EDUCATION].top < window.innerHeight &&
      pos[SECTIONS.EDUCATION].bottom >= offset
    ) {
      setActiveLink(SECTIONS.EDUCATION)
    } else if (
      pos[SECTIONS.SKILLS].top < window.innerHeight &&
      pos[SECTIONS.SKILLS].bottom >= offset
    ) {
      setActiveLink(SECTIONS.SKILLS)
    } else if (
      pos[SECTIONS.WORK].top < window.innerHeight &&
      pos[SECTIONS.WORK].bottom >= offset
    ) {
      setActiveLink(SECTIONS.WORK)
    } else if (
      pos[SECTIONS.CONTACT].top < window.innerHeight &&
      pos[SECTIONS.CONTACT].bottom >= offset
    ) {
      setActiveLink(SECTIONS.CONTACT)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
