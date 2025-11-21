import { BREAKPOINT } from 'common/constants'
import styled from 'styled-components'

export const StyledLogo = styled.div`
  cursor: pointer;
  margin-right: 15px;
  white-space: nowrap;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.25rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.05);

    &::before {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    margin-right: 0;
  }
`
