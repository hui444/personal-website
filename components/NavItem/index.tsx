import Link from 'next/link'

import { StyledA } from './styles'

interface Props {
  name: string
  to: string
  isActive: boolean
  onClick: () => void
}

const NavItem = (props: Props) => {
  return (
    <li onClick={props.onClick}>
      <Link passHref href={props.to}>
        <StyledA isActive={props.isActive}>{props.name}</StyledA>
      </Link>
    </li>
  )
}

export default NavItem
