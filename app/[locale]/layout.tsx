import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { cn } from "@/lib/utils";
import { i18n } from "../../i18n.config";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Johan Alain NZALI KENGMEGNIE | Developper & Software Engineer',
    template: '%s | Johan Alain',
  },
  description: "Portfolio de Johan Alain NZALI KENGMEGNIE, développeur logiciel spécialisé dans les applications web, les interfaces attrayantes, maintenables et la conception logicielle.",
  applicationName: 'Portfolio de Johan NZALI',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Johan Alain NZALI KENGMEGNIE | Developper & Software Engineer',
    description:
      'Découvrez mes expériences, mes projets et mes compétences techniques.',
    siteName: 'Portfolio de Johan Alain',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
