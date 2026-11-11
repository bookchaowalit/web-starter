import Link from 'next/link';
import { legal } from '@/lib/legal';

// Footer every app page should end with: legal links, the public status page and a contact.
export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-1 px-4 py-6 text-sm text-fg-muted sm:px-6">
        <span>© {new Date(legal.effectiveDate).getFullYear()} {legal.controller}</span>
        <nav aria-label="ลิงก์ท้ายหน้า" className="flex flex-wrap gap-x-4">
          <Link href="/privacy/" className="inline-flex min-h-11 items-center">ความเป็นส่วนตัว</Link>
          <Link href="/terms/" className="inline-flex min-h-11 items-center">ข้อกำหนด</Link>
          <a href={legal.statusUrl} className="inline-flex min-h-11 items-center">สถานะระบบ</a>
          <a href={`mailto:${legal.contactEmail}`} className="inline-flex min-h-11 items-center">ติดต่อ</a>
        </nav>
      </div>
    </footer>
  );
}
