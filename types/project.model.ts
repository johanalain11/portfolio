export interface Project {
  slug: string;
  title: string;

  description: {
    short: string;
    long: string;
  };

  category: ProjectCategory;

  role: string;

  technologies: Technology[];

  links: {
    github?: string;
    live?: string;
  };

  architecture: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
  };

  engineering: {
    testing?: string[];
    security?: string[];
    cicd?: string[];
    performance?: string[];
  };

  featured: boolean;

  images: string[];
}

export type ProjectCategory =
  | 'web'
  | 'fullstack'
  | 'mobile'
  | 'devops'
  | 'ui-ux';

export type Technology = 
  | 'javascript'
  | 'python'
  | 'java'
  | 'typescript'
  | 'json'