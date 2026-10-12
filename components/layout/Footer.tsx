import { profile } from '@/data/profile';

const currentYear = new Date().getFullYear();
export function Footer() {

  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16 bg-mist-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {profile.name}. Tous droits réservés.
        </p>

        <a
          href="#hero"
          className="w-fit text-sm font-medium underline underline-offset-4 hover:text-primary"
        >
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}