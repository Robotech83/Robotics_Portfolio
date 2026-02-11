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
  {
    title: "Portfolio Cleanup -Routing & Structure",
    goal: "Improve project organization and routing for better scalability.",
    issue: "pages, routes, and links were scattered, making it hard to track what linked where.",
    outcome: "Intrroduced clearer folder structure, centralized routes, and cleaned up navigation links.",
    takeaway: "A well-organized project structure simplifies future development and maintenance.",
},
{
  title: "Control Hub Refactor — Routing Breakage Investigation",
  goal: "Refactor Control Hub modules and temporarily route unstable pages to Under Construction.",
  issue: "After refactor and GitHub Pages deploy, several modules stopped working due to route mismatches.",
  outcome: "Identified case-sensitive path mismatch between Control Hub links and App.tsx routes; Robot Studio and Object Scanner were isolated successfully, but AI Assistant route still failing.",
  takeaway: "In React Router, paths must match exactly (case + spelling), and routing bugs can persist across deploys.",
},
{
  title: "Desk Robot Companion — Platform Planning + Scope Reset",
  goal: "Define a desk-scale robot head to serve as a low-risk test platform for behaviors, expressions, and future voice control before deploying to my full-size humanoid robot.",
  issue: "Scope expanded too quickly into tooling (PlatformIO), repo structure, and long-term architecture, leading to cognitive overload and no physical build progress.",
  outcome: "Locked core decisions (ESP32 Wroom-32, PCA9685, cardboard head, eye + jaw servos), created a GitHub plan, selected VS Code + PlatformIO, and intentionally stopped before burnout.",
  takeaway: "Planning is progress, but mechanical build must come first; future sessions should prioritize physical milestones before software or tooling."
},
{
  title: "Desk Robot Companion — Energy Check + Momentum Reset",
  goal: "Make forward progress without forcing a full build while energy was low.",
  issue: "Mental fatigue blocked physical construction despite having a clear plan.",
  outcome: "Shifted focus to documentation and dev logging, clarified next minimal action, and deferred building to avoid burnout.",
  takeaway: "Sustainable progress in robotics requires respecting energy limits and breaking work into truly minimal steps."
},
{
  title: "Arduino Skills Assessment — Baseline + Study Targets",
  goal: "Benchmark my Arduino fundamentals and identify embedded topics to focus on next.",
  issue: "Several intermediate/advanced questions exposed gaps in timing behavior, memory types, and interrupt limitations.",
  outcome: "Completed Fundamentals (1–15) and started Intermediate/Advanced; answered only what I was confident in and left unknowns blank to keep the baseline honest.",
  takeaway: "I’m strong on basic Arduino usage; next growth is embedded thinking (non-blocking timing, PWM/timers, interrupts, SRAM/Flash/EEPROM).",
},
{
  title: "Python Fundamentals — W3Schools Quiz Baseline",
  goal: "Establish a baseline for Python fundamentals before deeper scripting and robotics integration.",
  issue: "Missed several questions related to string methods, comparison operators, and collection definitions (tuple/set/dict distinctions).",
  outcome: "Scored 17/25 (68%) on the W3Schools Python Quiz, confirming solid syntax basics with gaps in standard library usage and data structures.",
  takeaway: "Python fundamentals are serviceable; next improvement comes from practicing core data structures and common string/logic patterns.",
},
{
  title: "Project Status — Energy Reset + Platform Pivot",
  goal: "Maintain forward momentum in robotics projects while respecting physical energy limits.",
  issue: "Super Bowl Sunday combined with low energy from starting my cycle resulted in no build progress on the desk robot project.",
  outcome: "Intentionally rested and decided to pivot short-term focus to an existing robotics car project using an ultrasonic sensor as ‘eyes’ for interaction and obstacle detection.",
  takeaway: "Progress isn’t linear; choosing a project that matches current energy and readiness is better than forcing unfinished work."
}




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
