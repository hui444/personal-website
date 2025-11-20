import styled, { css } from 'styled-components'

export const StyledA = styled.a<{ changeStroke?: boolean }>`
  color: ${(props) => props.theme.colors.blue[300]};
  display: inline-flex;
  flex-direction: row;
  margin-inline: 10px;
  gap: 6px;
  align-items: center;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 10px;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.blue[300]};
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :hover,
  :active {
    color: ${(props) => props.theme.colors.blue[400]};
    transform: translateY(-2px);

    &::after {
      width: calc(100% - 20px);
    }

    ${(props) =>
      props.changeStroke
        ? css`
            > svg path {
              ${`stroke: ${props.theme.colors.blue[400]}`}
            }
          `
        : css`
            > svg path {
              ${`fill: ${props.theme.colors.blue[400]}`}
            }
          `}
  }
`
