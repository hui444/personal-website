import type { NextApiRequest, NextApiResponse } from 'next'

import { EducationType } from 'common/types'

const EDUCATION: EducationType[] = [
  {
    id: 'education-3',
    school: 'National University of Singapore (NUS)',
    study: 'Computer Engineering',
    dates: '2019 - Present',
    description: {
      title: 'Activities and societies:',
      content: [
        {
          title: 'Raffles Hall Resident AY21/22:',
          list: [
            'Frontend Lead of Raffles Hall Developers',
            'Member of Raffles Hall Handball Team',
            'Member of Raffles Hall Basketball Team',
            'Member of Raffles Hall ComMotion',
          ],
        },
        {
          title: 'Raffles Hall Resident AY20/21:',
          list: [
            'Vice-Captain of Raffles Hall Basketball Team',
            'Member of Raffles Hall Developers (Frontend developer)',
            'Member of Raffles Hall Handball Team',
            'Member of Raffles Hall Soccer Team',
          ],
        },
        {
          title: 'Eusoff Hall Resident AY19/20:',
          list: [
            'Member of Eusoff Hall Basketball Team',
            'Dance Member of Eusoff Hall Dance Production',
          ],
        },
      ],
    },
    hasFade: false,
  },
  {
    id: 'education-2',
    school: "Saint Andrew's Junior College",
    study: 'GCE A Level, Science (Physics, Chemistry, Mathematics, Economics)',
    dates: '2017 - 2018',
    description: {
      title: 'Activities and societies:',
      content: [
        {
          list: ['Orientation Group Leader', 'Class Leader'],
        },
      ],
    },
    hasFade: false,
  },
  {
    id: 'education-1',
    school: "St. Margaret's Secondary School",
    study: 'GCE O Level',
    dates: '2016 - 2013',
    description: {
      title: 'Activities and societies:',
      content: [
        {
          title: 'Member of SMSS Basketball Team',
          list: [
            "2015 and 2016 South Zone 'B' Division Championships (Girls)",
            "2013 and 2014 South Zone 'C' Division Championships (Girls)",
          ],
        },
      ],
    },

    hasFade: true,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EducationType[]>
) {
  res.status(200).json(EDUCATION)
}
