import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/shared';
import { ThemeToggle } from './ThemeToggle';

export function HomeNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-2xl backdrop-saturate-150 dark:border-white/[0.06] dark:bg-[#0a0a0f]/70">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-white/90 dark:hover:text-white"
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

        <div className="flex items-center gap-1">
          <Link
            href={siteConfig.links.docs}
            className="relative rounded-lg px-3.5 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/[0.06] dark:hover:text-white"
          >
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg px-3.5 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-white/60 dark:hover:bg-white/[0.06] dark:hover:text-white"
            aria-label="View on GitHub (opens in new tab)"
          >
            GitHub
          </Link>
          
          <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-white/10"></div>
          
          <ThemeToggle />
          
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
