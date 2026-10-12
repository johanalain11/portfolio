import React from 'react';
import SectionTitle from '../../components/layout/section-title';
import './about.css';
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <div
      className="flex flex-col gap-6 bg-gray-900 p-16 md:p-24 lg:px-36"
      id="about"
    >
      <SectionTitle title="About"></SectionTitle>
      <h2 className="text-5xl font-black text-white">
        Au-delà du code, l'ingénierie.
      </h2>

      <div className="mt-8 grid gap-12 text-white lg:grid-cols-2">
        <div className="text-muted-foreground space-y-5 text-base leading-7">
          <p>
            Je suis un <b>développeur</b> axé sur la création de solutions
            sécurisées et performantes. J&apos;apprends par la pratique—en
            assimilant les concepts complexes à travers des projets concrets
            plutôt que par une étude isolée.
          </p>

          <p>
            Mon objectif principal est le développement web & mobile, la qualité
            logicielle (QA) et la sécurité dès la conception. Titulaire
            d&apos;une Licence en Informatique (option Sécurité des Systèmes) de
            l'Université de Yaoundé I, j&apos;associe de solides bases
            académiques à près de{' '}
            <b>3 ans d'expérience pratique sur le terrain.</b>
          </p>

          <p>
            Je maîtrise les technologies logicielles modernes, les bases de
            données et les bases des pratiques DevOps sous Linux et Windows.{' '}
            <b>J'aime relever le défi</b> de concevoir des applications rapides,
            fiables, structurées et sécurisées dès leur développement.
          </p>
        </div>

        <div className="space-y-6 mx-auto">
          <div className="group relative flex h-52 w-86 -rotate-12 flex-col items-start gap-4 overflow-hidden rounded-2xl border border-4 border-sky-900 bg-sky-800 p-5 duration-300 hover:-rotate-0">
            <div className="text-gray-50">
              <span className="text-5xl font-bold">Johan</span>
              <p className="text-xs">NZALI</p>
            </div>
            <button className="flex flex-row items-center rounded-lg gap-3 border bg-gray-50 px-3 py-2 font-semibold text-sky-800 duration-300 hover:bg-sky-900 hover:text-gray-50">
              Dowload CV
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
            </button>

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
          {/* <div className="container">
            <button className="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <g fill="none" fillRule="evenodd">
                  <circle
                    className="inner-circle"
                    cx="60"
                    cy="60"
                    r="39"
                    fill="#FFF"
                  />

                  <path
                    className="menu-button"
                    fill="#9B9B9B"
                    fillRule="nonzero"
                    d="M58.486 56.324H57.19c-.48 0-.866.387-.866.865v1.29c0 .48.387.86.865.86h1.29c.48 0 .86-.39.86-.87v-1.29c0-.48-.39-.87-.87-.87zm-4.324 0h-1.297c-.478 0-.865.387-.865.865v1.29c0 .48.387.86.865.86h1.297c.478 0 .865-.39.865-.87v-1.29c0-.48-.387-.87-.865-.87zM58.486 52H57.19c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.324 0h-1.297c-.478 0-.865.387-.865.865v1.297c0 .478.387.865.865.865h1.297c.478 0 .865-.387.865-.865v-1.297c0-.478-.387-.865-.865-.865zm12.973 4.324h-1.297c-.478 0-.865.387-.865.865v1.29c0 .48.387.86.865.86h1.297c.478 0 .865-.39.865-.87v-1.29c0-.48-.387-.87-.865-.87zm-4.324 0h-1.29c-.48 0-.86.387-.86.865v1.29c0 .48.39.86.87.86h1.3c.48 0 .87-.39.87-.87v-1.29c0-.48-.38-.87-.86-.87zM67.14 52h-1.3c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.324 0H61.52c-.48 0-.865.387-.865.865v1.297c0 .478.386.865.865.865h1.297c.48 0 .866-.387.866-.865v-1.297c0-.478-.386-.865-.864-.865zM58.49 64.973h-1.3c-.48 0-.866.387-.866.865v1.297c0 .478.387.865.865.865h1.29c.48 0 .86-.387.86-.865v-1.297c0-.478-.39-.865-.87-.865zm-4.325 0h-1.297c-.478 0-.865.387-.865.865v1.297c0 .478.387.865.865.865h1.297c.478 0 .865-.387.865-.865v-1.297c0-.478-.388-.865-.866-.865zm4.324-4.324h-1.3c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.48 0 .86-.39.86-.87V61.5c0-.48-.39-.864-.87-.864zm-4.33 0h-1.3c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.472 0 .86-.39.86-.87V61.5c0-.48-.39-.864-.867-.864zm12.97 4.32h-1.29c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.29c.48 0 .86-.39.86-.87v-1.29c0-.48-.387-.87-.865-.87zm-4.33 0h-1.29c-.48 0-.87.38-.87.86v1.29c0 .48.38.86.86.86h1.3c.48 0 .862-.39.862-.87v-1.29c0-.48-.39-.87-.867-.87zm4.32-4.33h-1.3c-.48 0-.87.38-.87.86v1.3c0 .48.384.86.862.86h1.3c.476 0 .863-.39.863-.87V61.5c0-.48-.388-.864-.866-.864zm-4.33 0H61.5c-.48 0-.864.38-.864.86v1.3c0 .48.387.86.866.86H62.8c.48 0 .87-.39.87-.87V61.5c0-.48-.383-.864-.86-.864z"
                  />

                  <g className="outer-circle">
                    <circle
                      cx="60"
                      cy="60"
                      r="53"
                      stroke="#9B9B9B"
                      transform="rotate(90 60 60)"
                    />
                    <circle cx="60" cy="7" r="2" fill="#9B9B9B" />
                    <circle cx="60" cy="113" r="2" fill="#9B9B9B" />
                    <circle cx="113" cy="60" r="2" fill="#9B9B9B" />
                    <circle cx="7" cy="60" r="2" fill="#9B9B9B" />
                  </g>
                </g>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return(
    <div className="relative flex flex-col gap-6 bg-taupe-950 p-16 md:p-24 lg:px-36" id='about'>
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "bg-[linear-gradient(to_right,#2b2b2b_0.5px,transparent_1px),linear-gradient(to_bottom,#2b2b2b_0.5px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black mask-[radial-gradient(ellipse_at_center,transparent_10%,#101828)] "></div>
      
      <SectionTitle title="About"></SectionTitle>
      <h2 className="text-5xl font-black text-white z-10">
        Au-delà du code, l'ingénierie.
      </h2>

      <div className="mt-8 grid gap-12 text-white lg:grid-cols-2">
        <div className="text-muted-foreground space-y-5 text-base leading-7 z-10">
          <p>
            Je suis un <b>développeur</b> axé sur la création de solutions
            sécurisées et performantes. J&apos;apprends par la pratique—en
            assimilant les concepts complexes à travers des projets concrets
            plutôt que par une étude isolée.
          </p>

          <p>
            Mon objectif principal est le développement web & mobile, la qualité
            logicielle (QA) et la sécurité dès la conception. Titulaire
            d&apos;une Licence en Informatique (option Sécurité des Systèmes) de
            l'Université de Yaoundé I, j&apos;associe de solides bases
            académiques à près de{' '}
            <b>3 ans d'expérience pratique sur le terrain.</b>
          </p>

          <p>
            Je maîtrise les technologies logicielles modernes, les bases de
            données et les bases des pratiques DevOps sous Linux et Windows.{' '}
            <b>J'aime relever le défi</b> de concevoir des applications rapides,
            fiables, structurées et sécurisées dès leur développement.
          </p>
        </div>

        <div className="space-y-6 mx-auto">
          <div className="group relative flex h-52 w-86 -rotate-12 flex-col items-start gap-4 overflow-hidden rounded-2xl border border-4 border-sky-900 bg-sky-800 p-5 duration-300 hover:-rotate-0">
            <div className="text-gray-50">
              <span className="text-5xl font-bold">Johan</span>
              <p className="text-xs">NZALI</p>
            </div>
            <button className="flex flex-row items-center rounded-lg gap-3 border bg-gray-50 px-3 py-2 font-semibold text-sky-800 duration-300 hover:bg-sky-900 hover:text-gray-50">
              Dowload CV
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
            </button>

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
  )
}

export default AboutSection;
