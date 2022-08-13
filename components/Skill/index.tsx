import { ANIMATION } from '@pages/skills/index.data'
import { MainContainer, StyledIcon } from './styles'

const Skill = ({
  icon,
  label,
}: {
  icon: {
    default: React.ReactElement
    animated?: React.ReactElement
    animation?: ANIMATION
  }
  label: string
}) => (
  <MainContainer>
    <>
      <i className="default">{icon.default}</i>
      <i className="animated">
        {icon.animated ?? (
          <StyledIcon type={icon.animation}>{icon.default}</StyledIcon>
        )}
      </i>
    </>
    <label>{label}</label>
  </MainContainer>
)

export default Skill
