import Image from 'next/image';

const requirements = [
  { label: 'Node.js', value: '≥ 18.0.0', src: '/logos/Node.js.svg' },
  { label: 'ESLint', value: 'v8.x · v9.x', src: '/logos/eslint.svg' },
  { label: 'TypeScript', value: '≥ 5.0.0', src: '/logos/Typescript.svg' },
  { label: '@typescript-eslint/parser', value: 'v6.x · v7.x · v8.x', src: '/logos/typescript-eslint.svg' },
];

const testedLogos = [
  { name: 'Next.js', src: '/logos/nextjs.svg' },
  { name: 'NestJS', src: '/logos/nestjs.svg' },
  { name: 'Express', src: '/logos/expressjs.svg' },
  { name: 'Hono', src: '/logos/Hono.svg' },
  { name: 'ElysiaJS', src: '/logos/elysiajs.svg' },
  { name: 'SvelteKit', src: '/logos/SvelteKit.svg' },
  { name: 'Vite', src: '/logos/vitejs.svg' },
];

const aiLogos = [
  { name: 'Cursor', src: '/logos/cursor-ai.svg' },
  { name: 'Windsurf', src: '/logos/windsurf-ai.svg' },
  { name: 'Antigravity', src: '/logos/Google_Antigravity.svg' },
  { name: 'Kiro', src: '/logos/kiro-ai.svg' },
];

export function HomeCompatibility() {
  return (
    <section className="relative border-t border-slate-200 px-6 py-24 dark:border-white/[0.06]" aria-labelledby="compat-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400/80">
            Compatibility
          </p>
          <h2
            id="compat-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Works With Your Stack
          </h2>
        </div>

        <div className="flex flex-col gap-16 h-full">
          {/* Requirements */}
          <div className="flex flex-col items-center">
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/40">Requirements</h3>
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              {requirements.map((req) => (
                <div key={req.label} className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-violet-500/20 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-none dark:hover:bg-white/[0.05]">
                  <Image
                    src={req.src}
                    alt={req.label}
                    width={48}
                    height={48}
                    className="h-12 w-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="space-y-1">
                    <dt className="text-sm font-medium text-slate-800 dark:text-white/85">{req.label}</dt>
                    <dd className="font-mono text-xs text-slate-500 dark:text-white/40">{req.value}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tested With */}
          <div className="flex flex-col items-center">
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/40">Tested With</h3>
            <div className="relative flex w-full flex-1 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max min-w-full shrink-0 animate-logo-ticker items-center gap-12 pr-12 md:gap-24 md:pr-24">
                {testedLogos.map((logo) => (
                  <div key={logo.name} className="flex flex-col items-center justify-center gap-2 md:gap-3">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={100}
                      className="h-10 md:h-14 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-500 md:text-base dark:text-white/35">{logo.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex w-max min-w-full shrink-0 animate-logo-ticker items-center gap-12 pr-12 md:gap-24 md:pr-24" aria-hidden="true">
                {testedLogos.map((logo) => (
                  <div key={logo.name + '-duplicate'} className="flex flex-col items-center justify-center gap-2 md:gap-3">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={100}
                      className="h-10 md:h-14 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-500 md:text-base dark:text-white/35">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI IDEs */}
          <div className="flex flex-col items-center">
            <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/40">Compatible With</h3>
            <div className="relative flex w-full flex-1 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex w-max min-w-full shrink-0 animate-logo-ticker-reverse items-center gap-12 pr-12 md:gap-24 md:pr-24">
                {aiLogos.map((logo) => (
                  <div key={logo.name} className="flex flex-col items-center justify-center gap-2 md:gap-3">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={100}
                      className="h-10 md:h-14 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-500 md:text-base dark:text-white/35">{logo.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex w-max min-w-full shrink-0 animate-logo-ticker-reverse items-center gap-12 pr-12 md:gap-24 md:pr-24" aria-hidden="true">
                {aiLogos.map((logo) => (
                  <div key={logo.name + '-duplicate'} className="flex flex-col items-center justify-center gap-2 md:gap-3">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={100}
                      height={100}
                      className="h-10 md:h-14 w-auto opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                    <span className="whitespace-nowrap text-sm font-medium text-slate-500 md:text-base dark:text-white/35">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
