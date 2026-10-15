import Hero from '../../features/hero/Hero';
import NavbarComponent from '@/components/layout/Navbar';
import About from '@/features/about/About';
import Designs from '../../features/projects/Designs';
import {Skills} from '@/features/skills/Skills';
import {Experience} from '@/features/experience/Experience';
import {Projects} from '@/features/projects/Projects';
import { Engineering } from '@/features/engineering/Engineering';
import { Contact } from '@/features/contact/Contact';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next";
import CustomCursor  from '../../components/ui/custom-cursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <NavbarComponent />

      <main
        id="main-content"
        className="relative w-full overflow-hidden bg-black-100"
      >
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Designs /> */}
        {/* <Engineering /> */}
        <Contact />
      </main>

      <Footer />

      <Analytics />
    </>
  );
}
