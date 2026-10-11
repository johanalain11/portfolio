export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Langages',
    description: 'Les bases du développement applicatif.',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Des interfaces accessibles et maintenables.',
    skills: ['Angular', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'La logique métier et les services applicatifs.',
    skills: ['Node.js', 'Spring'],
  },
  {
    id: 'databases',
    title: 'Bases de données',
    description: 'La persistance et la gestion des données.',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'engineering-tools',
    title: 'Outils d’ingénierie',
    description: 'Le développement collaboratif et l’automatisation.',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins'],
  },
  {
    id: 'quality-security',
    title: 'Qualité et sécurité',
    description: 'Les pratiques qui renforcent la fiabilité logicielle.',
    skills: [
      'Tests logiciels',
      'Conception modulaire',
      'CI/CD',
      'Principes DevSecOps',
    ],
  },
];