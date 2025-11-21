import { memo } from 'react'

import HikingHelper from 'assets/images/HikingHelper.png'
import FigmaButton from './FigmaButton'
import { PrototypeContainer, StyledImage } from './styles'

const FIGMA_URL =
  'https://www.figma.com/proto/b5H9IzDdHH5wp5ZCW3FeCo/G3-High-fidelity-prototype?node-id=1301-87522&t=Wepjg9G1L6w9cJm4-1&scaling=scale-down&page-id=1249%3A65643&starting-point-node-id=1301%3A87522'

const HikingHelperPrototype = memo(function HikingHelperPrototype() {
  return (
    <PrototypeContainer>
      <StyledImage
        src={HikingHelper}
        alt="HikingHelper Figma Prototype Preview"
        width={1200}
        height={783}
        quality={100}
        priority
      />
      <FigmaButton url={FIGMA_URL} />
    </PrototypeContainer>
  )
})

export default HikingHelperPrototype
