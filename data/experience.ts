export interface Experience {
  id: string;
  translationKey: string; // Clé de référence pour les traductions
  location: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'sie2',
    translationKey: 'sie2',
    location: 'Yaoundé, Cameroun',
    startDate: '2025-02',
    endDate: null,
    technologies: ['Angular', 'TypeScript', 'HTML/CSS', 'UML', 'Postman', 'Figma'],
  },
  {
    id: 'patnuc',
    translationKey: 'patnuc',
    location: 'Yaoundé, Cameroun',
    startDate: '2024-05',
    endDate: '2024-10',
    technologies: ['Kobo Tools', 'UML', 'Postman'],
  },
  {
    id: 'rccm',
    translationKey: 'rccm',
    location: 'Yaoundé, Cameroun',
    startDate: '2023-02',
    endDate: '2025-01',
    technologies: ['WordPress', 'Excel'],
  },
  {
    id: 'gbc',
    translationKey: 'gbc',
    location: 'Yaoundé, Cameroun',
    startDate: '2023-08',
    endDate: '2023-11',
    technologies: ['Java', 'SQLite', 'Android Studio'],
  },
];