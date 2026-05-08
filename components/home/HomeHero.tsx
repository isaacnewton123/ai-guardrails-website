'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/shared';

const badges = [
  { src: 'https://img.shields.io/npm/v/eslint-plugin-ai-guardrails', alt: 'npm version', width: 96 },
  {
    src: 'https://img.shields.io/github/actions/workflow/status/isaacnewton123/eslint-plugin-ai-guardrails/ci.yml?branch=main&label=CI&logo=github',
    alt: 'CI status',
    width: 80,
  },
  { src: 'https://img.shields.io/npm/l/eslint-plugin-ai-guardrails', alt: 'MIT license', width: 78 },
  { src: 'https://img.shields.io/npm/dm/eslint-plugin-ai-guardrails', alt: 'Monthly downloads', width: 120 },
  { src: 'https://img.shields.io/badge/built%20with-TypeScript-3178C6', alt: 'Built with TypeScript', width: 130 },
  { src: 'https://img.shields.io/badge/ESLint-v8%20%26%20v9-4B32C3', alt: 'ESLint v8 and v9', width: 110 },
] as const;

const installCmd = 'npm install --save-dev eslint-plugin-ai-guardrails';

export function HomeHero() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      className="relative flex min-h-[calc(100vh-57px)] flex-col items-center justify-center px-6 py-12 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/logo.webp"
          alt="eslint-plugin-ai-guardrails logo"
          width={80}
          height={80}
          className="rounded-2xl"
          priority
        />
      </div>

      {/* Badges */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2" aria-label="Project badges">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full">
          {badges.map((b) => (
            <img key={b.alt} src={b.src} alt={b.alt} width={b.width} height={20} loading="eager" />
          ))}
        </div>
      </div>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="mx-auto max-w-3xl font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
      >
        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">eslint-plugin-</span>
        <br className="sm:hidden" />
        ai-guardrails
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
        {siteConfig.description}
      </p>

      <p className="mx-auto mt-2 max-w-xl text-sm text-white/35">
        Works with Copilot, Cursor, ChatGPT, Claude, and any AI coding assistant.
        Supports ESLint v8 &amp; v9, TypeScript ≥ 5.
      </p>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={siteConfig.links.docs}
          className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500"
        >
          Read the Docs →
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          aria-label="View source on GitHub (opens in new tab)"
        >
          View on GitHub
        </Link>
        <Link
          href={siteConfig.links.npm}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.08]"
          aria-label="View on npm (opens in new tab)"
        >
          View on npm
        </Link>
      </div>

      {/* Quick install with copy button */}
      <div className="mx-auto mt-8 w-full max-w-140">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/25">Quick install</p>
        <div className="group relative flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-sm transition-colors hover:border-white/[0.12] hover:bg-white/[0.05]">
          <code className="font-mono text-sm text-white/70">{installCmd}</code>
          <button
            onClick={handleCopy}
            className="ml-3 shrink-0 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/50 transition-all hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-white/80"
            aria-label="Copy install command"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                Copied
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /></svg>
                Copy
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
