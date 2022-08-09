import { useRouter } from 'next/router'

import Logo from 'components/Logo'
import NavItem from 'components/NavItem'
import NAV_LINKS from './index.data'

import { StyledNav, StyledUl } from './styles'

const Nav = () => {
  const router = useRouter()

  return (
    <StyledNav>
      <Logo />
      <StyledUl>
        {NAV_LINKS.map((navItem, index) => (
          <NavItem
            name={navItem.label}
            to={navItem.path}
            key={navItem.id}
            isActive={
              (router.asPath === '/' && index === 0) ||
              router.asPath === navItem.path
            }
          />
        ))}
      </StyledUl>
    </StyledNav>
  )
}

export default Nav
