'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    
    startTransition(() => {
      // Remplace le préfixe de la locale actuelle par la nouvelle dans le chemin
      const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
      router.replace(newPathname);
    });
  };

  return (
    <div className="relative inline-block text-white" >
      <label htmlFor="locale-select" className="sr-only">
        Changer de langue
      </label>
      <select
        id="locale-select"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
        className="cursor-pointer appearance-none rounded-md border border-border bg-background px-3 py-1.5 pr-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
      >
        <option value="fr">🇫🇷 FR</option>
        <option value="en">🇬🇧 EN</option>
        <option value="de">🇩🇪 DE</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
        ▼
      </div>
    </div>
  );
}