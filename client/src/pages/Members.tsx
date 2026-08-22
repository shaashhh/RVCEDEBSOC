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
      <section className="members-gallery" aria-labelledby="members-gallery-heading">
        <div className="members-gallery-heading-row">
          <p className="section-index">THE ARCHIVE / 01</p>
          <p className="members-gallery-note">Scenes from the conversation</p>
        </div>
        <h2 id="members-gallery-heading">A room is also<br /><em>the memory it keeps.</em></h2>
        <div className="members-gallery-grid">
          <figure className="members-photo members-photo-campus">
            <div className="members-photo-media">
              <img src="/assets/members-campus-debate.png" alt="RVCE DebSoc members holding country placards on a campus corridor" />
            </div>
            <figcaption><span>01</span><span>THE ROOM, IN SESSION</span></figcaption>
          </figure>
          <figure className="members-photo members-photo-christ">
            <div className="members-photo-media">
              <img src="/assets/members-christ-debate.png" alt="RVCE DebSoc members at the Christ University Parliamentary Debate" />
            </div>
            <figcaption><span>02</span><span>PARLIAMENTARY DEBATE</span></figcaption>
          </figure>
          <figure className="members-photo members-photo-dinner">
            <div className="members-photo-media">
              <img src="/assets/members-dinner.png" alt="RVCE DebSoc members gathered together after an event" />
            </div>
            <figcaption><span>03</span><span>AFTER THE ROUND</span></figcaption>
          </figure>
          <figure className="members-photo members-photo-outdoor">
            <div className="members-photo-media">
              <img src="/assets/members-outdoor.png" alt="RVCE DebSoc members standing together outdoors at night" />
            </div>
            <figcaption><span>04</span><span>OUTSIDE THE ROOM</span></figcaption>
          </figure>
        </div>
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
