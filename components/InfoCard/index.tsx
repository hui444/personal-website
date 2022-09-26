import React, { useState } from 'react'

import { FADE_POSITION, InfoCardProps } from 'common/types'
import { getDuration, getFormattedDatesArray } from 'common/helper'

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
  return (
    <MainContainer>
      <DatesContainer>
        <DatesBackground
          color={datesColor}
          hasTopFade={hasFade === FADE_POSITION.TOP || info.dates?.isCurrent}
          hasBottomFade={hasFade === FADE_POSITION.BOTTOM}
        />
        {getFormattedDatesArray(info.dates).map((s, index) => (
          <span key={`${info.title}__dates-${index}`}>{s}</span>
        ))}
      </DatesContainer>

      <StyledBackground>
        <TitleSection color={infoColor}>
          <Title>{info.title}</Title>
          <Subtitle>
            {info.subtitle}
            {showDuration && ` | ${getDuration(info.dates)}`}
          </Subtitle>
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
          {/* {info.description && (
            <Description visible={isExpanded}>
              {info.description.text?.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
              {info.description.skills && (
                <li key={`${info.title}__relevant-skills`}>
                  <BoldText>Relevant skills: </BoldText>
                  {info.description.skills}
                </li>
              )}
            </Description>
          )} */}
          <ArrowContainer
            disabled={disabled}
            isExpanded={isExpanded}
            onClick={() => !disabled && setIsExpanded(!isExpanded)}
          >
            <Arrow />
          </ArrowContainer>
          {/* {info.description &&
            (info.description.formattedText ? (
              <Description visible={isExpanded}>
                <StyledH3>{info.description.formattedText.title}</StyledH3>
                {info.description.formattedText.content.map(
                  (content, index) => (
                    <React.Fragment key={`${content.title}-${index}`}>
                      {content.title && <StyledP>{content.title}</StyledP>}
                      <StyledList>
                        {content.list.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </StyledList>
                    </React.Fragment>
                  )
                )}
              </Description>
            ) : (
              <DescriptionList visible={isExpanded}>
                {info.description.list?.map((text, index) => {
                  if (typeof text === 'string' || text instanceof String) {
                    return <li key={`${text}-${index}`}>{text}</li>
                  }
                  return (
                    <li key={`${text.text}-${index}`}>
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
          </ArrowContainer> */}
        </Body>
      </StyledBackground>
      {isEnd && <Filler />}
    </MainContainer>
  )
}

export default InfoCard
