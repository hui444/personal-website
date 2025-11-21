import { memo } from 'react'

import RunTogether from 'assets/images/RunTogether.png'
import FigmaButton from './FigmaButton'
import { PrototypeContainer, StyledImage } from './styles'

const FIGMA_URL =
  'https://www.figma.com/proto/TTDBavJxuk1YxSfkUyxdE3/CS3240-Design-Exercise?kind=proto&node-id=520-28578&page-id=318%3A955&scaling=contain&starting-point-node-id=520%3A28578&t=uikfKfaMLcFO22aI-1'

const RunTogetherPrototype = memo(function RunTogetherPrototype() {
  return (
    <PrototypeContainer>
      <StyledImage
        src={RunTogether}
        alt="RunTogether Figma Prototype Preview"
        width={1200}
        height={783}
        quality={100}
        priority
      />
      <FigmaButton url={FIGMA_URL} />
    </PrototypeContainer>
  )
})

export default RunTogetherPrototype
