'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqItems } from '@/lib/home-data';
import { siteConfig } from '@/lib/shared';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-transparent">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 font-semibold text-slate-900 dark:text-white">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 dark:text-white/40 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500 dark:text-white/50">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function HomeFaq() {
  return (
    <section className="border-t border-slate-200 px-6 py-24 dark:border-white/[0.06]" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-white/35">
          More questions?{' '}
          <Link
            href={siteConfig.links.docs}
            className="text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
          >
            Read the docs
          </Link>{' '}
          or{' '}
          <Link
            href={siteConfig.links.issues}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
          >
            open an issue
          </Link>.
        </p>
      </div>
    </section>
  );
}
