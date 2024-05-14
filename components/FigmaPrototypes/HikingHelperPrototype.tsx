import { memo, Suspense } from 'react'
import { EmbededPrototype } from './styles'

const HikingHelperPrototype = memo(function HikingHelperPrototype() {
  return (
    <Suspense fallback={<p>Loading HikingHelper Figma Prototype...</p>}>
      <EmbededPrototype
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb5H9IzDdHH5wp5ZCW3FeCo%2FG3-High-fidelity-prototype%3Fnode-id%3D1301-87522%26t%3DWepjg9G1L6w9cJm4-1%26scaling%3Dscale-down%26page-id%3D1249%253A65643%26starting-point-node-id%3D1301%253A87522%26"
        title="HikingHelper Project Figma Prototype"
      />
    </Suspense>
  )
})

export default HikingHelperPrototype
