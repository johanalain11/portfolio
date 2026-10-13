'use client';

import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { Spotlight } from '../../components/ui/spotlight';
import { BackgroundBeams } from '../../components/ui/background-beams';
import { TextGenerateEffect } from '../../components/ui/text-generate-effect';
import { FlipWords } from '../../components/ui/flip-words';
import { Button } from "../../components/ui/moving-border";
import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from 'react-icons/fa6';
import { GlowingEffect } from '../../components/ui/glowing-effect';
import MouseScroll from '../../components/ui/mouse-scroll';
import dynamic from 'next/dynamic';
import { profile } from '@/data/profile';

const UserCard = dynamic(() => import('../../components/ui/user-card'), {
  ssr: false,
});

const Hero = () => {
  const t = useTranslations('Hero');

  // Récupération des mots pour FlipWords depuis les messages JSON sous forme de tableau
  const words = t.raw('words') as string[];

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased" id='hero'>
      <div>
        <Spotlight className="-top-40 left-0 md:-top-60 md:left-10" fill="blue"/>
        <Spotlight className="-bottom-100 left-300 md:-bottom-280 md:left-400" fill="white"/>
      </div>
      <Suspense fallback={<div className='bg-black h-screen'/>}>
        <BackgroundBeams /> 
      </Suspense>
      <div className='w-full justify-center max-w-7xl px-4 sm:px-6 lg:px-8 relative pt-16'>
        <div className='w-full flex flex-col gap-3 mt-24 md:mt-0'>
          <div className='flex gap-3 items-center text-2xl lg:text-3xl text-white'>
            <p>{t('iam')}</p>
            <TextGenerateEffect className='text-white font-black' words={profile.shortName} duration={1.5}/>
          </div>
          <div className="text-xl lg:text-2xl font-normal my-5 md:my-10 text-neutral-400">
            <FlipWords words={words} /><br />
            {t('description')}
          </div>
          <div className='flex gap-3'>
            <Button
              as="a"
              href="#contact"
              borderRadius="1.75rem"
              className="bg-slate-900 text-white border-slate-800 gap-3 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              {t('contact')} <FaLocationArrow/>
            </Button>
            <Button
              as="a"
              href={profile.cvPath}
              download
              borderRadius="1.75rem"
              className="bg-slate-900 text-white border-slate-800 gap-3 hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              {t('cv')} <FaDownload className='hover:scale-110'/>
            </Button>
          </div>

          <div className='gap-6 mt-10 md:mt-1 w-full md:w-fit grid grid-cols-1 md:grid-cols-3'>
            <div className="relative h-12 md:h-26 w-full bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white flex gap-4 md:gap-1 md:flex-col items-center md:items-start md:justify-start w-full justify-evenly'>
                <h3 className='text-3xl font-black'>{t('experienceYears')}</h3>
                <p>{t('experienceLabel')}</p>
              </div>
            </div>
            <div className="relative h-12 md:h-26 w-full bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white flex gap-4 md:gap-1 md:flex-col items-center md:items-start md:justify-start w-full justify-evenly'>
                <h3 className='text-3xl font-black'>{t('proProjectsCount')}</h3>
                <p className='justify-end'>{t('proProjectsLabel')}</p>
              </div>
            </div>
            <div className="relative h-12 md:h-26 w-full bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white flex gap-4 md:gap-1 md:flex-col items-center md:items-start md:justify-start w-full justify-evenly'>
                <h3 className='text-3xl font-black'>{t('personalProjectsCount')}</h3>
                <p>{t('personalProjectsLabel')}</p>
              </div>
            </div>
          </div>
          <UserCard/>
        </div>
      </div>
      <div className='absolute bottom-6 justify-center left-0 right-0'>
        <MouseScroll/>
      </div>
    </div>
  );
};

export default Hero;