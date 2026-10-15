import { useTranslations } from 'next-intl';
import { skillCategories } from '@/data/skills';
import SectionTitle from '../../components/layout/section-title';
import './skills.css';

export function Skills() {
  const t = useTranslations('Skills');

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-muted/30 scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t('sectionTitle')} />

        <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
          {t('heading')}
        </h2>

        <p className="text-muted-foreground mt-5 max-w-2xl leading-7">
          {t('description')}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const title = t(`categories.${category.translationKey}.title`);
            const description = t(`categories.${category.translationKey}.description`);

            return (
              <article
                key={category.id}
                className="skill"
              >
                <div className="skill__shine"></div>
                <div className="skill__glow"></div>
                <div className="skill__content">
                  <div className="skill__text">
                    <h3 className="skill__title">{title}</h3>

                    <p className="skill__description">
                      {description}
                    </p>
                  </div>

                  <ul className="mt-1 flex flex-wrap gap-2">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}