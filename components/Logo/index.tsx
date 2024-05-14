import Link from 'next/link'

import { StyledLogo } from './styles'

const Logo = () => (
  <Link href="/" legacyBehavior>
    <StyledLogo>Hui Hui</StyledLogo>
  </Link>
)

export default Logo
