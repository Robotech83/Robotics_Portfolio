import type { LabEntry } from "./types";

type Props = {
  entry: LabEntry;
};

export default function LabEntryCard({ entry }: Props) {
  return (
    <article className="lab-entry">
      <div className="lab-entry-title">
        <span className="prompt">&gt;</span> {entry.title}
      </div>

      <div className="lab-entry-grid">
        <div className="lab-row">
          <span className="lab-label">GOAL</span>
          <span className="lab-value">{entry.goal}</span>
        </div>

        <div className="lab-row">
          <span className="lab-label warn">ISSUE</span>
          <span className="lab-value">{entry.issue}</span>
        </div>

        <div className="lab-row">
          <span className="lab-label ok">OUTCOME</span>
          <span className="lab-value">{entry.outcome}</span>
        </div>

        <div className="lab-row">
          <span className="lab-label tip">TAKEAWAY</span>
          <span className="lab-value">{entry.takeaway}</span>
        </div>
      </div>
    </article>
  );
}
