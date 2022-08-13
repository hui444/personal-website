import React, { useState } from 'react'
import {
  MainContainer,
  DatesContainer,
  StyledBackground,
  TitleSection,
  Body,
  Title,
  Subtitle,
  Description,
  BoldText,
  ArrowContainer,
  Filler,
  DatesBackground,
  DescriptionList,
} from './styles'
import Arrow from '../../assets/arrow/chevron-down.svg'

export interface InfoCardProps {
  title: string
  subtitle: string
  dates: string
  description?: {
    element?: React.ReactNode
    text?: React.ReactNode[]
    skills?: string
  }
}

export type CardColors = 'yellow' | 'blue'

const InfoCard = ({
  datesColor,
  infoColor,
  isDefaultExpanded,
  info,
  isEnd,
  hasBottomFade,
}: {
  datesColor: CardColors
  infoColor: CardColors
  isDefaultExpanded: boolean
  info: InfoCardProps
  isEnd?: boolean
  hasBottomFade?: boolean
}) => {
  const disabled = !info.description
  const [isExpanded, setIsExpanded] = useState<boolean>(
    isDefaultExpanded ?? false
  )
  return (
    <MainContainer>
      <DatesContainer>
        <DatesBackground
          color={datesColor}
          hasTopFade={info.dates.toLowerCase().includes('present')}
          hasBottomFade={hasBottomFade}
        />
        {info.dates.split(' ').map((s, index) => (
          <span key={`${info.title}__dates-${index}`}>{s}</span>
        ))}
      </DatesContainer>

      <StyledBackground>
        <TitleSection color={infoColor}>
          <Title>{info.title}</Title>
          <Subtitle>{info.subtitle}</Subtitle>
        </TitleSection>
        <Body color={infoColor}>
          {info.description &&
            (info.description.element ? (
              <Description visible={isExpanded}>
                {info.description.element}
              </Description>
            ) : (
              <DescriptionList visible={isExpanded}>
                {info.description.text?.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
                {info.description.skills && (
                  <li key={`${info.title}__relevant-skills`}>
                    <BoldText>Relevant skills: </BoldText>
                    {info.description.skills}
                  </li>
                )}
              </DescriptionList>
            ))}
          <ArrowContainer
            disabled={disabled}
            isExpanded={isExpanded}
            onClick={() => !disabled && setIsExpanded(!isExpanded)}
          >
            <Arrow />
          </ArrowContainer>
        </Body>
      </StyledBackground>
      {isEnd && <Filler />}
    </MainContainer>
  )
}

export default InfoCard
