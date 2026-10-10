"use client"; 

import Hero from '../features/hero/Hero';
import NavbarComponent from '@/components/layout/Navbar';
import About from '@/features/about/About';import dynamic from 'next/dynamic';

const Projects = dynamic(() => 
  import('@/features/projects/Projects').then((mod) => mod.HeroParallaxDemo), { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center justify-center flex-col overflow-hidden w-full">
      <div className="w-full">
        <NavbarComponent />
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
