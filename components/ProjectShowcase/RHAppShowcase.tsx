import Image from 'next/image'
import styled from 'styled-components'
import SupperCollationFeature from 'assets/images/SupperCollationFeature.png'

const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
`

const RHAppShowcase = () => (
  <StyledImage
    src={SupperCollationFeature}
    alt="Supper Collation Feature UI"
    width="400"
  />
)

export default RHAppShowcase
