import React from "react";
import "./sonnyBriefing.css";

type StatusItem = {
  label: string;
  value: string;
};

const SonnyBriefing: React.FC = () => {
  const aiBriefing: string[] = [
    "New lightweight speech model released",
    "OpenCV tracking improvement spotted",
    "Offline assistant optimization tip",
  ];

  const sonnyStatus: StatusItem[] = [
    { label: "Face Recognition", value: "❌ Not triggering after chat.py" },
    { label: "Voice System", value: "✅ Working" },
    { label: "Memory Recall", value: "⚠️ Needs testing" },
  ];

  const mission: string =
    "Fix face recognition trigger after voice interaction";

  return (
    <div className="briefing-container">
      <h1 className="briefing-title">Sonny Daily Briefing</h1>

      <div className="briefing-grid">
        {/* AI Briefing */}
        <div className="briefing-card">
          <h2>🧠 AI Briefing</h2>
          <ul>
            {aiBriefing.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Sonny Status */}
        <div className="briefing-card">
          <h2>🤖 Sonny Status</h2>
          <ul>
            {sonnyStatus.map((status, index) => (
              <li key={index}>
                <strong>{status.label}:</strong> {status.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission */}
        <div className="briefing-card highlight">
          <h2>🎯 Today’s Mission</h2>
          <p>{mission}</p>
        </div>
      </div>
    </div>
  );
};

export default SonnyBriefing;