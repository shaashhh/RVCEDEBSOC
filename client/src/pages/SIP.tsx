/**
 * RVCE DebSoc design reminder: The Institutional Seal — the SIP is its own focused window,
 * using oversized editorial information and a deliberate invitation rather than a homepage card.
 */
import { ArrowUpRight } from "lucide-react";
import { PageChrome } from "@/components/PageChrome";

const OFFICIAL_EMBLEM = "/assets/official-emblem-clean.webp";

export default function SIP() {
  return (
    <main className="window-page sip-page">
      <PageChrome label="SIP ’26" section="01" />
      <section className="sip-opening">
        <img src={OFFICIAL_EMBLEM} className="window-crest" alt="" />
        <p className="section-index">RVCE DEBSOC PRESENTS</p>
        <h1>Student<br />Induction<br /><em>Program ’26</em></h1>
        <p className="sip-welcome">Your first conversation starts here.</p>
      </section>
      <section className="sip-details" aria-label="Student Induction Program details">
        <article><span>BULLETIN / 01 — DATE</span><strong>29 AUGUST<br />2026</strong></article>
        <article><span>BULLETIN / 02 — VENUE</span><strong>LIBRARY<br />REEL ROOM</strong></article>
        <article className="registration-panel">
          <span>BULLETIN / 03 — REGISTRATION</span>
          <div className="registration-placeholder" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <p>REGISTRATION NOTICE<br />TO BE RELEASED</p>
          <a href="mailto:debsoc@rvce.edu.in">CONTACT DEBSOC <ArrowUpRight size={15} /></a>
        </article>
      </section>
    </main>
  );
}
