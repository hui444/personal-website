import Image from 'next/image'
import styled from 'styled-components'

import UnityProjectStructure from 'assets/images/UnityProjectStructure.png'
import ARInterface from 'assets/images/ARInterface.png'

const CapstoneProjectShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-shrink: 0;
`

const CapstoneProjectImage = styled(Image)`
  height: auto;
  margin: auto;
  width: 500px;
  max-width: 100%;
`

const CapstoneProjectShowcase = () => {
  return (
    <CapstoneProjectShowcaseContainer>
      <CapstoneProjectImage
        src={UnityProjectStructure}
        alt="Unity Project Structure"
      />
      <CapstoneProjectImage src={ARInterface} alt="Unity User Interface" />
    </CapstoneProjectShowcaseContainer>
  )
}

export default CapstoneProjectShowcase
