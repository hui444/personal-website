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

export const StyledText = styled.p`
  grid-area: text;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-block: 0 5px;
  ${(props) => props.theme.typo.default.body};

  @media screen and (max-width: ${BREAKPOINT}) {
    ${(props) => props.theme.typo.mobile.body};
    margin-bottom: 10px;
  }
`

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    'text text'
    'name email'
    'subject subject'
    'message message'
    'message message'
    'button button';
  column-gap: 26px;

  @media screen and (max-width: ${BREAKPOINT}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'text'
      'name'
      'email'
      'subject'
      'message'
      'message'
      'button';
  }
`
