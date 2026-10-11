import { engineeringPrinciples } from '@/data/engineering';

export function Engineering() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-title"
      className="scroll-mt-24 px-6 pb-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Ma démarche
        </p>

        <h2
          id="engineering-title"
          className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Construire des logiciels au-delà des fonctionnalités.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          La qualité d&apos;un logiciel dépend autant de son fonctionnement que
          de sa structure, de sa fiabilité et de sa capacité à évoluer. Ces
          principes orientent mon approche du développement.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {engineeringPrinciples.map((principle) => (
            <article
              key={principle.id}
              className="rounded-xl border border-border p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-sm font-semibold text-primary">
                {principle.number}
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {principle.description}
              </p>

              <ul className="mt-5 space-y-3">
                {principle.practices.map((practice) => (
                  <li key={practice} className="flex items-start gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />

                    <span>{practice}</span>
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