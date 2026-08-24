/**
 * RVCE DebSoc design reminder: The Institutional Seal — a long-form society statement is
 * treated as a self-contained editorial window, using sparse typographic structure and depth.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { PageChrome } from "@/components/PageChrome";

const ARCHIVE_FOREST = "/assets/forest-archive.webp";

export default function Society() {
  return (
    <main className="window-page society-window">
      <PageChrome label="SOCIETY" section="02" />
      <section className="society-window-hero" style={{ backgroundImage: `url(${ARCHIVE_FOREST})` }}>
        <div className="society-window-shade" />
        <div className="society-window-content">
          <p className="section-index">A SOCIETY FOR THE LIVING ARGUMENT</p>
          <h1>Make the<br />strongest case.<br /><em>Then listen harder.</em></h1>
          <p>
            RVCE DebSoc is a room for students who believe a position is only as valuable as the care used to question it.
          </p>
        </div>
      </section>
      <section className="about-narrative scroll-reveal">
        <p className="section-index">ABOUT US</p>
        <h2>A room for<br /><em>clearer thought.</em></h2>
        <div className="about-copy">
          <p>
            The Debating Society of RVCE is a student-led club that sharpens critical thinking,
            persuasion, and public speaking. Through debates, workshops, and competitions, it gives
            students the discipline to turn a conviction into a case.
          </p>
          <p>
            From British Parliamentary debates to wide-ranging conversations on contemporary issues,
            DebSoc is a hub for expression, leadership, and intellectual growth, supported by a legacy
            of national and international achievement.
          </p>
          </div>
      </section>
      <section className="society-principles">
        <p className="section-index">THE PRACTICE</p>
        <div className="principle-row"><span>01</span><h2>Think<br />precisely.</h2><p>Build a claim that can stand up to the room.</p></div>
        <div className="principle-row"><span>02</span><h2>Speak<br />responsibly.</h2><p>Let clarity carry conviction without erasing complexity.</p></div>
        <div className="principle-row"><span>03</span><h2>Listen<br />generously.</h2><p>Make space for the argument that changes the question.</p></div>
      </section>
      <section className="core-tenets scroll-reveal">
        <div className="tenets-heading"><p className="section-index">CORE TENETS</p><p>Since its inception, DebSoc has been guided by six enduring habits of mind.</p></div>
        <div className="tenets-list">
          {['Critical Thinking', 'Integrity', 'Perspective', 'Resourcefulness', 'Rhetoric', 'Collaboration'].map((tenet, index) => (
            <article key={tenet}><span>{String(index + 1).padStart(2, '0')}</span><h2>{tenet}</h2></article>
          ))}
        </div>
      </section>
      <section className="window-next">
        <p>MEET THE PEOPLE WHO KEEP THE ROOM IN MOTION.</p>
        <Link href="/members">OPEN MEMBERS <ArrowUpRight size={20} /></Link>
      </section>
    </main>
  );
}
