import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";
import SiteFooter from "@/app/site-footer";
import { legal, privacySections, termsSections, type LegalConfig } from "@/lib/legal";

// Legal kit (interface-coverage backlog P-legal-kit, Linear BOO-413).

const PDPA_SECTIONS = ["controller", "data", "purposes", "recipients", "retention", "rights", "security", "changes"];

describe("legal kit", () => {
  it("privacy notice carries every PDPA section, the contact and the PDPC complaint route", () => {
    const sections = privacySections(legal);
    expect(sections.map((s) => s.id)).toEqual(PDPA_SECTIONS);
    const text = sections.flatMap((s) => s.body).join("\n");
    expect(text).toContain(legal.contactEmail);
    expect(text).toContain(legal.controller);
    expect(text).toContain("pdpc.or.th");
    for (const r of legal.recipients) expect(text).toContain(r.name);
  });

  it("terms switch the fee clause with the paid flag", () => {
    const free = termsSections(legal).find((s) => s.id === "payment")!.body.join(" ");
    const paid = termsSections({ ...legal, paid: true } as LegalConfig).find((s) => s.id === "payment")!.body.join(" ");
    expect(free).toContain("ไม่มีค่าใช้จ่าย");
    expect(paid).toContain("คืนเงิน");
    expect(termsSections(legal).map((s) => s.id)).toContain("law");
  });

  it("privacy and terms pages render one main landmark, a heading per section and the effective date", () => {
    for (const [Page, sections] of [
      [PrivacyPage, privacySections(legal)],
      [TermsPage, termsSections(legal)],
    ] as const) {
      const html = renderToString(<Page />);
      expect(html.match(/<main id="main-content"/g)).toHaveLength(1);
      expect(html.match(/<h1/g)).toHaveLength(1);
      for (const s of sections) expect(html).toContain(`id="${s.id}"`);
      expect(html).toContain(legal.effectiveDate);
    }
  });

  it("footer links privacy, terms, status and contact", () => {
    const html = renderToString(<SiteFooter />);
    expect(html).toMatch(/href="\/privacy\/?"/);
    expect(html).toMatch(/href="\/terms\/?"/);
    expect(html).toContain(`href="${legal.statusUrl}"`);
    expect(html).toContain(`href="mailto:${legal.contactEmail}"`);
    expect(html).toContain("<footer");
  });
});
