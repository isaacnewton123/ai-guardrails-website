import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig, siteConfig } from '@/lib/shared';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  // Build breadcrumb segments from slug
  const slugSegments: string[] = params.slug ?? [];
  const breadcrumbItems = [
    { position: 1, name: 'Home', item: siteConfig.url },
    { position: 2, name: 'Docs', item: `${siteConfig.url}/docs` },
    ...slugSegments.map((seg, idx) => ({
      position: idx + 3,
      name: seg
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' '),
      item: `${siteConfig.url}/docs/${slugSegments.slice(0, idx + 1).join('/')}`,
    })),
  ];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.data.title,
    description: page.data.description ?? siteConfig.description,
    url: `${siteConfig.url}${page.url}`,
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      url: 'https://github.com/isaacnewton123',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.webp`,
      },
    },
    isPartOf: {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    articleSection: 'Documentation',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const pageUrl = `${siteConfig.url}${page.url}`;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title: page.data.title,
      description: page.data.description ?? siteConfig.description,
      images: [
        {
          url: getPageImage(page).url,
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
      siteName: siteConfig.name,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description ?? siteConfig.description,
      images: [getPageImage(page).url],
      creator: siteConfig.twitterHandle,
    },
  };
}
