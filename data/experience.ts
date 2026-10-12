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
      'Contribution au développement du Système d’information environnementale de deuxième génération (SIE2).',
    responsibilities: [
      'Développer des interfaces web adaptées aux différents formats d’écran.',
      'Participer à la conception et à l’amélioration de l’expérience utilisateur.',
      'Contribuer à la personnalisation de l’interface selon les besoins des utilisateurs.',
    ],
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    id: 'rccm',
    role: 'Stagiaire Professionnel en Informatique',
    organization: 'OHADA/MINJUSTICE',
    location: 'Yaoundé, Cameroun',
    startDate: '2023-02',
    endDate: '2025-01',
    description:
      'Contribution à l\'assistance à la maitrise d’ouvrage dans le cadre du projet de modernisation du registre du commerce et du crédit mobilier (RCCM) au Cameroun',
    responsibilities: [
      'Chargement de données historiques dans le logiciel RCCM-OHADA à l\'aide d\'un automate.',
      'Supervision d\'une équipe de saisie, contrôle et modification des données historiques.',
      'Résolution des problèmes des processus automatisés, réduisant le temps d’arrêt de 20%.',
      'Participation à la conception et implémentation de la base de données des pièces manquantes des dossiers RCCM.'
    ],
    technologies: ['WordPress'],
  },
  {
    id: 'patnuc',
    role: 'Analyste Programmeur & Ingénieur des tests',
    organization: 'PATNUC/ MINADER/ MINEPIA',
    location: 'Yaoundé, Cameroun',
    startDate: '2024-05',
    endDate: '2024-10',
    description:
      'Participation au Développement et déploiement de la plateforme de système d\'information numérique des statistiques agro- pastorales et géographiques dans le cadre du PATNUC',
    responsibilities: [
      'Participation à la conception et modélisation UML du système de collecte (à partir de Kobo Tools), de remontée, de traitement et de publication.',
      'Participation aux tests fonctionnels de la plateforme SINSAH, réduisant les bugs en production de 30%.',
      'Participation à l\'atelier de formation des formateurs de la plateforme SINSAH.',
    ],
    technologies: ['UML', 'Postman', 'Kobo Tools'],
  },
  {
    id: 'gbc',
    role: 'Stagiaire Professionnel en Développement Mobile',
    organization: 'Gold Telecom',
    location: 'Yaoundé, Cameroun',
    startDate: '2023-08',
    endDate: '2023-11',
    description:
      'Développement d\'une application mobile de collecte bancaire pour les microfinances: Gold Bank Collection',
    responsibilities: [
      'Développement et maintenance de l\'application sur Android Studio (Java) - BD SQLite.',
      'Tests & débogage de l’application, améliorant les opérations bancaires de 20%.',
      'Rédaction de la documentation technique.',
    ],
    technologies: ['Java', 'SQLite'],
  },
];