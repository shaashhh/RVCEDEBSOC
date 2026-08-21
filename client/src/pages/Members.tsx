/**
 * RVCE DebSoc design reminder: The Institutional Seal — the people page is a dedicated
 * welcoming window with clear roster structure, avoiding the fabrication of member identities.
 */
import { ArrowUpRight } from "lucide-react";
import { PageChrome } from "@/components/PageChrome";

export default function Members() {
  return (
    <main className="window-page members-window">
      <PageChrome label="MEMBERS" section="06" />
      <section className="members-opening">
        <p className="section-index">THE COLLECTIVE</p>
        <h1>The room<br />is made by<br /><em>the people in it.</em></h1>
        <p>Every speaker, organiser, adjudicator, and alumnus shapes the society’s continuing conversation.</p>
      </section>
      <section className="members-roster" aria-label="Member roster categories">
        <article><span>01</span><h2>Committee</h2><p>The current committee roster will be published by RVCE DebSoc.</p></article>
        <article><span>02</span><h2>Speakers</h2><p>Member profiles and debate interests will be added to this window.</p></article>
        <article><span>03</span><h2>Alumni</h2><p>The archive will acknowledge the people who carried the dialogue forward.</p></article>
      </section>
      <a className="member-contact" href="mailto:debsoc@rvce.edu.in">REQUEST MEMBER INFORMATION <ArrowUpRight size={18} /></a>
    </main>
  );
}
