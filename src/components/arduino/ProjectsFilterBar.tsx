import type { export FilterValue } from "./types/arduino";

type Props = {
  filter: FilterValue;
  onChange: (next: FilterValue) => void;
  hint?: string;
};

export function ProjectsFilterBar({ filter, onChange, hint }: Props) {
  return (
    <section className="arduino-controls neon-panel">
      <div className="controls-row">
        <span className="terminal-prompt">&gt;</span>
        <span className="controls-label">filter:</span>

        <div className="filter-group">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => onChange("all")}
            type="button"
          >
            All
          </button>

          <button
            className={`filter-btn ${filter === "featured" ? "active" : ""}`}
            onClick={() => onChange("featured")}
            type="button"
          >
            Featured
          </button>

          <button
            className={`filter-btn ${filter === "in-progress" ? "active" : ""}`}
            onClick={() => onChange("in-progress")}
            type="button"
          >
            In Progress
          </button>

          <button
            className={`filter-btn ${filter === "completed" ? "active" : ""}`}
            onClick={() => onChange("completed")}
            type="button"
          >
            Completed
          </button>
        </div>
      </div>

      {hint ? <p className="controls-hint">{hint}</p> : null}
    </section>
  );
}
