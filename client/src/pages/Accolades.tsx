/*
 * RVCE DebSoc design reminder: the record is an archive of meaningful rooms,
 * presented as distinct achievements rather than a compressed list.
 */
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { PageChrome } from "@/components/PageChrome";

type Achievement = {
  id: string;
  index: string;
  category: string;
  period: string;
  title: string;
  result: string;
  summary: string;
  detail: string;
  images: Array<{ src: string; alt: string }>;
};

const achievements: Achievement[] = [
  {
    id: "asian-british-parliamentary-championship",
    index: "01",
    category: "International",
    period: "2011",
    title: "Asian British Parliamentary Championship",
    result: "Winners",
    summary: "Karthik Sivaram and Prasum Bhaiya won the ABP Championship, one of the world’s largest and most prestigious tournaments, in 2011.",
    detail: "They are the first and only Indian team to have ever won this tournament, which was held in Bangladesh.",
    images: [
      {
        src: "/assets/accolades-asian-british.png",
        alt: "RVCE DebSoc members at the Asian British Parliamentary Championship",
      },
    ],
  },
  {
    id: "hws-round-robin",
    index: "02",
    category: "International",
    period: "Invitation",
    title: "HWS Round Robin IV",
    result: "Only Indian institution invited",
    summary: "Known as the most exclusive debating tournament in the world, RVCE is the only Indian institution to have ever been invited.",
    detail: "The invitation places RVCE DebSoc in a uniquely international field, alongside institutions selected for this closed round-robin format.",
    images: [
      {
        src: "/assets/accolades-hws-robin.png",
        alt: "RVCE DebSoc members at HWS Round Robin IV",
      },
    ],
  },
  {
    id: "national-law-school-debate",
    index: "03",
    category: "National",
    period: "Three-time champions",
    title: "Consecutive Winners of the National Law School Debate",
    result: "Champions, three consecutive years",
    summary: "RVCE has won the NLS Championship, considered the most important tournament in India, three times in the past five years.",
    detail: "Winning this championship every year remains our primary objective as a society. It also reflects the dedication required to beat law students at their own game.",
    images: [
      {
        src: "/assets/accolades-nls.png",
        alt: "RVCE DebSoc winners with the National Law School Debate trophy",
      },
    ],
  },
];

const recentAchievements: Achievement[] = [
  {
    id: "yadalam-debate",
    index: "01",
    category: "Recent",
    period: "2026",
    title: "Yadalam Debate 2026",
    result: "Winners",
    summary: "Sri Vishnu PV and Dhriti P Arya won the Yadalam Debate 2026, an inter-collegiate debate organised by the Rotary Club of Bangalore.",
    detail: "The win adds another recent result to the society’s current competitive record, with Sri Vishnu PV and Dhriti P Arya named on the winning entry.",
    images: [],
  },
  {
    id: "vimarsha-2026",
    index: "02",
    category: "Recent",
    period: "2026",
    title: "Vimarsha 2026",
    result: "Runner-up",
    summary: "Maanav Talwar finished runner-up at Vimarsha 2026.",
    detail: "Vimarsha is a reflective debate organised by the Literature and Debate Society of BMSCE Bangalore as part of their cultural fest, Utsav.",
    images: [],
  },
  {
    id: "cupd-open-break",
    index: "03",
    category: "Recent",
    period: "2026",
    title: "CUPD 2026",
    result: "Contingent break",
    summary: "The RVCE contingent broke at CUPD 2026, with the open break team progressing to the next stage.",
    detail: "The contingent’s CUPD result reflects depth across the team, with multiple members continuing through the tournament’s competitive stages.",
    images: [
      {
        src: "/assets/accolades-cupd-contingent.png",
        alt: "RVCE DebSoc contingent at CUPD 2026",
      },
      {
        src: "/assets/accolades-cupd-open-break.png",
        alt: "RVCE DebSoc open break team at CUPD 2026",
      },
    ],
  },
  {
    id: "cupd-adjudication-break",
    index: "04",
    category: "Recent",
    period: "2026",
    title: "CUPD 2026",
    result: "Adjudication breaks",
    summary: "Navya and Umaid broke as adjudicators at CUPD 2026.",
    detail: "Navya broke as a novice quarters chair and open semi panellist, while Umaid broke as a novice semi panellist.",
    images: [
      {
        src: "/assets/accolades-cupd-adj-break.png",
        alt: "CUPD 2026 adjudication breaks featuring Navya and Umaid",
      },
    ],
  },
];

function AchievementCard({ achievement, onOpen }: { achievement: Achievement; onOpen: (achievement: Achievement) => void }) {
  return (
    <button className="achievement-card" type="button" onClick={() => onOpen(achievement)}>
      <span className="achievement-card-topline"><span>{achievement.index}</span><span>{achievement.period}</span></span>
      <span className="achievement-card-category">{achievement.category}</span>
      <h3>{achievement.title}</h3>
      <strong>{achievement.result}</strong>
      <span className="achievement-card-summary">{achievement.summary}</span>
      <span className="achievement-card-cta">VIEW DETAILS <ArrowUpRight size={15} /></span>
    </button>
  );
}

export default function Accolades() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    if (!selectedAchievement) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedAchievement(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedAchievement]);

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
        <div className="achievement-group">
          <div className="achievement-group-heading"><span>01</span><strong>International</strong><p>Results beyond the national circuit.</p></div>
          <div className="achievement-grid">
            {achievements.filter((achievement) => achievement.category === "International").map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} onOpen={setSelectedAchievement} />
            ))}
          </div>
        </div>
        <div className="achievement-group">
          <div className="achievement-group-heading"><span>02</span><strong>National</strong><p>Consistency across India’s strongest rooms.</p></div>
          <div className="achievement-grid">
            {achievements.filter((achievement) => achievement.category === "National").map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} onOpen={setSelectedAchievement} />
            ))}
          </div>
        </div>
      </section>
      <section className="recent-achievements scroll-reveal" aria-labelledby="recent-achievements-heading">
        <p className="section-index">RECENT SOC ACHIEVEMENTS</p>
        <h2 id="recent-achievements-heading">Recent Soc<br /><em>Achievements.</em></h2>
        <p className="recent-summary">The latest results across the society’s competitive season: a Yadalam Debate win, a Vimarsha runner-up, a CUPD contingent break, and CUPD adjudication breaks.</p>
        <div className="recent-achievements-grid">
          {recentAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} onOpen={setSelectedAchievement} />
          ))}
        </div>
      </section>
      {selectedAchievement && (
        <div className="achievement-detail-backdrop" role="presentation" onClick={() => setSelectedAchievement(null)}>
          <section className={`achievement-detail${selectedAchievement.images.length === 0 ? " achievement-detail-no-images" : ""}`} role="dialog" aria-modal="true" aria-labelledby="achievement-detail-heading" onClick={(event) => event.stopPropagation()}>
            <button className="achievement-detail-close" type="button" onClick={() => setSelectedAchievement(null)} aria-label="Close achievement details">CLOSE <X size={16} /></button>
            <div className="achievement-detail-copy">
              <p className="section-index">{selectedAchievement.category} / {selectedAchievement.period}</p>
              <h2 id="achievement-detail-heading">{selectedAchievement.title}</h2>
              <strong>{selectedAchievement.result}</strong>
              <p>{selectedAchievement.summary}</p>
              <p>{selectedAchievement.detail}</p>
            </div>
            {selectedAchievement.images.length > 0 && (
              <div className="achievement-detail-images">
                {selectedAchievement.images.map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} />
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
