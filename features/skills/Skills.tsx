import { skillCategories } from '@/data/skills';
import SectionTitle from '../../components/layout/section-title';
import './skills.css';

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-muted/30 scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Skills"></SectionTitle>

        <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
          Mon environnement technique
        </h2>

        <p className="text-muted-foreground mt-5 max-w-2xl leading-7">
          Les technologies et pratiques que j&apos;utilise pour concevoir,
          développer et maintenir des applications logicielles.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="skill"
            >
              <div className="skill__shine"></div>
              <div className="skill__glow"></div>
              <div className='skill__content'>
                <div className='skill__text'>
                  <h3 className="skill__title">{category.title}</h3>

                  <p className="skill__description">
                    {category.description}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="skill__image"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
