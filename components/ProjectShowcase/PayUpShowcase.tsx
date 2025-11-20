import Image from 'next/image'
import styled from 'styled-components'
import PayUp from 'assets/images/PayUp.png'

const StyledImage = styled(Image)`
  max-width: 100%;
  width: 600px;
  height: auto;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const PayUpShowcase = () => {
  return (
    <StyledImage
      src={PayUp}
      alt="Bill Splitting Feature UI"
      width={1200}
      height={783}
      quality={100}
      priority
    />
  )
}

export default PayUpShowcase
