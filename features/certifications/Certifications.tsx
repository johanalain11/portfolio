import React from 'react';
import { certifications } from '@/data/certifs';
import SectionTitle from '../../components/layout/section-title';
import { useTranslations } from 'next-intl';
import './certifications.css';
import Image from 'next/image';

function Certifications() {
  const t = useTranslations('Certifications');

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="bg-muted/30 scroll-mt-24 bg-white px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle title={t('sectionTitle')} />

        <h2 className="mt-6 text-3xl font-black tracking-tight md:text-5xl">
          {t('sectionSubtitle')}
        </h2>
        <p className="py-3 text-xl">{t('description')}</p>

        <div className="mx-auto mt-10 grid w-full grid-cols-1 justify-between gap-5 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certif) => {
            return (
              <article key={certif.id} className="card-container">
                <div className="card-effect">
                  <div className="card-inner">
                    <div className="card__liquid"></div>
                    <div className="card__shine"></div>
                    <div className="card__glow"></div>
                    {/* En-tête avec l'institution/domaines à gauche et l'icône à droite */}
                    <div className="card__content">
                      <div className="flex w-full items-center justify-between border-b border-b-sky-700 pb-2">
                        <div>
                          <h3 className="linkMore font-semibold">
                            {certif.institution}
                          </h3>
                          <p className="flex flex-wrap gap-2">
                            {certif.domains.map((domain) => (
                              <small key={domain} className="text-gray-400">
                                {domain}
                              </small>
                            ))}
                          </p>
                        </div>
                        <div>
                          <Image
                            src={certif.icon}
                            alt={certif.institution}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex w-full gap-2 items-center justify-between h-full">
                        <div className="card__title">{certif.name}</div>
                        <div className="card__footer">
                          {certif.status ? (
                            <span className="card__button text-green-600 border p-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          ) : (
                            <div className="flex items-center gap-1.5 font-medium text-amber-500">
                              <span className='card__button'>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 animate-pulse"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                              <span>{certif.percentage}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
