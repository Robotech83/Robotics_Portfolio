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
    {
  title: "Arduino Projects Page — Initial Setup",
  goal: "Create a dedicated page to showcase Arduino and hardware projects.",
  issue: "Hardware projects did not fit well within general portfolio sections.",
  outcome: "Built a new Arduino Projects page with structured cards, status indicators, and room for wiring images and demos.",
  takeaway: "Dedicated pages make hardware work clearer and more credible.",
},

    {
  title: "JavaScript Projects Page — Component Refactor",
  goal: "Refactor JSProjectsPage into reusable components without changing the UI.",
  issue: "Single-file page mixed data, layout, and card rendering (hard to maintain/extend).",
  outcome: "Split into header/grid/card/actions/tags/footer components + moved data/types into dedicated files.",
  takeaway: "Consistent page architecture makes adding new projects faster and safer.",
},
  {
  title: "Arduino Projects Page — Component Split + TS Fix",
  goal: "Break ArduinoProjectsPage into components and make it scalable for more hardware projects.",
  issue: "Build failed due to importing FilterValue from a component instead of the shared types file.",
  outcome: "Moved projects into data/, centralized types/, created card/grid/filter components, and fixed imports to use types/arduino.",
  takeaway: "Import types from the types folder, not component files (prevents TS export errors).",
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
