import { ProjectType } from 'common/types'
import HikingHelperPrototype from 'components/FigmaPrototypes/HikingHelperPrototype'
import RunTogetherPrototype from 'components/FigmaPrototypes/RunTogetherPrototype'
import CapstoneProjectShowcase from 'components/ProjectShowcase/CapstoneProjectShowcase'
import CaptVReProjectShowcase from 'components/ProjectShowcase/CaptVReProjectShowcase'
import NUSPlannerProjectShowcase from 'components/ProjectShowcase/NUSPlannerProjectShowcase'
import RHAppShowcase from 'components/ProjectShowcase/RHAppShowcase'

export const PROJECTS: ProjectType[] = [
  {
    title: 'CAPTVRE VR Photography Project',
    description:
      'A Virtual Reality photography based project, created using Unity, geared towards delivering a true-to-life photography experience for beginners to learn how to use a camera and for professionals to hone their craft in a VR environment.',
    component: CaptVReProjectShowcase,
  },
  {
    title: 'Raffles Hall Application (Supper Feature)',
    description:
      'A web application created with ReactJS and Redux, aimed to simplify supper order collation by allowing user to create a supper group, join existing supper groups, add order to supper group and track payments after the order has been completed.',
    component: RHAppShowcase,
  },
  {
    title: 'Laser Tag Capstone Project',
    description:
      'A laser tag game that uses hardware to detect movements and shots by a player, Artificial Intelligence to categorize the action into "Shield", "Grenade" or "Reload", and Agumented Reality to show game play, created with Unity.',
    component: CapstoneProjectShowcase,
  },
  {
    title: 'RunTogether Design Project',
    description:
      'An application design with the idea of allowing you and your friends to start running at different locations at the same time, yet still feel as though you are all running together using Virtual Reality.\n\nThis idea was entered into Huawei Future Interaction Design Award as part of the CS3240 Interaction Design class (Fall semester, 2021/2022) at the School of Computing, National University of Singapore, and was awarded 3rd out of 128 designs.\n\nInteract with the Figma prototype by clicking on the hotspots or using the arrow keys to view the app idea!',
    component: RunTogetherPrototype,
  },
  {
    title: 'HikingHelper Design Project',
    description:
      'An application designed to simplify the logistics of hiking for both amateur and experienced hikers alike. With HikingHelper, users are able to find suitable hiking trails via a comprehensive trail catalog, provide accurate navigation for hiking trails, as well as get live updates about hiking trails and the weather.\n\nInteract with the Figma prototype by clicking on the hotspots or using the arrow keys to view the app idea!',
    component: HikingHelperPrototype,
  },
  {
    title: 'NUSPlanner Orbital Project',
    description:
      'This was where my web development journey all started...\n\nWeb-based tool designed to help students create and keep track of their favourite timetables according to the modules and preferences they choose. Built using the MERN stack, module data collected is stored in a MongoDB database, which are retrieved when users create a customized timetable. After the user inputs specific restrictions, a timetable is generated using a greedy algorithm and reflected in the results page.',
    component: NUSPlannerProjectShowcase,
  },
]
