import styled, { css } from 'styled-components'

export const StyledA = styled.a<{ changeStroke?: boolean }>`
  color: ${(props) => props.theme.colors.blue[300]};
  display: inline-flex;
  flex-direction: row;
  margin-inline: 10px;
  gap: 5px;
  align-items: center;

  :hover,
  :active {
    color: ${(props) => props.theme.colors.accent.red};
    ${(props) =>
      props.changeStroke
        ? css`
            > svg path {
              ${`stroke: ${props.theme.colors.accent.red}`}
            }
          `
        : css`
            > svg path {
              ${`fill: ${props.theme.colors.accent.red}`}
            }
          `}
  }
`
