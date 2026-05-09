import { features } from '@/lib/home-data';

export function HomeFeaturesSection() {
  return (
    <section className="relative border-t border-slate-200 px-6 py-24 dark:border-white/[0.06]" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Why AI Guardrails?
          </p>
          <h2
            id="why-heading"
            className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Catch What AI Gets Wrong
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-slate-500 dark:text-white/45">
            AI coding assistants are incredibly productive — but they introduce predictable quality
            drift. These aren&apos;t style nitpicks; they&apos;re the exact patterns that turn a
            productive AI sprint into months of refactoring.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <article
              key={f.rule}
              className={`group relative rounded-xl border border-slate-200 border-l-2 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-white/[0.15] dark:hover:bg-white/[0.05]`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-lg" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="mb-1.5 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mb-4 font-mono text-xs text-violet-400/80">{f.rule}</p>
              <div className="space-y-2.5">
                <p className="text-sm leading-relaxed text-slate-500 dark:text-white/40">
                  <span className="inline-block rounded bg-red-500/10 px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-red-400/80">Problem</span>{' '}
                  {f.problem}
                </p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-white/55">
                  <span className="inline-block rounded bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-emerald-400/80">Fix</span>{' '}
                  {f.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
