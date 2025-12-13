// pages/PowerModule.tsx
import { useNavigate } from "react-router-dom";
//import "../styles/power.css";

export default function PowerModule() {
  const navigate = useNavigate();

  return (
    <div className="module-page neon-border">
      <button className="back-btn" onClick={() => navigate("/control-hub")}>
        ← Back
      </button>

      <h1 className="module-title rgb-gradient">Power Management System</h1>
      <p className="module-desc">
        Battery monitoring, voltage flow, servo consumption stats,
        and future power-routing logic will go here.
      </p>
    </div>
  );
}
