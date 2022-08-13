import { StyledH3, StyledList, StyledP } from './styles'

export type EducationType = {
  id: string
  school: string
  study: string
  dates: string
  description: React.ReactNode
  hasFade: boolean
}

export const EDUCATION: EducationType[] = [
  {
    id: 'education-3',
    school: 'National University of Singapore (NUS)',
    study: 'Computer Engineering',
    dates: '2019 - Present',
    description: (
      <>
        <StyledH3>Activities and societies:</StyledH3>
        <StyledP>Raffles Hall Resident AY21/22:</StyledP>
        <StyledList>
          <li>Frontend Lead of Raffles Hall Developers</li>
          <li>Member of Raffles Hall Handball Team</li>
          <li>Member of Raffles Hall Basketball Team</li>
          <li>Member of Raffles Hall ComMotion</li>
        </StyledList>
        <StyledP>Raffles Hall Resident AY20/21:</StyledP>
        <StyledList>
          <li>Vice-Captain of Raffles Hall Basketball Team</li>
          <li>Member of Raffles Hall Developers (Frontend developer)</li>
          <li>Member of Raffles Hall Handball Team</li>
          <li>Member of Raffles Hall Soccer Team</li>
        </StyledList>
        <StyledP>Eusoff Hall Resident AY19/20:</StyledP>
        <StyledList>
          <li>Member of Eusoff Hall Basketball Team</li>
          <li>Dance Member of Eusoff Hall Dance Production</li>
        </StyledList>
      </>
    ),
    hasFade: false,
  },
  {
    id: 'education-2',
    school: 'Saint Andrew’s Junior College',
    study: 'GCE A Level, Science (Physics, Chemistry, Mathematics, Economics)',
    dates: '2017 - 2018',
    description: (
      <>
        <StyledH3>Activities and societies:</StyledH3>
        <StyledList>
          <li>Orientation Group Leader</li>
          <li>Class Leader</li>
        </StyledList>
      </>
    ),
    hasFade: false,
  },
  {
    id: 'education-1',
    school: "St. Margaret's Secondary School",
    study: 'GCE O Level',
    dates: '2016 - 2013',
    description: (
      <>
        <StyledH3>Activities and societies:</StyledH3>
        <StyledP>Member of SMSS Basketball Team</StyledP>
        <StyledList>
          <li>
            2015 and 2016 South Zone &apos;B&apos; Division Championships
            (Girls)
          </li>
          <li>
            2013 and 2014 South Zone &apos;C Division Championships (Girls)
          </li>
        </StyledList>
      </>
    ),
    hasFade: true,
  },
]

export default EDUCATION
