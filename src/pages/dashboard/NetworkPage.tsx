// pages/NetworkModule.tsx
import { useNavigate } from "react-router-dom";
//import "../styles/network.css";

export default function NetworkModule() {
  const navigate = useNavigate();

  return (
    <div className="module-page neon-border">
      <button className="back-btn" onClick={() => navigate("/control-hub")}>
        ← Back
      </button>

      <h1 className="module-title rgb-gradient">Network System</h1>
      <p className="module-desc">
        This section will include WiFi diagnostics, robot communication checks,
        Pi–Arduino link testing, and network tools.
      </p>
    </div>
  );
}
