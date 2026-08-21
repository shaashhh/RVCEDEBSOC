/**
 * RVCE DebSoc design reminder: The Institutional Seal — debate formats are taught with one
 * immersive visual diagram at a time, with the speech order revealed through the visitor’s scroll.
 */
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { DebateSimulation, type Speaker } from "@/components/DebateSimulation";
import { PageChrome } from "@/components/PageChrome";

type DebateFormatProps = { format: "BP" | "AP" };

const BP_SPEAKERS: Speaker[] = [
  { order: "01", code: "PM", role: "Prime Minister", bench: "Opening Government", examplePoint: "Defines the civic-semester policy and argues that practical public work belongs in a complete university education." },
  { order: "02", code: "LO", role: "Leader of Opposition", bench: "Opening Opposition", examplePoint: "Challenges compulsion and offers a voluntary route that protects student choice without weakening service." },
  { order: "03", code: "DPM", role: "Deputy Prime Minister", bench: "Opening Government", examplePoint: "Explains implementation: university partnerships, support for students, and why the policy is achievable." },
  { order: "04", code: "DLO", role: "Deputy Leader", bench: "Opening Opposition", examplePoint: "Tests whether an unequal system can fairly demand more unpaid time from every student." },
  { order: "05", code: "MG", role: "Member of Government", bench: "Closing Government", examplePoint: "Extends the case through long-term civic confidence and the habits students carry beyond campus." },
  { order: "06", code: "MO", role: "Member of Opposition", bench: "Closing Opposition", examplePoint: "Shows the comparative harm: prescribed service can displace the most meaningful forms of independent action." },
  { order: "07", code: "GW", role: "Government Whip", bench: "Closing Government", examplePoint: "Weighs the round: why a shared civic experience produces the broader public good." },
  { order: "08", code: "OW", role: "Opposition Whip", bench: "Closing Opposition", examplePoint: "Crystallises the opposition case around agency, fairness, and the practical cost of compulsion." },
];

const AP_SPEAKERS: Speaker[] = [
  { order: "01", code: "PM", role: "Prime Minister", bench: "Government / 7.5 min", examplePoint: "Sets the policy, defines the civic semester, and makes the first case for compulsory public-service learning." },
  { order: "02", code: "LO", role: "Leader of Opposition", bench: "Opposition / 7.5 min", examplePoint: "Answers the government case and frames a voluntary programme as more equitable and more credible." },
  { order: "03", code: "DPM", role: "Deputy Prime Minister", bench: "Government / 7.5 min", examplePoint: "Rebuilds the model, explains access safeguards, and develops the social impact of shared responsibility." },
  { order: "04", code: "DLO", role: "Deputy Leader", bench: "Opposition / 7.5 min", examplePoint: "Tests the mechanism against student workload, inequality, and the risk of hollow participation." },
  { order: "05", code: "GW", role: "Government Whip", bench: "Government / 7.5 min", examplePoint: "Compares the round and shows why the government’s vision creates stronger civic participation over time." },
  { order: "06", code: "OW", role: "Opposition Whip", bench: "Opposition / 7.5 min", examplePoint: "Closes on the opposition’s core weighing: voluntary commitment is more durable than forced participation." },
];

export default function DebateFormat({ format }: DebateFormatProps) {
  const isBP = format === "BP";
  const speakers = isBP ? BP_SPEAKERS : AP_SPEAKERS;
  const title = isBP ? <>British<br /><em>Parliamentary</em></> : <>Asian<br /><em>Parliamentary</em></>;
  const description = isBP
    ? "Four benches take the floor. The case moves from opening to closing, one speech at a time."
    : "Six main constructive speeches build and contest the case, followed by two reply speeches that crystallise the round.";
  const exampleMotion = "This House Would require all university students to complete a civic semester before graduation.";
  const replySpeechNote = isBP
    ? undefined
    : "Opposition Reply is delivered by the LO or DLO; Government Reply is delivered by the PM or DPM.";

  return (
    <main className={`window-page format-window ${isBP ? "bp-window" : "ap-window"}`}>
      <PageChrome label={format} section="04" />
      <section className="format-opening">
        <div>
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
      </section>
      <nav className="format-switch" aria-label="Choose debate format">
        <Link href="/formats/bp" className={isBP ? "is-current" : ""}>BRITISH PARLIAMENTARY <ArrowUpRight size={14} /></Link>
        <Link href="/formats/ap" className={!isBP ? "is-current" : ""}>ASIAN PARLIAMENTARY <ArrowUpRight size={14} /></Link>
      </nav>
      <DebateSimulation format={format} speakers={speakers} exampleMotion={exampleMotion} replySpeechNote={replySpeechNote} />
      <section className="format-closing" aria-label="Debate format note">
        <p className="section-index">THE FLOOR</p>
        <h2>Order creates<br /><em>the argument.</em></h2>
        <p>Each speech meets the work already done in the room, then gives the next speaker something stronger to answer.</p>
      </section>
    </main>
  );
}
