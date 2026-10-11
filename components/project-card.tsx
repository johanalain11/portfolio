import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        {project.featured && (
          <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Projet phare
          </span>
        )}
      </div>

      <p className="mt-4 leading-7 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6">
        <h4 className="text-sm font-semibold">Problème traité</h4>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.problem}
        </p>
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-semibold">Approche technique</h4>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {project.solution}
        </p>
      </div>

      <ul
        aria-label={`Technologies utilisées pour ${project.title}`}
        className="mt-6 flex flex-wrap gap-2"
      >
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-border px-3 py-1.5 text-xs"
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
            className="text-sm font-medium underline underline-offset-4 hover:text-primary"
          >
            Code source
            <span className="sr-only"> — {project.title}</span>
          </a>
        )}

        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium underline underline-offset-4 hover:text-primary"
          >
            Démonstration
            <span className="sr-only"> — {project.title}</span>
          </a>
        )}
      </div>
    </article>
  );
}