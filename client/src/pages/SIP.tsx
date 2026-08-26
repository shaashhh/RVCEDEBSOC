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
        <img
          src={OFFICIAL_EMBLEM}
          className="window-crest"
          alt=""
        />

        <p className="section-index">RVCE DEBSOC PRESENTS</p>

        <h1>
          Student<br />
          Induction<br />
          <em>Program ’26</em>
        </h1>

        <p className="sip-welcome">
          Your first conversation starts here.
        </p>
      </section>

      <section
        className="sip-details"
        aria-label="Student Induction Program details"
      >
        <article>
          <span>BULLETIN / 01 — DATE</span>
          <strong>
            29 AUGUST<br />
            2026
          </strong>
        </article>

        <article>
          <span>BULLETIN / 02 — VENUE</span>
          <strong>
            LIBRARY<br />
            REEL ROOM
          </strong>
        </article>

        <article className="registration-panel">
          <span>BULLETIN / 03 — EVENTS</span>

          <div className="sip-events">

            <div className="sip-event">
              <span>01</span>
              <div>
                <h2>The Great Debatsby</h2>
                <p>
                  A fiery 2v2 British Parliamentary debate with sharp
                  speeches, rebuttals and a flow that spans politics,
                  ethics, science and culture.
                </p>
              </div>
            </div>

            <div className="sip-event">
              <span>02</span>
              <div>
                <h2>Catch Me If You Can</h2>
                <p>
                  A 4 player mystery debate where one player does not
                  know the motion. They must figure out the motion with
                  context clues before they get voted out.
                </p>
              </div>
            </div>

            <div className="sip-event">
              <span>03</span>
              <div>
                <h2>Knives Out</h2>
                <p>
                  Judges take a hard stance on real-world issues, and
                  it’s on you to argue, persuade and flip their position.
                </p>
              </div>
            </div>

            <div className="sip-event">
              <span>04</span>
              <div>
                <h2>Devil’s Advocate</h2>
                <p>
                  Given a motion and stance, you prep fast, dive in,
                  and survive the chaos. Adaptability wins the day.
                </p>
              </div>
            </div>

          </div>

          <a href="mailto:rvcedebsoc2025@gmail.com">
            CONTACT DEBSOC <ArrowUpRight size={15} />
          </a>
        </article>
      </section>
    </main>
  );
}
