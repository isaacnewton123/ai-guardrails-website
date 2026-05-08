import { rulesTable } from '@/lib/home-data';

export function HomeRulesTable() {
  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24" aria-labelledby="rules-heading">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Rules
          </p>
          <h2
            id="rules-heading"
            className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Rules at a Glance
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-hidden rounded-xl border border-white/[0.08] md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] bg-white/[0.03]">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50">Rule</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50">Default</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50">Description</th>
              </tr>
            </thead>
            <tbody>
              {rulesTable.map((r, i) => (
                <tr
                  key={r.rule}
                  className={`border-b border-white/[0.04] transition-colors hover:bg-violet-500/[0.03] ${
                    i % 2 === 0 ? '' : 'bg-white/[0.015]'
                  }`}
                >
                  <td className="px-6 py-4 font-mono text-sm text-violet-400">{r.rule}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        r.severity === 'error'
                          ? 'bg-red-500/15 text-red-400'
                          : 'bg-amber-500/15 text-amber-400'
                      }`}
                    >
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${
                        r.severity === 'error' ? 'bg-red-400' : 'bg-amber-400'
                      }`} />
                      {r.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/55">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          {rulesTable.map((r) => (
            <div key={r.rule} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-sm font-medium text-violet-400">{r.rule}</span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    r.severity === 'error'
                      ? 'bg-red-500/15 text-red-400'
                      : 'bg-amber-500/15 text-amber-400'
                  }`}
                >
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${
                    r.severity === 'error' ? 'bg-red-400' : 'bg-amber-400'
                  }`} />
                  {r.severity}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-white/50">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
