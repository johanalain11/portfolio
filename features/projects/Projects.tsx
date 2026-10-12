import { projects } from '@/data/projects';
import { ProjectCard } from '../../components/project-card'

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 bg-muted/30 px-6 py-20 sm:px-10 lg:px-16 bg-black text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Réalisations
        </p>

        <h2
          id="projects-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Des projets, des solutions concrètes.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          Une sélection de projets illustrant mon approche du développement
          logiciel, mes choix techniques et ma capacité à concevoir des
          applications maintenables.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* {featuredProjects.length === 0 && (
          <p className="mt-8 text-muted-foreground">
            Les projets seront présentés prochainement.
          </p>
        )} */}

        {projects.some((project) => !project.featured) && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}