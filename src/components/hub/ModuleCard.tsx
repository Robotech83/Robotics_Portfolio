import { Link } from "react-router-dom";
import type { HubModule } from "./types/hub";
import { StatusPill } from "./ui/StatusPill";

type Props = {
  module: HubModule;
};

export function ModuleCard({ module: m }: Props) {
  return (
    <Link to={m.to} className="module-card neon-panel">
      <div className="module-top">
        <div className="module-icon">
          <m.Icon size={22} />
        </div>

        {m.status ? <StatusPill status={m.status} /> : null}
      </div>

      <h2 className="module-title">{m.title}</h2>
      <p className="module-subtitle">{m.subtitle}</p>

      <div className="module-footer">
        <span className="prompt">&gt;</span> open
      </div>
    </Link>
  );
}
