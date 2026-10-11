export interface EngineeringPrinciple {
  id: string;
  number: string;
  title: string;
  description: string;
  practices: string[];
}

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'architecture',
    number: '01',
    title: 'Architecture et maintenabilité',
    description:
      'Structurer le code pour faciliter sa compréhension, son évolution et sa réutilisation.',
    practices: [
      'Séparation des responsabilités',
      'Composants réutilisables',
      'Typage strict avec TypeScript',
    ],
  },
  {
    id: 'quality',
    number: '02',
    title: 'Qualité et tests',
    description:
      'Réduire les régressions et améliorer la fiabilité grâce à des contrôles adaptés.',
    practices: [
      'Tests unitaires et d’intégration',
      'Analyse statique du code',
      'Validation des modifications',
    ],
  },
  {
    id: 'performance',
    number: '03',
    title: 'Performance et accessibilité',
    description:
      'Concevoir des interfaces rapides, utilisables et accessibles sur différents appareils.',
    practices: [
      'Optimisation du chargement',
      'HTML sémantique',
      'Conception responsive',
    ],
  },
  {
    id: 'security',
    number: '04',
    title: 'Automatisation et sécurité',
    description:
      'Intégrer progressivement les contrôles de qualité et les bonnes pratiques de sécurité au cycle de développement.',
    practices: [
      'Automatisation avec CI/CD',
      'Gestion des dépendances',
      'Principes DevSecOps',
    ],
  },
];