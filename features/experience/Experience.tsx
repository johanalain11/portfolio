import { useTranslations, useLocale } from 'next-intl';
import { experiences } from '@/data/experience';
import { Timeline } from '../../components/ui/timeline';
import { FaLocationDot, FaCircleCheck } from 'react-icons/fa6';
import SectionTitle from '@/components/layout/section-title';

function formatDate(date: string, locale: string): string {
  const [year, month] = date.split('-');

  const formattedDate = new Date(
    Number(year),
    Number(month) - 1,
  );

  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  }).format(formattedDate);
}

export function Experience() {
  const t = useTranslations('Experience');
  const locale = useLocale();

  const data = experiences.map((exp) => {
    const prefix = `items.${exp.translationKey}`;
    const role = t(`${prefix}.role`);
    const organization = t(`${prefix}.organization`);
    const description = t(`${prefix}.description`);
    
    // Récupération dynamique de la liste des responsabilités
    const responsibilities = t.raw(`${prefix}.responsibilities`) as string[];

    const startDateFormatted = formatDate(exp.startDate, locale);
    const endDateFormatted = exp.endDate 
      ? formatDate(exp.endDate, locale) 
      : t('present');

    return {
      title: `${startDateFormatted}\n${endDateFormatted}`,
      content: (
        <div className="p-5 sm:-mt-5 bg-linear-to-tr hover:scale-95 transition ease-in-out duration-300 from-blue-50 to-blue-200 rounded-3xl shadow-xl hover:shadow-lg shadow-blue-300 border border-blue-200" key={role}>
          <div>
            <h3 className="text-2xl md:text-3xl font-black">
              {role}
            </h3>

            <p className="mt-1 font-medium uppercase tracking-widest text-blue-800">
              {organization}
            </p>

            <p className="mt-1 text-md text-gray-800 flex gap-3 items-center">
              <FaLocationDot /> {exp.location}
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
            {description}
          </p>
          <ul className="mt-5 ml-4 space-y-3">
            {responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="flex gap-1 items-center"
              >
                <FaCircleCheck style={{ color: '#2e2e2e' }} />
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          <ul
            aria-label={t('techStackLabel')}
            className="mt-5 flex flex-wrap gap-2 border-t border-blue-800 pt-3 items-center"
          >
            {t('stackLabel')}:
            {exp.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border-blue-200 border bg-white px-3 py-1.5 text-sm hover:bg-blue-800 hover:text-white transition ease-in-out duration-300 hover:shadow-blue-900 cursor-pointer"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ),
    };
  });

  return (
    <section
      id="experiences"
      aria-labelledby="experience-title"
      className="scroll-mt-24 px-0 py-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title={t('sectionSubtitle')} />

        <h2
          id="experience-title"
          className="text-3xl font-black tracking-tight mt-4 sm:text-5xl"
        >
          {t('sectionTitle')}
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
          {t('sectionDescription')}
        </p>
      </div>
      <Timeline data={data}></Timeline>
    </section>
  );
}