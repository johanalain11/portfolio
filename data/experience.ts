export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'sie2',
    role: 'Développeur Web',
    organization: 'MINEPDED',
    location: 'Yaoundé, Cameroun',
    startDate: '2025-02',
    endDate: null,
    description:
      'Contribution au développement de l’interface du Système d’information environnementale de deuxième génération (SIE2).',
    responsibilities: [
      'Développer des interfaces web adaptées aux différents formats d’écran.',
      'Participer à la conception et à l’amélioration de l’expérience utilisateur.',
      'Contribuer à la personnalisation de l’interface selon les besoins des utilisateurs.',
    ],
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  },
];