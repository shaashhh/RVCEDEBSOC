/**
 * RVCE DebSoc design reminder: The Institutional Seal — this archive window remains factual,
 * sober and intentionally ready for official results rather than inventing unverified accolades.
 */
import { PageChrome } from "@/components/PageChrome";

export default function Accolades() {
  return (
    <main className="window-page accolades-window">
      <PageChrome label="ACCOLADES" section="03" />
      <section className="accolades-opening">
        <p className="section-index">THE RECORD</p>
        <h1>A record is<br />built in rooms<br /><em>that matter.</em></h1>
        <p>From international finals to a national circuit built on consistency, the society’s record is made in the rooms where argument is tested.</p>
      </section>
      <section className="achievements-ledger scroll-reveal" aria-labelledby="achievements-heading">
        <div className="achievements-heading"><p className="section-index">ACHIEVEMENTS</p><h2 id="achievements-heading">A record that<br />travels.</h2></div>
        <article className="achievement-stage">
          <span>INTERNATIONAL</span>
          <h3>Asian British Parliamentary Championship</h3>
          <strong>Winners</strong>
          <p>HWS Round Robin IV — the only Indian institute invited.</p>
        </article>
        <article className="achievement-stage">
          <span>NATIONAL</span>
          <h3>National Law School (NLS)</h3>
          <strong>Champions, three consecutive years</strong>
          <p>Performed valiantly at Ramaiah, Christ, NLU, and IIT Bombay.</p>
        </article>
      </section>
      <section className="recent-achievements scroll-reveal">
        <p className="section-index">RECENT ACHIEVEMENTS</p>
        <h2>The latest<br /><em>chapter.</em></h2>
        <p className="recent-summary">Recent Achievements — Yadalam Debate 2026 Winners, Mumbai Open Novice Finals, and Multiple Breaks at CUPD.</p>
        <div>
          <article><span>2026</span><p>Yadalam Debate 2026</p><strong>Winners</strong></article>
          <article><span>RECENT</span><p>Mumbai Open Novice</p><strong>Finals</strong></article>
          <article><span>RECENT</span><p>CUPD</p><strong>Multiple breaks</strong></article>
        </div>
      </section>
    </main>
  );
}
