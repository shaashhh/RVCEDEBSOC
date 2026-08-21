/**
 * RVCE DebSoc design reminder: The Institutional Seal — the simulation behaves as an
 * editorial diagram: one speaker at a time, a precise flowing route, and no dashboard clutter.
 */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type Speaker = {
  order: string;
  code: string;
  role: string;
  bench: string;
  examplePoint: string;
};

type DebateSimulationProps = {
  format: "BP" | "AP";
  speakers: Speaker[];
  exampleMotion: string;
  replySpeechNote?: string;
};

const routePointsEight = [
  { x: 12, y: 28 },
  { x: 37, y: 28 },
  { x: 62, y: 28 },
  { x: 87, y: 28 },
  { x: 12, y: 72 },
  { x: 37, y: 72 },
  { x: 62, y: 72 },
  { x: 87, y: 72 },
];

const routePointsSix = [
  { x: 14, y: 28 },
  { x: 50, y: 28 },
  { x: 86, y: 28 },
  { x: 14, y: 72 },
  { x: 50, y: 72 },
  { x: 86, y: 72 },
];

export function DebateSimulation({ format, speakers, exampleMotion, replySpeechNote }: DebateSimulationProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentSpeaker = speakers[activeStep];
  const isSixSpeakerFormat = speakers.length === 6;
  const routePoints = isSixSpeakerFormat ? routePointsSix : routePointsEight;
  const routePath = isSixSpeakerFormat
    ? "M 14 28 H 50 H 86 L 14 72 H 50 H 86"
    : "M 12 28 H 37 H 62 H 87 L 12 72 H 37 H 62 H 87";

  useEffect(() => {
    const updateSequence = () => {
      const section = sectionRef.current;
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(1, Math.max(0, -bounds.top / travel));
      setProgress(nextProgress);
      setActiveStep(Math.min(speakers.length - 1, Math.floor(nextProgress * speakers.length)));
    };

    updateSequence();
    window.addEventListener("scroll", updateSequence, { passive: true });
    window.addEventListener("resize", updateSequence);
    return () => {
      window.removeEventListener("scroll", updateSequence);
      window.removeEventListener("resize", updateSequence);
    };
  }, [speakers.length]);

  return (
    <section className="simulation-scroll" ref={sectionRef} aria-labelledby={`${format.toLowerCase()}-simulation-title`}>
      <div className="simulation-sticky">
        <div className="simulation-topline">
          <div>
            <h2 id={`${format.toLowerCase()}-simulation-title`}>Follow the floor.</h2>
          </div>
        </div>

        <div className="sequence-status" aria-live="polite">
          <span>NOW SPEAKING</span>
          <strong>{currentSpeaker.order} / {currentSpeaker.role}</strong>
          <span>{currentSpeaker.bench}</span>
        </div>

        <div className="example-motion" aria-label="Illustrative debate motion">
          <span>EXAMPLE MOTION</span>
          <p>{exampleMotion}</p>
        </div>

        <div className={`speaker-map ${isSixSpeakerFormat ? "is-six" : ""}`} style={{ "--sequence-progress": progress } as React.CSSProperties}>
          <svg className="speaker-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path className="connection-line" d="M 12 28 H 37 H 62 H 87" />
            <path className="connection-line" d="M 87 28 L 12 72" />
            <path className="connection-line" d="M 12 72 H 37 H 62 H 87" />
            <motion.path className="connection-route" d={routePath} initial={false} animate={{ pathLength: (activeStep + 0.6) / speakers.length }} transition={{ duration: 0.62, ease: [0.23, 1, 0.32, 1] }} />
            <motion.circle
              className="sequence-dot"
              r="1.25"
              initial={false}
              animate={routePoints[activeStep]}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>
          <div className="speaker-grid">
            {speakers.map((speaker, index) => (
              <article className={`sim-speaker ${index === activeStep ? "is-active" : ""} ${index < activeStep ? "is-spoken" : ""}`} key={speaker.order}>
                <span className="speaker-number">{speaker.order}</span>
                <strong>{speaker.code}</strong>
                <span className="speaker-role">{speaker.role}</span>
                <span className="speaker-bench">{speaker.bench}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="speaker-annotation" aria-live="polite">
          <span>KEY ROLE / {currentSpeaker.code}</span>
          <p>{currentSpeaker.examplePoint}</p>
        </div>
        {replySpeechNote ? <p className="reply-speech-note"><span>REPLY SPEECHES / 4 MINUTES</span>{replySpeechNote}</p> : null}

      </div>
    </section>
  );
}
