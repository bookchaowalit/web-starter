import Link from 'next/link';
import type { LegalSection } from '@/lib/legal';
import { legal } from '@/lib/legal';
import SiteFooter from './site-footer';

// Shared layout for /privacy and /terms: one <main>, one <h1>, a table of contents, one <h2> per section.
export default function LegalPage({ title, titleEn, sections }: { title: string; titleEn: string; sections: LegalSection[] }) {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-4 sm:px-6">
          <Link href="/" className="inline-flex min-h-11 items-center font-serif text-lg font-bold text-fg no-underline">
            {legal.productTh}
          </Link>
        </div>
      </header>
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="font-serif text-3xl font-bold">
          {title}
          <span className="mt-1 block text-base font-normal text-fg-muted">{titleEn}</span>
        </h1>
        <p className="mt-3 text-fg-muted">มีผลตั้งแต่ {legal.effectiveDate}</p>
        <nav aria-label="สารบัญ" className="mt-6 rounded-lg border border-border bg-surface p-4">
          <ol className="list-decimal space-y-1 pl-5">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-flex min-h-11 items-center">{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        {sections.map((s) => (
          <section key={s.id} aria-labelledby={`${s.id}-title`} className="mt-8">
            <h2 id={s.id} className="font-serif text-xl font-bold">
              <span id={`${s.id}-title`}>{s.title}</span>
              <span className="ml-2 text-sm font-normal text-fg-muted">{s.titleEn}</span>
            </h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3">{p}</p>
            ))}
          </section>
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
