// Dashboard.tsx
import { Link } from "react-router-dom";
import { Cpu, Mic, Zap, Network } from "lucide-react";
import "../styles/dashboard.css";

export default function Dashboard() {
  const modules = [
    {
      name: "Movement Module",
      icon: <Cpu size={28} />,
      path: "/movement-module",
    },
    {
      name: "Voice Module",
      icon: <Mic size={28} />,
      path: "/voice-module",
    },
    {
      name: "Power System",
      icon: <Zap size={28} />,
      path: "/power-module",
    },
    {
      name: "Network System",
      icon: <Network size={28} />,
      path: "/network-module",
    },
  ];

  return (
    <section className="dashboard-section neon-border">
      <h2 className="section-title rgb-gradient">Robot Control Dashboard</h2>

      <div className="modules-grid">
        {modules.map((mod) => (
          <Link
            to={mod.path}
            key={mod.name}
            className="module-card"
          >
            <div className="module-icon">{mod.icon}</div>
            <h3>{mod.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
