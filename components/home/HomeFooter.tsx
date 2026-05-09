import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/shared';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Documentation', href: siteConfig.links.docs },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Configuration', href: '/docs/configuration' },
      { label: 'Changelog', href: siteConfig.links.changelog, external: true },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { label: 'Next.js', href: '/docs/integrations#nextjs--typescript' },
      { label: 'NestJS', href: '/docs/integrations#nestjs--typescript' },
      { label: 'Vite + React', href: '/docs/integrations#vite--react--typescript' },
      { label: 'Express', href: '/docs/integrations#express--typescript' },
      { label: 'Elysia / Hono', href: '/docs/integrations#elysia--hono--bun--typescript' },
      { label: 'SvelteKit', href: '/docs/integrations#sveltekit--typescript' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: siteConfig.links.github, external: true },
      { label: 'npm', href: siteConfig.links.npm, external: true },
      { label: 'Report an Issue', href: siteConfig.links.issues, external: true },
      { label: 'Contributing', href: `${siteConfig.links.github}/blob/main/CONTRIBUTING.md`, external: true },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'X / Twitter', href: siteConfig.links.twitter, external: true },
      { label: 'LinkedIn', href: siteConfig.links.linkedin, external: true },
      { label: 'Instagram', href: siteConfig.links.instagram, external: true },
      { label: 'Facebook', href: siteConfig.links.facebook, external: true },
    ],
  },
] as const;

const supportLinks = [
  { label: 'Ko-fi', emoji: '☕', href: 'https://ko-fi.com/isaacnewton1' },
  { label: 'Trakteer', emoji: '💜', href: 'https://trakteer.id/isaacnewton1/link' },
] as const;

export function HomeFooter() {
  return (
    <footer className="relative border-t border-slate-200 px-6 pb-8 pt-16 dark:border-white/[0.06]">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        {/* Top: Logo + Columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image
                src="/logo.webp"
                alt="eslint-plugin-ai-guardrails logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-mono text-sm font-semibold text-slate-800 dark:text-white/80">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">eslint-plugin-</span>ai-guardrails
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-white/35">
              Stop AI-generated code from becoming long-term tech debt. Structure-first linting for AI-assisted TypeScript codebases.
            </p>

            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/20">Support the project</span>
              <div className="flex items-center gap-2.5">
                {supportLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-50 hover:text-violet-600 dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white/45 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                    aria-label={`${link.label} (opens in new tab)`}
                  >
                    {link.emoji} {link.label}
                  </Link>
                ))}
                <iframe src="https://github.com/sponsors/isaacnewton123/button" title="Sponsor isaacnewton123" height="32" width="114" style={{ border: 0, borderRadius: '6px' }} />
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/40">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-white/30 dark:hover:text-white/65"
                      aria-label={
                        'external' in link && link.external
                          ? `${link.label} (opens in new tab)`
                          : link.label
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-slate-200 pt-6 dark:border-white/[0.04]">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-slate-400 dark:text-white/20">
              MIT License · © {new Date().getFullYear()} eslint-plugin-ai-guardrails
            </p>
            <p className="text-xs text-slate-400 dark:text-white/20">
              Built by{' '}
              <Link
                href="https://github.com/isaacnewton123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-slate-800 dark:text-white/35 dark:hover:text-white/60"
                aria-label="Hanif Maulana on GitHub (opens in new tab)"
              >
                Hanif Maulana
              </Link>
            </p>
          </div>

          {/* Social Share Integration */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:mt-6 sm:justify-start">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-white/30">Share:</span>
            <a
              href={`https://x.com/intent/tweet?text=Check out eslint-plugin-ai-guardrails!&url=${siteConfig.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 transition-colors hover:text-violet-600 dark:text-white/40 dark:hover:text-violet-400"
              aria-label="Share on X (Twitter)"
            >
              X / Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteConfig.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 transition-colors hover:text-violet-600 dark:text-white/40 dark:hover:text-violet-400"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 transition-colors hover:text-violet-600 dark:text-white/40 dark:hover:text-violet-400"
              aria-label="Share on Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
