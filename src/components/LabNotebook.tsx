// src/components/LabNotebook.tsx
// Robotics Lab Notebook section
// Purpose: show short, structured "engineering log" entries on the homepage.

import "../styles/labnotebook.css";

type LabEntry = {
  title: string;
  goal: string;
  issue: string;
  outcome: string;
  takeaway: string;
};

export function LabNotebook() {
  // Keep entries short + skimmable (homepage-friendly).
  // You can add more later without changing the layout.
  const entries: LabEntry[] = [
    {
      title: "Virtual Robot Arm — Forward Kinematics",
      goal: "Build a 5-DOF virtual arm using nested transforms.",
      issue: "Adding wrist joints caused collapse/disappearing geometry.",
      outcome: "Rebuilt one joint at a time with primitives to verify hierarchy.",
      takeaway: "FK depends on transform order as much as math.",
    },
    {
      title: "Skills Section — Navigation Redesign",
      goal: "Make Skills clearer without bloating the homepage.",
      issue: "Too much embedded content created clutter/confusion.",
      outcome: "Converted Skills into navigation launchers for dedicated pages.",
      takeaway: "Good UX often means moving detail out, not adding more.",
    },
    {
      title: "JavaScript Projects — Documentation Cleanup",
      goal: "Make vanilla JS projects look intentional + professional.",
      issue: "Inconsistent/minimal READMEs weakened project presentation.",
      outcome: "Standardized READMEs and added clear demo + repo links.",
      takeaway: "Documentation can level up a project instantly.",
    },
  ];

  return (
    <section className="lab-section" id="lab">
      <div className="lab-header">
        <h2 className="lab-title">Robotics Lab Notebook</h2>
        <p className="lab-subtitle">
          Short experiment logs — what I tried, what broke, what I learned.
        </p>
      </div>

      <div className="lab-panel neon-border">
        <div className="lab-panel-topbar">
          <span className="lab-dot red" />
          <span className="lab-dot yellow" />
          <span className="lab-dot green" />
          <span className="lab-path">~/robotics/lab-notebook</span>
        </div>

        <div className="lab-entries">
          {entries.map((e) => (
            <article key={e.title} className="lab-entry">
              <div className="lab-entry-title">
                <span className="prompt">&gt;</span> {e.title}
              </div>

              <div className="lab-entry-grid">
                <div className="lab-row">
                  <span className="lab-label">GOAL</span>
                  <span className="lab-value">{e.goal}</span>
                </div>

                <div className="lab-row">
                  <span className="lab-label warn">ISSUE</span>
                  <span className="lab-value">{e.issue}</span>
                </div>

                <div className="lab-row">
                  <span className="lab-label ok">OUTCOME</span>
                  <span className="lab-value">{e.outcome}</span>
                </div>

                <div className="lab-row">
                  <span className="lab-label tip">TAKEAWAY</span>
                  <span className="lab-value">{e.takeaway}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="lab-footer">
          <span className="prompt">&gt;</span> status:{" "}
          <span className="lab-status">ACTIVE</span>{" "}
          <span className="lab-muted">(adding entries weekly)</span>
        </div>
      </div>
    </section>
  );
}
