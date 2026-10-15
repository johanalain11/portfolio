export interface Certification {
  id: string;
  institution: string;
  name: string;
  domains: string[];
  status: boolean;
  percentage?: number;
  document?: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 'sfc',
    institution: 'VMEdu',
    name: 'Scrum Fundamentals Certified',
    domains: ['Scrum'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
  },
  {
    id: 'oci',
    institution: 'Oracle University',
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    domains: ['Cloud'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'
  },
  {
    id: 'py-e1',
    institution: 'CISCO Netacad & Python Institute',
    name: 'Python Essentials 1',
    domains: ['Python'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cisco.svg'
  },
  {
    id: 'ssdm',
    institution: 'LINUX FOUNDATION & OpenSSF',
    name: 'Security for Software Development Managers (LFD125)',
    domains: ['Security', '| Project Management'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linuxfoundation.svg'
  },
  {
    id: 'fer',
    institution: 'CodeSignal',
    name: 'Frontend Engineering with React',
    domains: ['React'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codesignal.svg'
  },
  {
    id: 'fea',
    institution: 'CodeSignal',
    name: 'Frontend Engineering in Angular',
    domains: ['Angular'],
    status: true,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/codesignal.svg'
  },
  {
    id: 'fnse1',
    institution: 'Fortinet',
    name: 'Fortinet NSE 1 Certified',
    domains: ['Security'],
    status: false,
    percentage: 75,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/fortinet.svg'
  },
  {
    id: 'ccst',
    institution: 'Cisco',
    name: 'Cisco Certified Support Technician (CCST) Network',
    domains: ['Network'],
    status: false,
    percentage: 50,
    document: undefined,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cisco.svg'
  }
];

