import Image from 'next/image'

import NUSPlannerPoster from 'assets/images/NUSPlannerPoster.jpg'

const NUSPlannerProjectShowcase = () => (
  <Image
    src={NUSPlannerPoster}
    alt="NUSPlanner Poster"
    style={{ height: 'auto', margin: 'auto', width: '400px', maxWidth: '100%' }}
  />
)

export default NUSPlannerProjectShowcase
