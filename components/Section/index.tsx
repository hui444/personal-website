import { MainContainer } from './styles'

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <MainContainer>
    <h1>{title}</h1>
    <div>{children}</div>
  </MainContainer>
)

export default Section
