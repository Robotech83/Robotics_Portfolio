import type { LabEntry } from "./types";
import LabTopbar from "./LabTopbar";
import LabEntryCard from "./LabEntryCard";

type Props = {
  entries: LabEntry[];
};

export default function LabPanel({ entries }: Props) {
  return (
    <div className="lab-panel neon-border">
      <LabTopbar />

      <div className="lab-entries">
        {[...entries].reverse().map((e) => (
  <LabEntryCard key={e.title} entry={e} />
))}
      </div>

      <div className="lab-footer">
        <span className="prompt">&gt;</span> status:{" "}
        <span className="lab-status">ACTIVE</span>{" "}
        <span className="lab-muted">(adding entries daily)</span>
      </div>
    </div>
  );
}
