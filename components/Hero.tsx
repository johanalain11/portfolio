import { Suspense} from 'react';
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/spotlight';
import { BackgroundBeams } from './ui/background-beams';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FlipWords } from './ui/flip-words';
import { Button } from "./ui/moving-border";
import { FaLocationArrow } from "react-icons/fa6";
import { GlowingEffect } from './ui/glowing-effect';
import UserCard  from './ui/user-card'

const Hero = () => {

  const words = ['a FrontEnd Developper', 'a Software Engineer', 'a Mobile Developper', 'a Graphic Designer'];

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <Spotlight className="-top-40 left-0 md:-top-60 md:left-10" fill="blue"/>
        <Spotlight className="-bottom-100 left-300 md:-bottom-280 md:left-400" fill="white"/>
      </div>
      <Suspense fallback={<div className='bg-black h-screen'/>}>
        <BackgroundBeams /> 
      </Suspense>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-10'>
        <div className='w-full flex flex-col gap-3'>
          <div className='flex gap-3 items-end'><span className='text-white text-2xl lg:text-3xl pt-10'>I&#39;m </span>
            <div className='md:scale-300 pl-1 lg:pl-20'>
              <TextGenerateEffect className='text-white font-black' words="JOHAN NZALI" duration={1.5}/>
            </div>
          </div>
          <div className="text-xl lg:text-4xl font-normal my-10 text-neutral-600 dark:text-neutral-400">
            <FlipWords words={words} /><br />
            Building secured solutions.
          </div>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-3 hover:bg-white hover:text-black transition ease-in-out duration-300"
          >
            Contact Me <FaLocationArrow/>
          </Button>

          <div className='flex flex-wrap gap-3 mt-24 md:mt-1'>
            <div className="relative h-26 w-40 bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white'>
                <h3 className='text-3xl font-black'>&gt;3 Y.</h3>
                <p>Experience</p>
              </div>
            </div>
            <div className="relative h-26 w-40 bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white'>
                <h3 className='text-3xl font-black'>25+</h3>
                <p className='justify-end'>Projects</p>
              </div>
            </div>
            <div className="relative h-26 w-40 bg-white/10 rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='text-white'>
                <h3 className='text-3xl font-black'>+30</h3>
                <p>Clients satisfied</p>
              </div>
            </div>
          </div>
          <UserCard/>
          
        </div>
      </div>
    </div>
  )
}

export default Hero