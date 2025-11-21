import styled from 'styled-components'

export const StyledA = styled.a<{ isActive?: boolean }>`
  color: #ffffff;
  font-weight: ${(props) => (props.isActive ? 700 : 500)};
  text-transform: capitalize;
  white-space: nowrap;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(14, 165, 233, 0.2),
      rgba(167, 139, 250, 0.2)
    );
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.isActive ? '80%' : '0')};
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.blue[300]},
      ${(props) => props.theme.colors.accent.purple},
      transparent
    );
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px ${(props) => props.theme.colors.blue[300]};
    border-radius: 2px;
  }

  :hover {
    color: #ffffff;
    font-weight: 700;
    transform: translateY(-2px);

    &::after {
      width: 80%;
    }
  }
`
