import { useTranslations } from 'next-intl';
import { profile } from '@/data/profile';

const currentYear = new Date().getFullYear();

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {profile.name}. {t('rightsReserved')}
        </p>

        <a
          href="#hero"
          className="w-fit text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          {t('backToTop')}
        </a>
      </div>
    </footer>
  );
}