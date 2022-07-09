import Link from 'next/link'
import { ReactNode } from 'react'

import { StyledA } from './styles'

type Props = {
  href: string
  label: string
  icon?: ReactNode
  openNewTab?: boolean
  changeStroke?: boolean // default - change fill
}

const InfoLink = (props: Props) => {
  const content = (
    <>
      {props.icon && props.icon}
      {props.label}
    </>
  )

  return props.openNewTab ? (
    <StyledA
      changeStroke={props.changeStroke}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </StyledA>
  ) : (
    <Link passHref href={props.href}>
      <StyledA changeStroke={props.changeStroke}>{content}</StyledA>
    </Link>
  )
}

export default InfoLink

InfoLink.defaultProps = {
  openNewTab: false,
  changeStroke: false,
}
