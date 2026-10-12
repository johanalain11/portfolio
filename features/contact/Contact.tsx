import { profile } from '@/data/profile';
import { motion } from "motion/react";
import { LampContainer } from "../../components/ui/lamp";
import { Button } from "../../components/ui/moving-border";
import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from 'react-icons/fa6';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-12 shadow-xl shadow-blue-800 hover:shadow-sm transition ease-in-out duration-300">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </p>

          <h2
            id="contact-title"
            className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Construisons quelque chose d&apos;utile.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Vous recherchez un développeur capable de contribuer à la
            conception et à l&apos;évolution de solutions logicielles ?
            Je serai heureux d&apos;échanger sur vos projets et vos besoins.
          </p>

          <div className="mt-8 flex gap-4 flex-row">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-3 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              <a href={`mailto:${profile.email}`} className=' flex gap-3 items-center'>Me contacter <FaLocationArrow/></a>
            </Button>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-3 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              <a href={profile.cvPath} download className='hover:scale-110 flex gap-3 items-center'>CV <FaDownload/></a>
            </Button>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              {profile.location}
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  GitHub
                  <span className="sr-only"> — ouvrir le profil GitHub</span>
                </a>
              </li>

              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  LinkedIn
                  <span className="sr-only">
                    {' '}
                    — ouvrir le profil LinkedIn
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="underline underline-offset-4 hover:text-primary"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}