import { MainContainer } from './styles'

const Skill = ({
  icon,
  label,
}: {
  icon: {
    default: React.ReactElement
    animated?: React.ReactElement
  }
  label: string
}) => (
  <MainContainer>
    <>
      <i className="default">{icon.default}</i>
      <i className="animated">{icon.animated ?? icon.default}</i>
    </>
    <label>{label}</label>
  </MainContainer>
)

export default Skill
