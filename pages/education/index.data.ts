type Education = {
  id: string
  school: string
  study: string
  dates: string
  description: string[]
  hasFade: boolean
}

const EDUCATION: Education[] = [
  {
    id: 'education-3',
    school: 'National University of Singapore (NUS)',
    study: 'Computer Engineering',
    dates: '2019 - Present',
    description: [
      'Activities and societies:',
      'Raffles Hall Resident AY21/22:',
      'Frontend Lead of Raffles Hall Developers',
      'Member of Raffles Hall Handball Team',
      'Member of Raffles Hall Basketball Team',
      'Member of Raffles Hall ComMotion',
      '',
      'Raffles Hall Resident AY20/21:',
      'Vice-Captain of Raffles Hall Basketball Team',
      'Member of Raffles Hall Developers (Frontend developer)',
      'Member of Raffles Hall Handball Team',
      'Member of Raffles Hall Soccer Team',
      '',
      'Eusoff Hall Resident AY19/20:',
      'Member of Eusoff Hall Basketball Team',
      'Dance Member of Eusoff Hall Dance Production',
    ],
    hasFade: false,
  },
  {
    id: 'education-2',
    school: 'Saint Andrew’s Junior College',
    study: 'GCE A Level, Science (Physics, Chemistry, Mathematics, Economics)',
    dates: '2017 - 2018',
    description: [
      'Activities and societies: ',
      'Orientation Group Leader',
      'Class Leader',
    ],
    hasFade: false,
  },
  {
    id: 'education-1',
    school: "St. Margaret's Secondary School",
    study: 'GCE O Level',
    dates: '2016 - 2013',
    description: [
      'Activities and societies:',
      'Member of SMSS Basketball Team',
      "2015 and 2016 South Zone 'B' Division Championships (Girls)",
      "2013 and 2014 South Zone 'C' Division Championships (Girls)",
    ],
    hasFade: true,
  },
]

export default EDUCATION
