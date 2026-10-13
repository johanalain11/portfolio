import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';
import { cn } from '@/lib/utils';
import { i18n, type Locale } from '../../i18n.config';
import { notFound } from 'next/navigation';
import { getSiteUrl } from '@/lib/site-url';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = getSiteUrl();

const seoContent: Record<
  Locale,
  {
    title: string;
    description: string;
    ogLocale: string;
  }
> = {
  fr: {
    title: 'Johan Alain NZALI KENGMEGNIE | Développeur & Ingénieur logiciel',
    description:
      'Portfolio de Johan Alain NZALI KENGMEGNIE, développeur logiciel spécialisé dans les applications web et mobiles, l’architecture applicative et la qualité logicielle.',
    ogLocale: 'fr_FR',
  },

  en: {
    title: 'Johan Alain NZALI KENGMEGNIE | Developer & Software Engineer',
    description:
      'Portfolio of Johan Alain NZALI KENGMEGNIE, software engineer focused on web and mobile development, application architecture and software quality.',
    ogLocale: 'en_US',
  },

  de: {
    title: 'Johan Alain NZALI KENGMEGNIE | Developer & Software Engineer',
    description:
      'Portfolio von Johan Alain NZALI KENGMEGNIE mit Schwerpunkt auf Web- und Mobile-Entwicklung, Softwarearchitektur und Softwarequalität.',
    ogLocale: 'de_DE',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!i18n.locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const content = seoContent[currentLocale];

  const localizedUrl = `/${currentLocale}`;

  return {
    metadataBase: siteUrl,

    title: {
      absolute: content.title,
    },

    description: content.description,
    verification: {
      google: 'googleeed063e8882b799b.html'
    },

    applicationName: 'Portfolio de Johan NZALI',

    alternates: {
      canonical: localizedUrl,

      languages: {
        fr: '/fr',
        en: '/en',
        de: '/de',
        'x-default': '/fr',
      },
    },

    openGraph: {
      type: 'website',
      locale: content.ogLocale,
      url: localizedUrl,
      title: content.title,
      description: content.description,
      siteName: 'Johan NZALI | Software Engineer',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Portfolio de Johan Alain NZALI KENGMEGNIE',
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;

  if (!i18n.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
