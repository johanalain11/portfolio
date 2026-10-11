import React from 'react'
import SectionTitle from '../../components/layout/section-title'

const About = () => {
  return (
    <div className='bg-gray-900 p-16 md:p-24 lg:px-36 flex flex-col gap-6' id='about'>
      <SectionTitle title="About"></SectionTitle>
      <h1 className='text-5xl text-white font-black'>Au-delà du code, l'ingénierie.</h1>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 text-white">
          <div className="space-y-5 text-base leading-7 text-muted-foreground">
            <p>
              Je suis un <b>développeur</b> axé sur la création de solutions sécurisées et performantes. J&apos;apprends par la pratique—en assimilant les concepts complexes à travers des projets concrets plutôt que par une étude isolée.
            </p>

            <p>
              Mon objectif principal est le développement web & mobile, la qualité logicielle (QA) et la sécurité dès la conception. Titulaire d&apos;une Licence en Informatique (option Sécurité des Systèmes) de l'Université de Yaoundé I, j&apos;associe de solides bases académiques à près de <b>3 ans d'expérience pratique sur le terrain.</b>
            </p>

            <p>
              Je maîtrise les technologies logicielles modernes, les bases de données et les bases des pratiques DevOps sous Linux et Windows. <b>J'aime relever le défi</b> de concevoir des applications rapides, fiables, structurées et sécurisées dès leur développement.
            </p>
          </div>

          <div className="space-y-6">
            
            
          </div>
        </div>
    </div>
  )
}

export default About
