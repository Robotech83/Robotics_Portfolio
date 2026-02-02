// src/pages/ControlHub.tsx
// Purpose: Main "Control Hub" landing page for your robotics modules.
// - Clean card grid
// - Each card is a single clickable link (no extra "Open" buttons)
// - Unfinished modules should route to your UnderConstruction page route(s)

import { Link, useNavigate } from "react-router-dom";
import {
  Bot,
  Cpu,
  Eye,
  Mic,
  Power,
  Wifi,
  ScanSearch,
  Gamepad2,
} from "lucide-react";

import "../styles/controlhub.css";

type HubModule = {
  id: string;
  title: string;
  subtitle: string;
  to: string; // router path
  Icon: React.ComponentType<{ size?: number }>;
  status?: "LIVE" | "IN PROGRESS";
};

export default function ControlHub() {
  const navigate = useNavigate();

  // ✅ Edit these paths to match YOUR App.tsx routes
  const modules: HubModule[] = [
    {
      id: "robot-studio",
      title: "Robot Studio",
      subtitle: "Virtual model + movement controls",
      to: "/robotstudio", // should render UnderConstruction for now
      Icon: Gamepad2,
      status: "IN PROGRESS",
    },
    {
      id: "voice-module",
      title: "Voice Module",
      subtitle: "Wake word • TTS • Commands • AI Assistant",
      to: "/voice", // or "/ai-assistant" if that’s your page
      Icon: Mic,
      status: "LIVE",
    },
    {
      id: "ai-assistant",
      title: "AI Assistant",
      subtitle: "Text + voice demo with personalities",
      to: "/ai-assistant",
      Icon: Bot,
      status: "LIVE",
    },
    {
      id: "vision",
      title: "Vision System",
      subtitle: "Camera + detection experiments",
      to: "/vision", // can be UnderConstruction if not ready
      Icon: Eye,
      status: "IN PROGRESS",
    },
    {
      id: "object-scanner",
      title: "Object Scanner",
      subtitle: "Kitchen + clothing detection (demo)",
      to: "/object-scanner", // can be UnderConstruction if not ready
      Icon: ScanSearch,
      status: "IN PROGRESS",
    },
    {
      id: "power",
      title: "Power System",
      subtitle: "Battery • regulators • wiring docs",
      to: "/power", // placeholder page or UnderConstruction
      Icon: Power,
      status: "IN PROGRESS",
    },
    {
      id: "network",
      title: "Network System",
      subtitle: "ESP32 • Pi comms • protocols",
      to: "/network", // placeholder page or UnderConstruction
      Icon: Wifi,
      status: "IN PROGRESS",
    },
    {
      id: "firmware",
      title: "Firmware Tools",
      subtitle: "Arduino / ESP32 utilities & logs",
      to: "/firmware", // optional
      Icon: Cpu,
      status: "IN PROGRESS",
    },
  ];

  return (
    <div className="controlhub-page">
      {/* Back Button (goes home) */}
      <button className="back-btn-top" onClick={() => navigate("/")}>
        ← Back
      </button>

      {/* Header */}
      <header className="controlhub-header neon-panel">
        <div className="terminal-line">
          <span className="prompt">&gt;</span> boot --control-hub
        </div>

        <h1 className="controlhub-title">Control Hub</h1>
        <p className="controlhub-subtitle">
          Navigate your robotics modules. Live demos stay live. Unfinished modules route to
          “Under Construction” so your site never looks broken.
        </p>
      </header>

      {/* Grid of modules */}
      <section className="controlhub-grid">
        {modules.map((m) => (
          <Link key={m.id} to={m.to} className="module-card neon-panel">
            <div className="module-top">
              <div className="module-icon">
                <m.Icon size={22} />
              </div>

              {m.status && (
                <span className={`status-pill ${m.status === "LIVE" ? "live" : "progress"}`}>
                  {m.status}
                </span>
              )}
            </div>

            <h2 className="module-title">{m.title}</h2>
            <p className="module-subtitle">{m.subtitle}</p>

            <div className="module-footer">
              <span className="prompt">&gt;</span> open
            </div>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="controlhub-footer neon-panel">
        <div className="terminal-line">
          <span className="prompt">&gt;</span> tip: keep “in progress” modules on UnderConstruction
          pages until stable for GitHub Pages.
        </div>
      </footer>
    </div>
  );
}
