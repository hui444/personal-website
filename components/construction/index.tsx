import Lottie from 'react-lottie'

import constructionAnimationData from 'public/lotties/website-under-construction.json'
import { ConstructionText, MainContainer, StyledButton } from './styles'

const Construction = () => {
  const options = {
    loop: true,
    animationData: constructionAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <MainContainer>
      <Lottie
        options={options}
        style={{ width: '100%', height: '100%', maxWidth: '50rem' }}
      />
      <ConstructionText>
        Oops! We are still working on the mobile view!
        <br />
        Click the button below to access the desktop view instead.
      </ConstructionText>
      <StyledButton>View desktop version</StyledButton>
    </MainContainer>
  )
}

export default Construction
