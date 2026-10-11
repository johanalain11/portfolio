import Hero from '../../features/hero/Hero';
import NavbarComponent from '@/components/layout/Navbar';
import About from '@/features/about/About';
import Designs from '../../features/projects/Designs';
import {Skills} from '@/features/skills/Skills';
import {Experience} from '@/features/experience/Experience';
import {Projects} from '@/features/projects/Projects';
import { Engineering } from '@/features/engineering/Engineering';

export default function Home() {
  return (
    <main className="relative bg-black-100 items-center justify-center flex-col overflow-hidden w-full">
      <div className="w-full">
        <NavbarComponent />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Designs />
        <Engineering />
      </div>
    </main>
  );
}
