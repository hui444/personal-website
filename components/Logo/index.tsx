import Link from 'next/link'

import { StyledLogo } from './styles'

const Logo = () => {
  return (
    <Link href="/">
      <StyledLogo>Hui Hui</StyledLogo>
    </Link>
  )
}

export default Logo
