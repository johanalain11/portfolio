import { experiences } from '@/data/experience';

function formatDate(date: string): string {
  const [year, month] = date.split('-');

  const formattedDate = new Date(
    Number(year),
    Number(month) - 1,
  );

  return new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
  }).format(formattedDate);
}

export function Experience() {
  return (
    <section
      id="experiences"
      aria-labelledby="experience-title"
      className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Parcours professionnel
        </p>

        <h2
          id="experience-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Mon expérience
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          Mon parcours dans le développement logiciel, les projets auxquels
          j&apos;ai contribué et les compétences mises en pratique.
        </p>

        <div className="mt-12 space-y-10">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative border-l border-border pl-6 sm:pl-8"
            >
              <span
                aria-hidden="true"
                className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-primary"
              />

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-1 font-medium text-primary">
                    {experience.organization}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {formatDate(experience.startDate)} —{' '}
                  {experience.endDate
                    ? formatDate(experience.endDate)
                    : 'Aujourd’hui'}
                </p>
              </div>

              <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
                {experience.description}
              </p>

              <ul className="mt-5 space-y-3">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-sm leading-6"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />

                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <ul
                aria-label="Technologies utilisées"
                className="mt-6 flex flex-wrap gap-2"
              >
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border px-3 py-1.5 text-sm"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}