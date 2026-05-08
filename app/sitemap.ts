import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteConfig } from '@/lib/shared';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Root page
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // All docs pages from Fumadocs source
  const docPages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...docPages];
}
