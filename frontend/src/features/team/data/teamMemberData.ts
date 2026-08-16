export type TeamMember = {
  id: number
  name: string
  role: string
  blurb: string
  image?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Joshua Knott',
    role: 'Project Manager',
    blurb: 'Oversees the project and coordinates the teams work.',
    image: '/person.png',
  },
  {
    id: 2,
    name: 'Samuel Lopez',
    role: 'Business Analyst',
    blurb: 'Works with the team to identify requirements and project needs.',
    image: '/person.png',
  },
  {
    id: 3,
    name: 'Justin Chung',
    role: 'UI/UX Designer',
    blurb: 'Focuses on the design and usability of the solution.',
    image: '/person.png',
  },
  {
    id: 4,
    name: 'Saanvi Telukoti',
    role: 'Developer 1',
    blurb: 'Works on developing and implementing the solution features.',
    image: '/saanvi.jpeg',
  },
  {
    id: 5,
    name: 'Cameron Nyugen',
    role: 'Developer 2',
    blurb: 'Works on developing and implementing the solution features.',
    image: '/person.png',
  },
]