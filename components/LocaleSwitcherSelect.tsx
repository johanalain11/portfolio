'use client';

import { usePathname, useRouter } from '@/src/i18n/routing';
import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from 'react';

type Props = {
  children: ReactNode,
  value: string,
  label: string
}

export default function LocalSwitcherSelect({children, value, label}: Props) {
  const router = useRouter();
  const [isPending, startTranslation] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTranslation(() => {
      router.replace(
        pathname,
        {locale: nextLocale}
      );
    });
  }
  
  return (
    <label 
      className={clsx(
        "relative text-gray-400 bg-white/10 text-center flex items-center justify-center rounded-lg",
        isPending && "transition-opacity"
      )}>
        <p className='sr-only'>{label}</p>
        <select className='inline-flex appearance-none bg-transparent p-2' value={value} disabled={isPending} onChange={onSelectChange}>
          {children}
        </select>
        <span className='pointer-events-none absolute right-2 top-2'></span>
      </label>
  )
}
