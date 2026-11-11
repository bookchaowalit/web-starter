import type { Metadata } from 'next';
import { legal, privacySections } from '@/lib/legal';
import LegalPage from '../legal-page';

export const metadata: Metadata = {
  title: 'ประกาศความเป็นส่วนตัว',
  description: `วิธีที่ ${legal.productTh} เก็บ ใช้ และคุ้มครองข้อมูลส่วนบุคคลตาม PDPA`,
};

export default function PrivacyPage() {
  return <LegalPage title="ประกาศความเป็นส่วนตัว" titleEn="Privacy notice" sections={privacySections(legal)} />;
}
