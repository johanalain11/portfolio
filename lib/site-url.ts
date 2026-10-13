const DEFAULT_SITE_URL =
  'https://portfolio-johan-nzali.vercel.app';

export function getSiteUrl(): URL {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL doit être une URL valide.',
    );
  }

  if (!['https:', 'http:'].includes(url.protocol)) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL doit utiliser HTTP ou HTTPS.',
    );
  }

  if (url.username || url.password) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL ne doit pas contenir de credentials.',
    );
  }

  if (
    process.env.NODE_ENV === 'production' &&
    url.protocol !== 'https:'
  ) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL doit utiliser HTTPS en production.',
    );
  }

  if (url.search || url.hash) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL ne doit contenir ni query string ni fragment.',
    );
  }

  return url;
}