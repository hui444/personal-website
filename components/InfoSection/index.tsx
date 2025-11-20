import { SectionInfoProps } from 'common/types'
import InfoCard, { CardColors } from 'components/InfoCard'
import { ContentContainer, InfoContainer } from './styles'

interface InfoSectionProps {
  color?: 'Blue-Yellow' | 'Yellow-Blue'
  sectionInfo?: SectionInfoProps[]
  showDuration?: boolean
}

const InfoSection = ({
  color = 'Yellow-Blue',
  sectionInfo,
  showDuration,
}: InfoSectionProps) => (
  <ContentContainer>
    <InfoContainer>
      {sectionInfo?.map((item, index) => (
        <InfoCard
          key={item.id}
          datesColor={
            color === 'Blue-Yellow' ? CardColors.BLUE : CardColors.YELLOW
          }
          infoColor={
            color === 'Blue-Yellow' ? CardColors.YELLOW : CardColors.BLUE
          }
          info={item.info}
          isEnd={index === sectionInfo.length - 1}
          isDefaultExpanded={
            index ===
            sectionInfo.findIndex(
              (i) =>
                i.info.description &&
                Object.values(i.info.description).some((d) => d)
            )
          }
          hasFade={item?.hasFade}
          showDuration={showDuration}
        />
      ))}
    </InfoContainer>
  </ContentContainer>
)

export default InfoSection
