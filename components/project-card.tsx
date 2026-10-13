import { useTranslations } from 'next-intl';
import type { Project } from '@/data/projects';
import './project-card.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('Projects');
  const prefix = `items.${project.translationKey}`;

  const title = t(`${prefix}.title`);
  const description = t(`${prefix}.description`);
  const problem = t(`${prefix}.problem`);
  const solution = t(`${prefix}.solution`);

  return (
    <article className="nhost-project text-white">
      <div className="project-glow"></div>
      <div className="project-grid"></div>
      <div className="project-header">
        <h3 className="brand-text">{title}</h3>

        {project.featured && (
          <span className="bg-primary/10 text-primary shrink-0 rounded-full px-3 py-1 text-xs font-medium">
            {t('featuredBadge')}
          </span>
        )}
      </div>

      <div className="project-body">
        <p className="repo-description">
          {description}
        </p>

        <div className="mt-6">
          <h4 className="repo-title">
            {t('problemLabel')}
            <span className="blinking-cursor"></span>
          </h4>

          <p className="text-muted-foreground mt-2 text-sm leading-6">
            {problem}
          </p>
        </div>

        <div className="mt-5">
          <h4 className="repo-title">
            {t('solutionLabel')}
            <span className="blinking-cursor"></span>
          </h4>

          <p className="text-muted-foreground mt-2 text-sm leading-6">
            {solution}
          </p>
        </div>

        <ul
          aria-label={t('techAriaLabel', { title })}
          className="tag-wrapper"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="badge badge-js"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-sm font-medium underline underline-offset-4"
            >
              {t('sourceCode')}
              <span className="sr-only"> — {title}</span>
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-sm font-medium underline underline-offset-4"
            >
              {t('demo')}
              <span className="sr-only"> — {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}