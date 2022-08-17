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
import { StyledH3, StyledList, StyledP } from '@styles/index'
import { InfoCardProps } from 'common/types'
import { replaceWithLink } from 'common/helper'

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
  hasBottomFade,
}: {
  datesColor: CardColors
  infoColor: CardColors
  isDefaultExpanded: boolean
  info: InfoCardProps
  isEnd?: boolean
  hasBottomFade?: boolean
}) => {
  const disabled =
    !info.description ||
    (info.description && Object.values(info.description).every((d) => !d))
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
            (info.description.formattedText ? (
              <Description visible={isExpanded}>
                <StyledH3>{info.description.formattedText.title}</StyledH3>
                {info.description.formattedText.content.map((content) => (
                  <>
                    {content.title && <StyledP>{content.title}</StyledP>}
                    <StyledList>
                      {content.list.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </StyledList>
                  </>
                ))}
              </Description>
            ) : (
              <DescriptionList visible={isExpanded}>
                {info.description.list?.map((text, index) => {
                  if (typeof text === 'string' || text instanceof String) {
                    return <li key={index}>{text}</li>
                  }
                  return (
                    <li key={index}>
                      {replaceWithLink(text.text, text.anchor)}
                    </li>
                  )
                })}
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
