import styled, { css } from 'styled-components'

import { BREAKPOINT } from 'common/constants'
import { CardColors } from '.'

export const MainContainer = styled.div<{ color?: CardColors }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 2rem 0.3rem;
  margin-bottom: 2rem;
  background: ${(props) => props.theme.colors.glass.medium};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${(props) =>
      props.color === 'blue'
        ? 'linear-gradient(180deg, #0EA5E9, #A78BFA)'
        : 'linear-gradient(180deg, #FCD34D, #F472B6)'};
    opacity: 0.8;
  }

  &:hover {
    background: ${(props) => props.theme.colors.glass.light};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.5);
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    padding: 1.5rem 1.5rem 0;
    margin-bottom: 1.5rem;
  }
`

export const DatesContainer = styled.div<{ color: CardColors }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #ffffff;
  background: ${(props) => props.theme.colors.glass.dark};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 1rem;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const StyledBackground = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const TitleSection = styled.div<{ color: CardColors }>`
  padding: 0;
  position: relative;
`

export const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  ${(props) => props.theme.typo.default.h2}
  color: #ffffff;
  font-weight: 800;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.h2}
    margin-bottom: 0.375rem;
  }
`

export const Subtitle = styled.h3`
  margin: 0 0 1rem 0;
  ${(props) => props.theme.typo.default.h3};
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.h3};
    margin-bottom: 0.75rem;
  }
`

export const DatesSubtitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media screen and (min-width: ${BREAKPOINT}) {
    display: none;
  }
`

export const Body = styled.div<{ color: CardColors }>`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ArrowContainer = styled.div<{
  isExpanded?: boolean
  disabled?: boolean
}>`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  filter: brightness(0) invert(1);
  margin-inline: auto;

  ${(props) =>
    !props.disabled && props.isExpanded && 'transform: rotate(180deg);'}
  ${(props) => (props.disabled ? 'opacity: 30%' : 'cursor: pointer')};
  height: 40px;
  width: 40px;

  &:hover:not([disabled]) {
    transform: ${(props) =>
      props.isExpanded ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)'};
  }
`

const description = css<{ visible: boolean }>`
  ${(props) =>
    props.visible
      ? css`
          max-height: 100vh;
          opacity: 1;
        `
      : css`
          max-height: 0px;
          opacity: 0;
        `}
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease-in-out;

  overflow: hidden;
  margin: ${(props) => (props.visible ? '0 0 1rem 0' : 0)};
  ${(props) => props.theme.typo.default.body};
  color: rgba(255, 255, 255, 0.85);
  align-self: start;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.body};
  }
`

export const Description = styled.div<{ visible: boolean }>`
  ${description}
`

export const DescriptionList = styled.ul<{ visible: boolean }>`
  padding-inline-start: 20px;
  ${description}
`

export const BoldText = styled.label`
  ${(props) => props.theme.typo.default['body--bold']};
  color: #ffffff;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile['body--bold']};
  }
`
