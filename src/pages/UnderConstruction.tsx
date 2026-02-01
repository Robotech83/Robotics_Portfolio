// src/pages/UnderConstruction.tsx
// Generic "Under Construction" page for unfinished modules

import { useNavigate } from "react-router-dom";
import "../styles/underconstruction.css";

type Props = {
  title?: string;
  description?: string;
  status?: string[];
};

export default function UnderConstruction({
  title = "Module Under Construction",
  description = "This module is actively being developed and will be available soon.",
  status = [],
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="uc-page">
      <button className="back-btn-top" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="uc-panel neon-panel">
        <div className="uc-terminal">
          <span className="prompt">&gt;</span> cd ~/robotics
        </div>

        <h1 className="uc-title">{title}</h1>
        <p className="uc-description">{description}</p>

        {status.length > 0 && (
          <div className="uc-status">
            <div className="uc-status-title">
              <span className="prompt">&gt;</span> current_status
            </div>

            <ul>
              {status.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="uc-footer">
          <span className="prompt">&gt;</span> status:
          <span className="uc-active"> ACTIVE DEVELOPMENT</span>
        </div>
      </div>
    </div>
  );
}
