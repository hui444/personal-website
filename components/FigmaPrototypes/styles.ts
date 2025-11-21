import styled from 'styled-components'
import Image from 'next/image'

import { BREAKPOINT } from 'common/constants'

export const PrototypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
  max-width: 600px;
  width: 100%;
`

export const StyledImage = styled(Image)`
  max-width: 100%;
  width: 600px;
  height: auto;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PrototypeLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${(props) => props.theme.colors.glass.medium};
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.glass.border};
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.2);
  margin: 0 auto;

  &:hover {
    background: ${(props) => props.theme.colors.glass.light};
    border-color: ${(props) => props.theme.colors.blue[300]};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px 0 rgba(31, 38, 135, 0.4);
    color: ${(props) => props.theme.colors.blue[300]};
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: ${BREAKPOINT}) {
    width: 100%;
    padding: 1rem;
  }
`
