import { Dispatch, SetStateAction } from 'react'
import Lottie from 'react-lottie'

import constructionAnimationData from 'public/lotties/website-under-construction.json'
import { ConstructionText, MainContainer, StyledButton } from './styles'

const Construction = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean
  setIsVisible: Dispatch<SetStateAction<boolean>>
}) => {
  const options = {
    loop: true,
    animationData: constructionAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return isVisible ? (
    <MainContainer>
      <Lottie
        options={options}
        style={{ width: '100%', height: 'auto', maxWidth: '50rem' }}
      />
      <ConstructionText>
        Oops! We are still working on the mobile view!
        <br />
        Click the button below to access the desktop view instead.
      </ConstructionText>
      <StyledButton onClick={() => setIsVisible(false)}>
        View desktop version
      </StyledButton>
    </MainContainer>
  ) : (
    <></>
  )
}

export default Construction
