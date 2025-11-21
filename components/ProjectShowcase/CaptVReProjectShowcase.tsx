import { Suspense } from 'react'
import styled from 'styled-components'

const EmbededVideo = styled.iframe`
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  aspect-ratio: 7/4;
  border: none;
`

const CaptVReProjectShowcase = () => (
  <Suspense fallback={<p>Loading CaptVRe Project Video...</p>}>
    <EmbededVideo
      src="https://www.youtube.com/embed/FPDy6A3VPxo?si=_WCup1dAfhERAbSH"
      title="CaptVRe Project Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      width="500"
      loading="lazy"
    />
  </Suspense>
)

export default CaptVReProjectShowcase
