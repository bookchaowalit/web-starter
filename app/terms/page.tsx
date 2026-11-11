import type { Metadata } from 'next';
import { legal, termsSections } from '@/lib/legal';
import LegalPage from '../legal-page';

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้บริการ',
  description: `ข้อกำหนดการใช้บริการ ${legal.productTh}`,
};

export default function TermsPage() {
  return <LegalPage title="ข้อกำหนดการใช้บริการ" titleEn="Terms of service" sections={termsSections(legal)} />;
}
