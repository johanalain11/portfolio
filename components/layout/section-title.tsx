import React from 'react'

interface SectionTitleProps {
  title: string
}

export default function SectionTitle({title}: SectionTitleProps) {
  return (
    <div className='flex gap-3 items-center text-lg text-blue-800 uppercase tracking-widest'>
      <div className='h-0.5 w-12 bg-blue-800'></div>
      {title}
    </div>
  )
}