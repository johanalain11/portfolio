import { experiences } from '@/data/experience';
import { Timeline } from '../../components/ui/timeline';
import { FaLocationDot, FaCircleCheck } from 'react-icons/fa6';

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
      </div>
      <Timeline data={data}></Timeline>
    </section>
  );
}

const data = experiences.map((exp) => ({
  title: `${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : "Aujourd'hui"}`,
  content: (
    <div className='p-5 sm:-mt-5 bg-linear-to-tr hover:scale-95 transition ease-in-out duration-300 from-blue-50 to-blue-200 rounded-3xl shadow-xl hover:shadow-lg shadow-blue-300 border border-blue-200'>
      <div>
        <h3 className="text-2xl md:text-3xl font-black">
          {exp.role}
        </h3>

        <p className="mt-1 font-medium uppercase tracking-widest text-blue-800">
          {exp.organization}
        </p>

        <p className="mt-1 text-md text-gray-800 flex gap-3 items-center">
          <FaLocationDot/> {exp.location}
        </p>
      </div>
      <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
        {exp.description}
      </p>
      <ul className="mt-5 ml-4 space-y-3">
        {exp.responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className='flex gap-1 items-center'
          >
            <FaCircleCheck style={{ color: '#2e2e2e' }}/>
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
        className="mt-5 flex flex-wrap gap-2 border-t border-blue-800 pt-3 items-center"
      >
        Stack: 
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
}))