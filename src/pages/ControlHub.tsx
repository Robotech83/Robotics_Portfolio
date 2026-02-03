import { useNavigate } from "react-router-dom";
import "../styles/controlhub.css";

import { hubModules } from "../components/hub/data/hubModules";
import { HubHeader } from "../components/hub/HubHeader";
import { ModuleGrid } from "../components/hub/ModuleGrid";
import { HubFooter } from "../components/hub/HubFooter";

export default function ControlHub() {
  const navigate = useNavigate();

  return (
    <div className="controlhub-page">
      <button className="back-btn-top" onClick={() => navigate("/")}>
        ← Back
      </button>

      <HubHeader
        title="Control Hub"
        subtitle='Navigate your robotics modules. Live demos stay live. Unfinished modules route to “Under Construction” so your site never looks broken.'
      />

      <ModuleGrid modules={hubModules} />

      <HubFooter tip='tip: keep “in progress” modules on UnderConstruction pages until stable for GitHub Pages.' />
    </div>
  );
}
