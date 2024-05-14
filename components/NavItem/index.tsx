import Link from 'next/link'
import { MouseEventHandler } from 'react'

import { StyledA } from './styles'

interface Props {
  name: string
  to: string
  isActive: boolean
  onClick: MouseEventHandler<HTMLLIElement>
}

const NavItem = (props: Props) => {
  return (
    <li onClick={props.onClick}>
      <Link passHref href={props.to} legacyBehavior>
        <StyledA isActive={props.isActive}>{props.name}</StyledA>
      </Link>
    </li>
  )
}

export default NavItem
