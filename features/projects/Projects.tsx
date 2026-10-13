import { useTranslations } from 'next-intl';
import { projects } from '@/data/projects';
import { ProjectCard } from '../../components/project-card';
import SectionTitle from '../../components/layout/section-title';

export function Projects() {
  const t = useTranslations('Projects');
  const featuredProjects = projects.filter((project) => project.featured);
  const remainingProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 bg-muted/30 px-6 py-20 sm:px-10 lg:px-16 bg-black text-white"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={t('sectionSubtitle')} />

        <h2
          id="projects-title"
          className="text-3xl font-black mt-4 tracking-tight sm:text-5xl"
        >
          {t('sectionTitle')}
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          {t('sectionDescription')}
        </p>

        {featuredProjects.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {remainingProjects.length > 0 && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}