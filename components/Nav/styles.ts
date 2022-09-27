import styled, { css } from 'styled-components'
import { BREAKPOINT, NAV_HEIGHT } from 'common/constants'

export const StyledNav = styled.nav`
  width: 100%;
  height: ${NAV_HEIGHT};
  background: ${(props) => props.theme.colors.blue[300]};
  padding: 5px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 300;

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    padding: 10px 50px;
    height: auto;
  }
`

export const StyledUl = styled.ul<{ isActive?: boolean }>`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${BREAKPOINT}) {
    flex-direction: column;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.5s ease-in-out;
    gap: 15px;

    ${(props) =>
      props.isActive &&
      css`
        max-height: 100vh;
      `}

    & > li:first-child {
      margin-top: 15px;
    }

    & > li:last-child {
      margin-bottom: 5px;
    }
  }
`

export const Overlay = styled.div<{ isActive?: boolean }>`
  transition: visibility 0.5s, opacity 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 299;
  background-color: rgba(0, 0, 0, 0.5);

  ${(props) =>
    props.isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`

export const HamburgerButton = styled.div`
  display: block;
  height: 17px;
  width: 22px;
  position: absolute;
  top: 12px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${BREAKPOINT}) {
    display: none;
  }
`

const burgerLine = css`
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.neutral[100]};
`

export const BurgerLine1 = styled.span<{ isActive?: boolean }>`
  ${burgerLine}
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(45deg);
    `}
`
export const BurgerLine2 = styled.span<{ isActive?: boolean }>`
  ${burgerLine}
  transition: transform 0.2s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      transform: scaleY(0);
    `}
`

export const BurgerLine3 = styled.span<{ isActive?: boolean }>`
  ${burgerLine}
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(-45deg);
    `}
`
