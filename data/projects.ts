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
      'Application Angular de gestion des employés, des formulaires et des demandes de congés.',

    problem:
      'Simplifier les opérations courantes de gestion des employés à travers une interface centralisée.',

    solution:
      'Développer une interface de gestion avec opérations CRUD, formulaires réactifs et services Angular dédiés aux échanges avec une API.',

    technologies: [
      'Angular 20',
      'TypeScript',
      'Tailwind CSS',
      'Reactive Forms',
      'REST API',
    ],

    category: 'personal',
    featured: false,

    links: {
      github: 'https://github.com/johanalain11/employee-management-app',
    },
  },

  {
    id: 'job-in',
    title: 'JOB-in',

    description:
      'Plateforme frontend de mise en relation entre candidats et entreprises pour la recherche d’emploi et la gestion du recrutement.',

    problem:
      'Proposer une interface qui distingue les besoins des candidats de ceux des entreprises au sein d’une même plateforme.',

    solution:
      'Concevoir une application React organisée autour d’un espace public, d’un espace candidat et d’un espace entreprise, avec des interfaces et des parcours adaptés à chaque profil.',

    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'Radix UI',
      'Framer Motion',
    ],

    category: 'personal',
    featured: false,

    links: {
      github: 'https://github.com/johanalain11/job-in',
    },
  },

  {
    id: 'ecommerce-angular',
    title: 'Ecommerce Angular',

    description:
      'Application e-commerce frontend permettant de consulter des produits et de gérer un panier.',

    problem:
      'Mettre en place un parcours d’achat simple avec consultation des produits et récapitulatif des articles sélectionnés.',

    solution:
      'Consommer les données de FakeStoreAPI, afficher les produits et centraliser la gestion du panier dans un service Angular avec calcul de la quantité et du prix total.',

    technologies: [
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'FakeStoreAPI',
    ],

    category: 'personal',
    featured: false,

    links: {
      github: 'https://github.com/johanalain11/ecommerce-angular',
    },
  },

  {
    id: 'vatecedi',
    title: 'Vatecedi',

    description:
      'Application Python de calcul des mesures statistiques pour des séries de données discrètes ou continues.',

    problem:
      'Faciliter le calcul des mesures statistiques descriptives à partir des effectifs d’une population.',

    solution:
      'Développer des fonctions de calcul et une interface graphique permettant d’obtenir des mesures de tendance centrale et de dispersion, avec une possibilité d’utilisation depuis le terminal.',

    technologies: [
      'Python',
      'Tkinter',
      'NumPy',
      'Statistiques descriptives',
    ],

    category: 'personal',
    featured: false,

    links: {
      github: 'https://github.com/johanalain11/vatecedi',
    },
  },
];