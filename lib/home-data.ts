import { siteConfig } from './shared';

// ─── Static data ──────────────────────────────────────────────────────────────

export const features = [
  {
    icon: '📄',
    rule: 'max-file-lines',
    title: 'No More God Files',
    problem: 'AI keeps appending to one file instead of splitting',
    solution: 'Warns when a file exceeds 300 lines',
  },
  {
    icon: '🔧',
    rule: 'max-function-lines',
    title: 'No More God Functions',
    problem: 'AI generates monolithic functions with everything inlined',
    solution: 'Warns when a function exceeds 50 lines',
  },
  {
    icon: '📌',
    rule: 'no-orphan-todos',
    title: 'No Orphan TODOs',
    problem: 'AI leaves TODO / FIXME / HACK with no tracking reference',
    solution: 'Errors without a link or deadline',
  },
  {
    icon: '💬',
    rule: 'no-ai-obvious-comments',
    title: 'No Redundant Comments',
    problem: 'AI adds `// Set x to 5` above `const x = 5`',
    solution: 'Flags comments that just repeat the code',
  },
] as const;

export const rulesTable = [
  { rule: 'max-file-lines', severity: 'warn', desc: 'Prevent files from exceeding 300 lines' },
  { rule: 'max-function-lines', severity: 'warn', desc: 'Prevent functions from exceeding 50 lines' },
  { rule: 'no-orphan-todos', severity: 'error', desc: 'Require TODO/FIXME/HACK to include a tracking reference' },
  { rule: 'no-ai-obvious-comments', severity: 'warn', desc: 'Detect comments that just repeat the following code' },
] as const;

export const compatibilityRows = [
  { label: 'Node.js', value: '≥ 18.0.0' },
  { label: 'ESLint', value: 'v8.x · v9.x' },
  { label: 'TypeScript', value: '≥ 5.0.0' },
  { label: '@typescript-eslint/parser', value: 'v6.x · v7.x · v8.x' },
] as const;

export const testedWith = [
  'Vite + React + TypeScript',
  'Next.js',
  'NestJS',
  'Express + TypeScript',
  'ESM projects',
  'CJS projects',
  'Monorepo workspaces',
] as const;

export const resourceLinks = [
  {
    href: siteConfig.links.docs,
    label: 'Documentation',
    desc: 'Full API reference, guides, and examples',
    icon: '📚',
    external: false,
  },
  {
    href: siteConfig.links.github,
    label: 'GitHub Repository',
    desc: 'Source code, issues, and contributions',
    icon: '⭐',
    external: true,
  },
  {
    href: siteConfig.links.npm,
    label: 'npm Package',
    desc: 'Install and version history',
    icon: '📦',
    external: true,
  },
  {
    href: siteConfig.links.issues,
    label: 'Report an Issue',
    desc: 'Bug reports and feature requests',
    icon: '🐛',
    external: true,
  },
  {
    href: siteConfig.links.changelog,
    label: 'Changelog',
    desc: 'What changed in each release',
    icon: '📋',
    external: true,
  },
  {
    href: siteConfig.links.kofi,
    label: 'Support the Project',
    desc: 'Buy the author a coffee on Ko-fi',
    icon: '☕',
    external: true,
  },
] as const;

export const faqItems = [
  {
    q: 'What is eslint-plugin-ai-guardrails?',
    a: 'An ESLint plugin that enforces structure-first linting rules designed to catch the code quality patterns AI coding assistants (Copilot, Cursor, ChatGPT, Claude) introduce most often — including god files, god functions, orphan TODOs, and redundant comments.',
  },
  {
    q: 'Does it support ESLint v9 flat config?',
    a: 'Yes. Use aiGuardrails.flatConfigs.recommended in your eslint.config.mjs for ESLint v9. ESLint v8 legacy .eslintrc config is also supported via plugin:ai-guardrails/recommended.',
  },
  {
    q: 'Is it free and open source?',
    a: 'Yes. MIT license. Free forever. Source code on GitHub, package on npm.',
  },
  {
    q: 'Which file types does it lint?',
    a: 'TypeScript files only: .ts, .tsx, .mts, and .cts. JavaScript files are intentionally excluded — this plugin targets TypeScript-first AI-assisted workflows.',
  },
  {
    q: 'How do I fail the CI build on any warning?',
    a: 'Add --max-warnings 0 to your lint script: "lint": "eslint . --max-warnings 0". Then gate your build: "build": "npm run lint && npm run typecheck && <build-step>".',
  },
] as const;

// ─── JSON-LD schemas ──────────────────────────────────────────────────────────

export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${siteConfig.url}/#software`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'ESLint Plugin',
  operatingSystem: 'Any',
  softwareVersion: '1.1.0',
  releaseNotes: `${siteConfig.url}/docs/changelog`,
  downloadUrl: siteConfig.links.npm,
  installUrl: siteConfig.links.npm,
  codeRepository: siteConfig.links.github,
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: 'TypeScript',
  keywords: siteConfig.keywords.join(', '),
  author: { '@id': `${siteConfig.url}/#author` },
  publisher: { '@id': `${siteConfig.url}/#organization` },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: siteConfig.links.npm,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1',
    reviewCount: '1',
  },
  review: {
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: 'Hanif Maulana' },
    reviewBody:
      'eslint-plugin-ai-guardrails catches the exact structural patterns AI coding tools introduce — god files, god functions, orphan TODOs, and redundant comments. Essential for any TypeScript project using AI assistants.',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to install eslint-plugin-ai-guardrails',
  description: 'Add ESLint guardrails for AI-assisted TypeScript codebases in 3 steps.',
  totalTime: 'PT2M',
  supply: [
    { '@type': 'HowToSupply', name: 'Node.js ≥ 18' },
    { '@type': 'HowToSupply', name: 'ESLint v8 or v9' },
    { '@type': 'HowToSupply', name: 'TypeScript ≥ 5' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Install the package',
      text: 'Run: npm install --save-dev eslint-plugin-ai-guardrails @typescript-eslint/parser',
      url: `${siteConfig.url}/docs/getting-started`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Add to ESLint config',
      text: 'In eslint.config.mjs, import aiGuardrails from eslint-plugin-ai-guardrails and add aiGuardrails.flatConfigs.recommended to your config array.',
      url: `${siteConfig.url}/docs/getting-started`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Run the linter',
      text: 'Run: eslint . --max-warnings 0 to enforce all guardrail rules with zero tolerance.',
      url: `${siteConfig.url}/docs/configuration`,
    },
  ],
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
  ],
};

export const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: siteConfig.title,
  description: siteConfig.description,
  isPartOf: { '@id': `${siteConfig.url}/#website` },
  about: { '@id': `${siteConfig.url}/#software` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: siteConfig.ogImage,
  },
};
