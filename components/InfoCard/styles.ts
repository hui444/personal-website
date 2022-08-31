import styled, { css } from 'styled-components'
import { DATE_WIDTH } from 'common/constants'
import { CardColors } from '.'

const ARROW_SIZE = {
  HEIGHT: '35px',
  WIDTH: '23px',
}

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-rows: 20px min-content 1fr;
  grid-template-areas:
    'dates .'
    'dates content'
    'filler content';
  gap: 0 28px;
`

export const DatesBackground = styled.div<{
  color: CardColors
  hasTopFade?: boolean
  hasBottomFade?: boolean
}>`
  grid-area: dates;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: ${(props) =>
    `${props.hasTopFade ? '0 0' : '50px 50px'} ${
      props.hasBottomFade ? '0 0' : '50px 50px'
    }`};
  width: ${DATE_WIDTH};
  z-index: -1;

  ${(props) =>
    props.color === 'blue' &&
    (props.hasTopFade || props.hasBottomFade
      ? `background: 
          linear-gradient(
            ${props.hasTopFade ? 360 : 180}deg, 
            ${props.theme.colors.blue[100]} 0%, 
            ${props.theme.colors.blue[100]}CC 80%, 
            transparent 100%
          );
      `
      : `background-color: ${props.theme.colors.blue[100]};`)};

  ${(props) =>
    props.color === 'yellow' &&
    (props.hasTopFade || props.hasBottomFade
      ? `background: 
          linear-gradient(
            ${props.hasTopFade ? 360 : 180}deg, 
            ${props.theme.colors.accent.yellow} 0%, 
            ${props.theme.colors.accent.yellow}CC 80%, 
            transparent 100%
          );
      `
      : `background-color: ${props.theme.colors.accent.yellow};`)};
`

export const DatesContainer = styled.div`
  grid-area: dates;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.pageBackground};
  padding: 50px 20px;
  ${(props) => props.theme.typo.body};
  height: fit-content;
`

export const StyledBackground = styled.div`
  grid-area: content;
  padding-left: ${ARROW_SIZE.WIDTH};
`

export const TitleSection = styled.div<{ color: CardColors }>`
  background-color: ${(props) =>
    props.color === 'yellow'
      ? props.theme.colors.accent.yellow
      : props.theme.colors.blue[100]};
  padding: 20px 25px 10px;
  position: relative;
  border-radius: ${(props) =>
    `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`};

  &::before {
    content: '';
    position: absolute;
    top: 28%;
    left: calc(1px - ${ARROW_SIZE.WIDTH});
    height: ${ARROW_SIZE.HEIGHT};
    width: ${ARROW_SIZE.WIDTH};
    background: inherit;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }
`

export const Title = styled.h2`
  margin: 0;
  ${(props) => props.theme.typo.h2}
  color: ${(props) => props.theme.colors.neutral[600]};
`

export const Subtitle = styled.h3`
  margin: 0;
  ${(props) => props.theme.typo.h3};
  color: ${(props) => props.theme.colors.neutral[300]};
`

export const Body = styled.div<{ color: CardColors }>`
  padding: 10px 25px 8px;
  background-color: ${(props) =>
    props.color === 'yellow'
      ? props.theme.colors.accent.yellow
      : props.theme.colors.blue[100]}80; // 50% opacity
  display: flex;
  flex-direction: column;
  border-radius: ${(props) =>
    `0 0 ${props.theme.borderRadius} ${props.theme.borderRadius}`};
  align-items: center;
`

export const ArrowContainer = styled.div<{
  isExpanded?: boolean
  disabled?: boolean
}>`
  transition: transform 200ms ease-in;

  ${(props) =>
    !props.disabled && props.isExpanded && 'transform: rotateX(180deg);'}
  ${(props) => (props.disabled ? 'opacity: 30%' : 'cursor: pointer')};
  height: 18px;
`

const description = css<{ visible: boolean }>`
  ${(props) =>
    props.visible
      ? css`
          max-height: 100vh;
        `
      : css`
          max-height: 0px;
        `}
  transition: max-height 300ms ease-in-out;

  overflow: hidden;
  margin: ${(props) => (props.visible ? '0 0 8px 0' : 0)};
  ${(props) => props.theme.typo.body};
  color: ${(props) => props.theme.colors.neutral[600]};
  align-self: start;
`

export const Description = styled.div<{ visible: boolean }>`
  ${description}
`

export const DescriptionList = styled.ul<{ visible: boolean }>`
  padding-inline-start: 20px;
  ${description}
`

export const BoldText = styled.label`
  ${(props) => props.theme.typo['body--bold']};
  color: ${(props) => props.theme.colors.neutral[600]};
`

export const Filler = styled.div`
  grid-area: filler;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.pageBackground};
`
