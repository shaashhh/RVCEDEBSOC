/**
 * RVCE DebSoc design reminder: The Institutional Seal — home is now a ceremonial title page
 * and a catalogue of gates. Each section leads outward to a dedicated content window.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type CSSProperties, type PointerEvent } from "react";

const OFFICIAL_EMBLEM = "/assets/official-emblem-clean.webp";
const DIALOGUE_MARK = "/assets/dialogue-mark.webp";

const navigationItems = [
  { label: "Programme", href: "/sip" },
  { label: "Society", href: "/society" },
  { label: "Accolades", href: "/accolades" },
  { label: "British Parliamentary", href: "/formats/bp" },
  { label: "Asian Parliamentary", href: "/formats/ap" },
  { label: "Members", href: "/members" },
];

const pathways = [
  { index: "", eyebrow: "", title: <>Student Induction<br />Program ’26</>, href: "/sip", className: "pathway-sip" },
  { index: "", eyebrow: "", title: <>About<br />DebSoc</>, href: "/society", className: "pathway-about" },
  { index: "", eyebrow: "", title: <>Accolades</>, href: "/accolades", className: "pathway-accolades" },
  { index: "", eyebrow: "", title: <>British<br />Parliamentary</>, href: "/formats/bp", className: "pathway-bp" },
  { index: "", eyebrow: "", title: <>Asian<br />Parliamentary</>, href: "/formats/ap", className: "pathway-ap" },
  { index: "", eyebrow: "The collective", title: <>Members</>, href: "/members", className: "pathway-members" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 46 });

  const trackPointer = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPointer({ x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 });
  };
  const heroStyle = { "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as CSSProperties;

  return (
    <main className="site-shell">
      <section className="hero-section" onPointerMove={trackPointer} style={heroStyle} aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-aura" aria-hidden="true" />
        <button className="hero-menu-lockup" aria-label="Open RVCE DebSoc navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span>RVCE / DEBSOC</span>
          <span>{menuOpen ? "CLOSE ×" : "EST. 2003"}</span>
        </button>
        <div className="hero-meta hero-meta-right"><span>ISSUE / 2026</span><span>INDIA</span></div>
        <nav className={`hero-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigationItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
        </nav>
        <img className="hero-emblem" src={OFFICIAL_EMBLEM} alt="RVCE Debating Society official emblem" />
        <div className="hero-title-wrap">
          <h1 id="hero-title" className="hero-title" aria-label="RVCE DebSoc"><span>RVCE</span><span>DEBSOC</span></h1>
        </div>
      </section>

      <section className="pathways" id="gates" aria-label="Open an RVCE DebSoc page">
        {pathways.map((pathway) => (
          <a className={`pathway ${pathway.className}`} href={pathway.href} key={pathway.index}>
            <div className="pathway-topline"><span>{pathway.index}</span><span>{pathway.eyebrow}</span></div>
            <h3>{pathway.title}</h3>
            <span className="pathway-arrow" aria-hidden="true"><ArrowUpRight /></span>
          </a>
        ))}
      </section>

      <footer className="site-footer">
        <div className="footer-mark"><img src={DIALOGUE_MARK} alt="RVCE DebSoc dialogue mark" /><span>RVCE DEBSOC</span></div>
        <div className="footer-title">THE<br />DIALOGUE<br />CONTINUES.</div>
        <div className="footer-bottom"><span>RV College of Engineering, Bengaluru</span><a href="mailto:rvcedebsoc2025@gmail.com">rvcedebsoc2025@gmail.com <ArrowUpRight size={15} /></a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
