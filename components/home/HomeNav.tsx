import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/shared';

export function HomeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/70 backdrop-blur-2xl backdrop-saturate-150">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-white/90 transition-colors hover:text-white"
          aria-label="eslint-plugin-ai-guardrails home"
        >
          <Image
            src="/logo.webp"
            alt="eslint-plugin-ai-guardrails logo"
            width={28}
            height={28}
            className="rounded-md transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Table of Contents / Jump Links (Desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="#why-heading" className="text-sm font-medium text-white/50 transition-colors hover:text-white/90">
            Features
          </Link>
          <Link href="#quickstart-heading" className="text-sm font-medium text-white/50 transition-colors hover:text-white/90">
            Quick Start
          </Link>
          <Link href="#rules-heading" className="text-sm font-medium text-white/50 transition-colors hover:text-white/90">
            Rules
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href={siteConfig.links.docs}
            className="relative rounded-lg px-3.5 py-2 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg px-3.5 py-2 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label="View on GitHub (opens in new tab)"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
            aria-label="View on npm (opens in new tab)"
          >
            npm
          </Link>
        </div>
      </nav>
    </header>
  );
}
