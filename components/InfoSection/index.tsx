import InfoCard, { InfoCardProps } from 'components/InfoCard'
import { ContentContainer, InfoContainer, VerticalLine } from './styles'

interface InfoSectionProps {
  id: string
  info: InfoCardProps
  hasFade?: boolean
}

const InfoSection = ({
  color,
  sectionInfo,
}: {
  color?: 'Blue-Yellow' | 'Yellow-Blue'
  sectionInfo?: InfoSectionProps[]
}) => (
  <ContentContainer>
    <VerticalLine />
    <InfoContainer>
      {sectionInfo?.map((item, index) => (
        <InfoCard
          datesColor={color === 'Blue-Yellow' ? 'blue' : 'yellow'}
          infoColor={color === 'Blue-Yellow' ? 'yellow' : 'blue'}
          key={item.id}
          info={item.info}
          isEnd={index === sectionInfo.length - 1}
          isDefaultExpanded={
            index === sectionInfo.findIndex((i) => i.info.description)
          }
          hasBottomFade={item?.hasFade}
        />
      ))}
    </InfoContainer>
  </ContentContainer>
)

InfoSection.defaultProps = {
  color: 'Yellow-Blue',
}

export default InfoSection
