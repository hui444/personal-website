import React, { useState } from 'react'
import Image from 'next/image'

import Arrow from 'public/arrow/chevron-down.svg'
import { FADE_POSITION, InfoCardProps } from 'common/types'
import { getDuration, stringifyDate } from 'common/helper'

import {
  MainContainer,
  DatesContainer,
  StyledBackground,
  TitleSection,
  Body,
  Title,
  Subtitle,
  DatesSubtitle,
  Description,
  BoldText,
  ArrowContainer,
  DescriptionList,
} from './styles'

export enum CardColors {
  YELLOW = 'yellow',
  BLUE = 'blue',
}

const InfoCard = ({
  datesColor,
  infoColor,
  isDefaultExpanded,
  info,
  isEnd,
  hasFade,
  showDuration,
}: {
  datesColor: CardColors
  infoColor: CardColors
  isDefaultExpanded: boolean
  info: InfoCardProps
  isEnd?: boolean
  hasFade?: FADE_POSITION
  showDuration?: boolean
}) => {
  const disabled =
    !info.description ||
    (info.description && Object.values(info.description).every((d) => !d))
  const [isExpanded, setIsExpanded] = useState<boolean>(
    isDefaultExpanded ?? false
  )

  const dateText = stringifyDate(info.dates)
  return (
    <MainContainer color={infoColor}>
      <StyledBackground>
        <TitleSection color={infoColor}>
          <DatesContainer color={datesColor}>
            {dateText.split(' ').map((s, index) => (
              <span key={`${info.title}__dates-${index}`}>{s}</span>
            ))}
          </DatesContainer>
          <Title>{info.title}</Title>
          <Subtitle>
            {info.subtitle}
            {showDuration && ` • ${getDuration(info.dates)}`}
          </Subtitle>
          <DatesSubtitle>{dateText}</DatesSubtitle>
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
            <Image src={Arrow} alt="chevron icon" />
          </ArrowContainer>
        </Body>
      </StyledBackground>
    </MainContainer>
  )
}

export default InfoCard
