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
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 6rem);
  grid-gap: 2rem 1rem;

  @media screen and (max-width: ${BREAKPOINT}) {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 15px;
  }
`
