export interface SkillCategory {
  id: string;
  translationKey: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    translationKey: 'languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python'],
  },
  {
    id: 'frontend',
    translationKey: 'frontend',
    skills: ['Angular', 'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    translationKey: 'backend',
    skills: ['Node.js', 'Spring'],
  },
  {
    id: 'databases',
    translationKey: 'databases',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'graphic-design',
    translationKey: 'graphicDesign',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma'],
  },
  {
    id: 'tools-security',
    translationKey: 'toolsSecurity',
    skills: [
      'Git', 'GitHub', 'Docker',
      'Tests logiciels',
      'CI/CD',
      'Principes DevSecOps',
    ],
  },
];