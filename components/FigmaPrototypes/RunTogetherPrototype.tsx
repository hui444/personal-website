import { memo, Suspense } from 'react'
import { EmbededPrototype } from './styles'

const RunTogetherPrototype = memo(function RunTogetherPrototype() {
  return (
    <Suspense fallback={<p>Loading RunTogether Figma Prototype...</p>}>
      <EmbededPrototype
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTTDBavJxuk1YxSfkUyxdE3%2FCS3240-Design-Exercise%3Fkind%3Dproto%26node-id%3D520-28578%26page-id%3D318%253A955%26scaling%3Dcontain%26starting-point-node-id%3D520%253A28578%26t%3DuikfKfaMLcFO22aI-1"
        title="RunTogether Project Figma Prototype"
      />
    </Suspense>
  )
})

export default RunTogetherPrototype
