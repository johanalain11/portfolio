import type { MetadataRoute } from 'next';

import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl().origin;

  const languages = {
    fr: `${siteUrl}/fr`,
    en: `${siteUrl}/en`,
    de: `${siteUrl}/de`,
  };

  return Object.values(languages).map((url) => ({
    url,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages,
    },
  }));
} 