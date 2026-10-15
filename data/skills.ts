export interface SkillCategory {
  id: string;
  translationKey: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    translationKey: 'languages',
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    translationKey: 'frontend',
    skills: ['Angular', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'backend&db',
    translationKey: 'backend&db',
    skills: ['Node.js', 'Spring', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'mobile',
    translationKey: 'mobile',
    skills: ['Java', 'Android Studio', 'SQLite'],
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
      'CI/CD',
      'DevSecOps',
      'Tests',
    ],
  },
];