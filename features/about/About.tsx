'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import SectionTitle from '../../components/layout/section-title';
import './about.css';
import { cn } from "@/lib/utils";
import { profile } from '@/data/profile';

export const About = () => {
  const t = useTranslations('About');

  return (
    <div className="relative flex flex-col gap-6 bg-taupe-950 p-10 md:p-24 lg:px-36" id='about'>
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "bg-[linear-gradient(to_right,#2b2b2b_0.5px,transparent_1px),linear-gradient(to_bottom,#2b2b2b_0.5px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_10%,#101828)]"></div>
      
      <SectionTitle title={t('sectionTitle')} />
      <h2 className="text-5xl font-black text-white z-10">
        {t('headline')}
      </h2>

      <div className="mt-8 grid gap-12 text-white grid-cols-1 lg:grid-cols-2">
        <div className="text-muted-foreground space-y-5 text-base leading-7 z-10">
          <p>
            {t.rich('paragraph1', {
              b: (chunks) => <strong className="font-bold text-white">{chunks}</strong>,
            })}
          </p>
          <p>
            {t.rich('paragraph2', {
              b: (chunks) => <strong className="font-bold text-white">{chunks}</strong>,
            })}
          </p>
          <p>
            {t.rich('paragraph3', {
              b: (chunks) => <strong className="font-bold text-white">{chunks}</strong>,
            })}
          </p>
        </div>

        <div className="space-y-6 mx-auto">
          <div className="group relative flex h-52 w-86 -rotate-12 flex-col items-start gap-4 overflow-hidden rounded-2xl border border-4 border-sky-900 bg-sky-800 p-5 duration-300 hover:-rotate-0">
            <div className="text-gray-50">
              <span className="text-5xl font-bold">Johan</span>
              <p className="text-xs">NZALI</p>
            </div>
            <a 
              href={profile.cvPath}
              download
              className="flex flex-row items-center rounded-lg gap-3 border bg-gray-50 px-3 py-2 font-semibold text-sky-800 duration-300 hover:bg-sky-900 hover:text-gray-50"
            >
              <span>{t('downloadCv')}</span>
              <svg
                className="h-6 w-6 fill-current"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <path
                  d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>

            <svg
              className="absolute -right-20 -bottom-0.5 z-10 -my-2 h-48 w-48 fill-gray-50 stroke-sky-900 duration-500 group-hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                data-name="layer1"
                d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                strokeMiterlimit="10"
                strokeWidth="5"
              ></path>
            </svg>

            <svg
              className="absolute -right-20 -bottom-0.5 z-10 -my-2 h-48 w-48 fill-gray-50 stroke-sky-700 duration-200 group-hover:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                data-name="layer1"
                d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                strokeMiterlimit="10"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;