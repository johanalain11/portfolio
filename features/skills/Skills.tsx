import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 bg-muted/30 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Compétences
        </p>

        <h2
          id="skills-title"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Mon environnement technique
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          Les technologies et pratiques que j&apos;utilise pour concevoir,
          développer et maintenir des applications logicielles.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="text-lg font-semibold">{category.title}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {category.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border px-3 py-1.5 text-sm"
                  >
                    {skill}
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