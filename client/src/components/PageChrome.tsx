/**
 * RVCE DebSoc design reminder: The Institutional Seal — each subpage is a quiet editorial
 * window with a clear return path, restrained metadata, and the official identity kept visible.
 */
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const OFFICIAL_EMBLEM = "/assets/official-emblem-clean.webp";

type PageChromeProps = {
  label: string;
  section?: string;
};

export function PageChrome({ label }: PageChromeProps) {
  return (
    <header className="page-chrome">
      <Link href="/" className="page-home-link" aria-label="Return to RVCE DebSoc home">
        <ArrowLeft size={17} strokeWidth={1.4} />
        <span>HOME</span>
      </Link>
      <div className="page-identity">
        <img src={OFFICIAL_EMBLEM} alt="" />
        <span><b>RVCE DEBSOC</b><i>DIALOGUE / EST. 2003</i></span>
      </div>
      <Link href="/members" className="page-members-link">
        MEMBERS <ArrowUpRight size={14} strokeWidth={1.4} />
      </Link>
    </header>
  );
}
