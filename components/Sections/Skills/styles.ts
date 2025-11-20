import styled from 'styled-components'

import { BREAKPOINT } from 'common/constants'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (max-width: ${BREAKPOINT}) {
    gap: 1.5rem;
  }
`

export const SkillTitle = styled.h2`
  margin-block: 0 5px;
  ${(props) => props.theme.typo.default['body--bold']};
  color: #ffffff;

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile['body--bold']};
  }
`

export const SkillsText = styled.p`
  margin: 0;
  ${(props) => props.theme.typo.default.body};

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.body};
  }
`

export const SkillsContainer = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 180px));
  grid-gap: 1.5rem;
  justify-content: center;

  @media screen and (max-width: ${BREAKPOINT}) {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 16px;
    justify-content: flex-start;
  }
`
