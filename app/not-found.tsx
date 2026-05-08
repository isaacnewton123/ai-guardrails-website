import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/shared';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0f] text-white">
      <header className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <Link href="/" aria-label="Go home" className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
          <Image
            src="/logo.webp"
            alt="eslint-plugin-ai-guardrails logo"
            width={24}
            height={24}
            className="rounded-md"
          />
          <span className="font-mono text-sm font-semibold">ai-guardrails</span>
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/20">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <p className="mb-4 font-mono text-xl font-medium text-violet-400">404 Error</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/50">
          We searched everywhere, but we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on track.
        </p>

        <nav className="flex flex-col gap-3 sm:flex-row sm:gap-4" aria-label="Recovery navigation">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
          >
            Return Home
          </Link>
          <Link
            href={siteConfig.links.docs}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          >
            Browse Documentation
          </Link>
        </nav>

        <div className="mt-16 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-sm text-white/40">
            Think this is a mistake?{' '}
            <a
              href={siteConfig.links.issues}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 transition-colors hover:text-violet-300"
            >
              Let us know on GitHub
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
