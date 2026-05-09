import Link from 'next/link';
import { siteConfig } from '@/lib/shared';

const flatConfigSnippet = `// eslint.config.mjs
import aiGuardrails from 'eslint-plugin-ai-guardrails';

export default [
  aiGuardrails.flatConfigs.recommended
];`;

export function HomeQuickStart() {
  return (
    <section className="relative border-t border-slate-200 px-6 py-24 dark:border-white/[0.06]" aria-labelledby="quickstart-heading">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Quick Start
          </p>
          <h2
            id="quickstart-heading"
            className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Get Started in Seconds
          </h2>
          <p className="leading-relaxed text-slate-500 dark:text-white/45">
            One command sets up everything — ESLint config, scripts, and TypeScript baseline.
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-3.5 dark:border-white/[0.06]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-400">
                1
              </span>
              <p className="text-sm font-medium text-slate-700 dark:text-white/70">
                One-command setup <span className="ml-1 rounded bg-violet-500/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-400/80">recommended</span>
              </p>
            </div>
            <pre className="overflow-x-auto px-6 py-4 font-mono text-sm text-violet-600 dark:text-violet-300/90">
              <code>npx eslint-plugin-ai-guardrails init</code>
            </pre>
          </div>

          {/* Step 2 */}
          <div className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.12] dark:hover:bg-white/[0.04]">
            <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-3.5 dark:border-white/[0.06]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 dark:bg-white/[0.08] dark:text-white/60">
                2
              </span>
              <p className="text-sm font-medium text-slate-700 dark:text-white/70">
                Or add to your ESLint v9 flat config manually
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-2 dark:border-white/[0.04]">
              <span className="font-mono text-xs text-slate-400 dark:text-white/30">eslint.config.mjs</span>
            </div>
            <pre className="overflow-x-auto px-6 py-4 font-mono text-sm leading-relaxed text-slate-600 dark:text-white/65">
              <code>{flatConfigSnippet}</code>
            </pre>
          </div>

          <div className="pt-2 text-center">
            <Link
              href={siteConfig.links.docs}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-violet-400 transition-all hover:bg-violet-500/10 hover:text-violet-300"
            >
              Full installation guide in the docs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
