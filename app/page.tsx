import type { Metadata } from 'next';
import { siteConfig } from '@/lib/shared';
import {
  softwareAppSchema,
  faqSchema,
  howToSchema,
  breadcrumbSchema,
  webPageSchema,
} from '@/lib/home-data';
import { HomeNav } from '@/components/home/HomeNav';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeFeaturesSection } from '@/components/home/HomeFeaturesSection';
import { HomeQuickStart } from '@/components/home/HomeQuickStart';
import { HomeRulesTable } from '@/components/home/HomeRulesTable';
import { HomeCompatibility } from '@/components/home/HomeCompatibility';
import { HomeResources } from '@/components/home/HomeResources';
import { HomeFaq } from '@/components/home/HomeFaq';
import { HomeFooter } from '@/components/home/HomeFooter';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.tagline }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0a0a0f] dark:text-white">
        <HomeNav />
        <main>
          <HomeHero />
          <HomeFeaturesSection />
          <HomeQuickStart />
          <HomeRulesTable />
          <HomeCompatibility />
          <HomeResources />
        </main>
        <HomeFaq />
        <HomeFooter />
      </div>
    </>
  );
}
