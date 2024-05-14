import { memo, Suspense } from 'react'
import { EmbededPrototype } from './styles'

const RunTogetherPrototype = memo(function RunTogetherPrototype() {
  return (
    <Suspense fallback={<p>Loading RunTogether Figma Prototype...</p>}>
      <EmbededPrototype
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTTDBavJxuk1YxSfkUyxdE3%2FCS3240-Design-Exercise%3Fnode-id%3D520-28578%26t%3DxfYA5sTKTK7MaCGP-1%26scaling%3Dscale-down%26page-id%3D318%253A955%26starting-point-node-id%3D520%253A28578"
        title="RunTogether Project Figma Prototype"
      />
    </Suspense>
  )
})

export default RunTogetherPrototype
