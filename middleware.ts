import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n.config';

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed' // Optionnel : cache le '/fr' dans l'URL pour la langue par défaut
});

export const config = {
  // S'applique à toutes les routes sauf les fichiers statiques et l'API
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
