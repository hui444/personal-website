import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SkillTitle = styled.h2`
  margin-block: 0 5px;
  ${(props) => props.theme.typo['body--bold']};
`

export const SkillsText = styled.p`
  margin: 0;
  ${(props) => props.theme.typo.body};
`

export const SkillsContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 6rem);
  grid-gap: 2rem 1rem;
`
