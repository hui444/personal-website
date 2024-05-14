import Image from 'next/image'

import NUSPlannerPoster from 'assets/images/NUSPlannerPoster.jpg'
import styled from 'styled-components'

const NUSPlannerPosterImage = styled(Image)`
  height: auto;
  margin: auto;
  width: 400px;
  max-width: 100%;
`

const NUSPlannerProjectShowcase = () => (
  <NUSPlannerPosterImage src={NUSPlannerPoster} alt="NUSPlanner Poster" />
)

export default NUSPlannerProjectShowcase
