export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: 'professional' | 'personal' | 'academic';
  featured: boolean;
  image?: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'employee-management',
    title: 'Employee Management App',
    description:
      'Application de gestion des employés et des permissions.',
    problem:
      'Organiser la gestion des utilisateurs, des groupes et des autorisations dans une application.',
    solution:
      'Développer une interface structurée permettant de gérer les utilisateurs et les groupes selon les permissions attribuées.',
    technologies: [
      'Angular',
      'TypeScript',
      'Spring',
      'Keycloak',
    ],
    category: 'personal',
    featured: true,
    links: {
      github: 'https://github.com/johanalain11/employee-management-app',
    },
  },
];