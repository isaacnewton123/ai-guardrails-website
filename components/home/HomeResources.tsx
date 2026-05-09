import Link from 'next/link';
import { resourceLinks } from '@/lib/home-data';

export function HomeResources() {
  return (
    <section className="relative border-t border-white/[0.06] px-6 py-24" aria-labelledby="links-heading">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Explore
          </p>
          <h2
            id="links-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Resources
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              aria-label={link.external ? `${link.label} (opens in new tab)` : link.label}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.05] hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-xl transition-colors duration-300 group-hover:bg-violet-500/15" aria-hidden="true">
                {link.icon}
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-semibold text-white transition-colors group-hover:text-violet-300">
                  {link.label}
                  {link.external && (
                    <svg className="h-3.5 w-3.5 text-white/30 transition-colors group-hover:text-violet-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  )}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/40">{link.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Sponsor Card */}
        <div className="mt-16 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center transition-all duration-300 hover:border-violet-500/20 hover:bg-white/[0.04]">
          <h3 className="mb-6 text-xl font-semibold tracking-tight text-white/90">Support Open Source</h3>
          <div className="max-w-full overflow-x-auto rounded-xl">
            <iframe src="https://github.com/sponsors/isaacnewton123/card" title="Sponsor isaacnewton123" height="225" width="600" style={{ border: 0, maxWidth: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
