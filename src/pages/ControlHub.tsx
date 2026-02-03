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
        subtitle='Navigate robotics modules. Live demos stay live. 
        Unstable modules route to "Under Construction" pages.'
      />

      <ModuleGrid modules={hubModules} />

      <HubFooter tip='tip: Keep pushing progress. This is a work in progress, and that’s okay!' />
    </div>
  );
}
