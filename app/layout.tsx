import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/shared';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  // ── Titles & Descriptions ──────────────────────────────────────────────────
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: 'https://github.com/isaacnewton123' }],
  creator: siteConfig.author,
  publisher: siteConfig.author,

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
  appleWebApp: {
    title: 'eslint-ai-guardrails',
    statusBarStyle: 'black-translucent',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        type: 'image/webp',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical + Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
      'x-default': siteConfig.url,
    },
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },

  // ── Verification ──────────────────────────────
  verification: {
    google: '732d76f02bbe4290',
  },

  // ── Category ─────────────────────────────────────────────────────────────
  category: 'technology',
};

// ── Global JSON-LD schemas injected on every page ─────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.webp`,
    width: 512,
    height: 512,
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.npm,
    'https://x.com/isaac_newton252',
    'https://github.com/isaacnewton123',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { '@id': `${siteConfig.url}/#organization` },
  // Sitelinks Searchbox — enables Google search box in SERPs
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/docs?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#author`,
  name: 'Hanif Maulana',
  alternateName: 'Isaac Newton',
  url: 'https://github.com/isaacnewton123',
  sameAs: [
    'https://github.com/isaacnewton123',
    'https://x.com/isaac_newton252',
    'https://www.linkedin.com/in/hanif-maulana-210b4721b/',
    'https://www.instagram.com/hanifmaulana2/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Global JSON-LD schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Preconnect to external origins for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://img.shields.io" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.npmjs.com" />
      </head>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
