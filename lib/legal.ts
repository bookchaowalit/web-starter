// Legal kit: privacy notice (PDPA, Thailand) and terms of service built from one per-app config.
// Copy this file and app/privacy + app/terms + app/site-footer.tsx into an app, then edit `legal`
// below. Cells own their code: there is no shared package, every app keeps its own copy.
// The text is a plain-language baseline, not legal advice; the owner signs off the wording.

export interface LegalConfig {
  product: string; // shown name, e.g. 'Agency CRM'
  productTh: string;
  controller: string; // data controller (PDPA section 19+)
  contactEmail: string;
  website: string;
  statusUrl: string;
  effectiveDate: string; // ISO date
  /** What personal data the app keeps. */
  dataCategories: string[];
  /** Purpose → lawful basis (PDPA s.24/26). */
  purposes: { purpose: string; basis: string }[];
  /** Processors and other recipients, with country (cross-border transfer, PDPA s.28). */
  recipients: { name: string; role: string; country: string }[];
  retention: string;
  paid: boolean;
}

export const legal: LegalConfig = {
  product: 'Web Starter',
  productTh: 'เว็บตั้งต้น',
  controller: 'Book (Chaowalit Greepoke)',
  contactEmail: 'bookchaowalit.work@gmail.com',
  website: 'https://bookchaowalit.com',
  statusUrl: 'https://monitor.bookchaowalit.com/',
  effectiveDate: '2026-11-12',
  dataCategories: ['ข้อมูลทางเทคนิค เช่น ประเภทเบราว์เซอร์ และ error ที่ตัดข้อมูลส่วนตัวออกแล้ว'],
  purposes: [
    { purpose: 'ให้บริการเว็บไซต์และแก้ไขข้อผิดพลาด', basis: 'ประโยชน์โดยชอบด้วยกฎหมาย (มาตรา 24(5))' },
  ],
  recipients: [
    { name: 'Vercel', role: 'โฮสต์เว็บไซต์', country: 'สหรัฐอเมริกา / สิงคโปร์' },
    { name: 'Sentry', role: 'บันทึก error โดยตัดข้อมูลผู้ใช้ออกก่อนส่ง', country: 'สหรัฐอเมริกา' },
  ],
  retention: 'เก็บเท่าที่จำเป็นต่อวัตถุประสงค์ข้างต้น และลบเมื่อพ้นความจำเป็น บันทึก error เก็บไม่เกิน 90 วัน',
  paid: false,
};

export interface LegalSection {
  id: string;
  title: string;
  titleEn: string;
  body: string[];
}

export function privacySections(c: LegalConfig): LegalSection[] {
  return [
    { id: 'controller', title: 'ผู้ควบคุมข้อมูลส่วนบุคคล', titleEn: 'Data controller',
      body: [`${c.controller} เป็นผู้ควบคุมข้อมูลส่วนบุคคลของ ${c.productTh} · ${c.product} ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)`,
        `ติดต่อเรื่องข้อมูลส่วนบุคคล: ${c.contactEmail}`] },
    { id: 'data', title: 'ข้อมูลที่เราเก็บ', titleEn: 'Data we collect', body: c.dataCategories },
    { id: 'purposes', title: 'วัตถุประสงค์และฐานทางกฎหมาย', titleEn: 'Purposes and lawful basis',
      body: c.purposes.map((p) => `${p.purpose} — ${p.basis}`) },
    { id: 'recipients', title: 'ผู้รับข้อมูลและการส่งข้อมูลไปต่างประเทศ', titleEn: 'Recipients and transfers abroad',
      body: [...c.recipients.map((r) => `${r.name}: ${r.role} · ประเทศ ${r.country}`),
        'ผู้ให้บริการเหล่านี้ประมวลผลข้อมูลตามคำสั่งของเราเท่านั้น และการส่งข้อมูลไปต่างประเทศทำภายใต้มาตรการคุ้มครองตามมาตรา 28–29 เช่น ข้อสัญญามาตรฐาน',
        'เราไม่ขายข้อมูลส่วนบุคคลของคุณ'] },
    { id: 'retention', title: 'ระยะเวลาเก็บรักษา', titleEn: 'Retention', body: [c.retention] },
    { id: 'rights', title: 'สิทธิของเจ้าของข้อมูล', titleEn: 'Your rights',
      body: ['ขอเข้าถึงและขอรับสำเนาข้อมูล ขอให้โอนย้ายข้อมูล ขอแก้ไขให้ถูกต้อง ขอให้ลบหรือทำให้ไม่สามารถระบุตัวตนได้ ขอระงับการใช้ และคัดค้านการประมวลผล',
        'ถอนความยินยอมได้ทุกเมื่อ โดยไม่กระทบการประมวลผลที่ทำไปก่อนหน้า',
        `ส่งคำขอได้ที่ ${c.contactEmail} เราจะตอบภายใน 30 วัน`,
        'ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.) ได้ที่ https://www.pdpc.or.th'] },
    { id: 'security', title: 'ความปลอดภัย', titleEn: 'Security',
      body: ['เข้ารหัสระหว่างส่ง (HTTPS) จำกัดสิทธิ์การเข้าถึงตามหน้าที่ สำรองข้อมูลแบบเข้ารหัส และแจ้งเหตุละเมิดต่อ สคส. ภายใน 72 ชั่วโมงเมื่อมีความเสี่ยง'] },
    { id: 'changes', title: 'การเปลี่ยนแปลงประกาศนี้', titleEn: 'Changes',
      body: [`มีผลตั้งแต่ ${c.effectiveDate} หากเปลี่ยนแปลงสาระสำคัญ เราจะแจ้งในบริการก่อนมีผล`] },
  ];
}

export function termsSections(c: LegalConfig): LegalSection[] {
  return [
    { id: 'service', title: 'บริการ', titleEn: 'The service',
      body: [`ข้อกำหนดนี้ใช้กับการใช้งาน ${c.productTh} · ${c.product} ที่ให้บริการโดย ${c.controller} การใช้บริการถือว่าคุณยอมรับข้อกำหนดนี้`] },
    { id: 'account', title: 'บัญชีผู้ใช้', titleEn: 'Your account',
      body: ['คุณต้องให้ข้อมูลที่ถูกต้องและดูแลการเข้าถึงบัญชีของคุณเอง แจ้งเราทันทีหากสงสัยว่าบัญชีถูกใช้โดยไม่ได้รับอนุญาต'] },
    { id: 'use', title: 'การใช้งานที่ยอมรับได้', titleEn: 'Acceptable use',
      body: ['ห้ามใช้บริการผิดกฎหมาย ละเมิดสิทธิผู้อื่น ส่งมัลแวร์ เจาะระบบ หรือใช้งานเกินสมควรจนกระทบผู้ใช้อื่น'] },
    { id: 'payment', title: 'ค่าบริการและการคืนเงิน', titleEn: 'Fees and refunds',
      body: c.paid
        ? ['ราคาและรอบการเรียกเก็บแสดงที่หน้าราคา ราคารวมภาษีมูลค่าเพิ่มหากมี', 'ยกเลิกได้ทุกเมื่อ มีผลเมื่อจบรอบที่ชำระแล้ว ขอคืนเงินได้ภายใน 7 วันหลังชำระครั้งแรก']
        : ['บริการนี้ไม่มีค่าใช้จ่ายในขณะนี้ หากจะเริ่มเก็บค่าบริการ เราจะแจ้งล่วงหน้าและขอความยินยอมก่อน'] },
    { id: 'data', title: 'ข้อมูลของคุณ', titleEn: 'Your data',
      body: ['ข้อมูลที่คุณนำเข้ายังเป็นของคุณ ขอส่งออกหรือลบได้ตามประกาศความเป็นส่วนตัว'] },
    { id: 'availability', title: 'ความพร้อมให้บริการ', titleEn: 'Availability',
      body: [`เราพยายามให้บริการต่อเนื่อง ดูสถานะได้ที่ ${c.statusUrl} แต่ไม่รับประกันว่าจะไม่มีการหยุดชะงัก`] },
    { id: 'liability', title: 'การจำกัดความรับผิด', titleEn: 'Limitation of liability',
      body: ['บริการให้ตามสภาพที่เป็นอยู่ ความรับผิดรวมของเราไม่เกินค่าบริการที่คุณชำระใน 12 เดือนก่อนเกิดเหตุ เว้นแต่กฎหมายห้ามจำกัด'] },
    { id: 'termination', title: 'การยุติบริการ', titleEn: 'Termination',
      body: ['คุณเลิกใช้ได้ทุกเมื่อ เราอาจระงับบัญชีที่ละเมิดข้อกำหนด โดยแจ้งเหตุผลและให้ส่งออกข้อมูลก่อนเมื่อทำได้'] },
    { id: 'law', title: 'กฎหมายที่ใช้บังคับ', titleEn: 'Governing law',
      body: ['ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย'] },
    { id: 'contact', title: 'ติดต่อ', titleEn: 'Contact',
      body: [`${c.contactEmail} · มีผลตั้งแต่ ${c.effectiveDate}`] },
  ];
}
