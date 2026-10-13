export interface Project {
  id: string;
  translationKey: string; // Clé de référence pour les traductions
  category: 'professional' | 'personal' | 'academic';
  featured: boolean;
  image?: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'employee-management',
    translationKey: 'employeeManagement',
    category: 'personal',
    featured: false,
    technologies: [
      'Angular 20',
      'TypeScript',
      'Tailwind CSS',
      'Reactive Forms',
      'REST API',
    ],
    links: {
      github: 'https://github.com/johanalain11/employee-management-app',
    },
  },
  {
    id: 'job-in',
    translationKey: 'jobIn',
    category: 'personal',
    featured: false,
    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
    ],
    links: {
      github: 'https://github.com/johanalain11/job-in',
    },
  },
  {
    id: 'ecommerce-angular',
    translationKey: 'ecommerceAngular',
    category: 'personal',
    featured: false,
    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'FakeStoreAPI',
    ],
    links: {
      github: 'https://github.com/johanalain11/ecommerce-angular',
    },
  },
  {
    id: 'vatecedi',
    translationKey: 'vatecedi',
    category: 'personal',
    featured: false,
    technologies: [
      'Python',
      'Tkinter',
      'NumPy',
      'Statistiques descriptives',
    ],
    links: {
      github: 'https://github.com/johanalain11/vatecedi',
    },
  },
];