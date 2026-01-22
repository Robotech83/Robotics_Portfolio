/**
 * Skills.tsx
 * ----------
 * This component renders the "Skills Console" section of the portfolio.
 *
 * Behavior:
 * - Displays a list of skills as tabs (left side)
 * - Displays details for the selected skill (right side)
 * - SPECIAL CASE:
 *     When "JavaScript" is clicked, we open a full-screen
 *     overlay ("scene") that showcases vanilla JavaScript projects.
 *
 * Why this design:
 * - Separates JavaScript fundamentals from React
 * - Allows deeper project showcasing without cluttering the main UI
 * - Mimics a robotics / software "console" experience
 */

import { useMemo, useState } from "react";
import "../styles/skills.css";

// Overlay scene for JavaScript projects
import JavaScriptProjectsScene from "./JavaScriptProjectsScene";

/* -----------------------------
   Types
------------------------------ */

// Skill proficiency levels (used for badges)
type SkillLevel = "Strong" | "Good" | "Learning";

// Structure of a single skill entry
type Skill = {
  key: string;                 // Display name (and identifier)
  level: SkillLevel;           // Proficiency badge
  tagline: string;             // Short description
  whatIDo: string[];           // Bullet list of practical usage
  tools: string[];             // Tools / concepts associated with the skill
};

/* -----------------------------
   Skill Data
------------------------------ */

const SKILLS: Skill[] = [
  {
    key: "Python",
    level: "Strong",
    tagline: "Robotics scripts, automation, and vision glue.",
    whatIDo: [
      "Serial communication with microcontrollers",
      "Automation scripts for robotics workflows",
      "Computer vision glue code"
    ],
    tools: ["OpenCV (basic)", "PySerial", "Linux tooling"]
  },
  {
    key: "Linux",
    level: "Good",
    tagline: "Terminal-first development and debugging.",
    whatIDo: [
      "Working with services and logs",
      "SSH and networking basics",
      "Permissions and file systems"
    ],
    tools: ["SSH", "system tools", "bash"]
  },
  {
    key: "Bash",
    level: "Good",
    tagline: "Fast automation and workflow helpers.",
    whatIDo: [
      "Build/run scripts",
      "Project cleanup",
      "Git helpers"
    ],
    tools: ["bash", "git", "node tooling"]
  },
  {
    key: "JavaScript",
    level: "Good",
    tagline: "Core JavaScript for logic, math, and browser APIs.",
    whatIDo: [
      "DOM manipulation without frameworks",
      "Canvas-based visualizations",
      "Event-driven logic",
      "Game and UI logic"
    ],
    tools: [
      "ES6+",
      "DOM API",
      "Canvas API",
      "Event listeners"
    ]
  },
  {
    key: "Arduino",
    level: "Good",
    tagline: "Hardware prototyping and servo control.",
    whatIDo: [
      "PWM servo control",
      "Serial protocols",
      "Rapid hardware testing"
    ],
    tools: ["Arduino Mega", "Servo libraries", "Serial comms"]
  },
  {
    key: "React",
    level: "Good",
    tagline: "Dashboards and control panels for robotics tools.",
    whatIDo: [
      "Component-based UI",
      "State-driven controls",
      "Routing and module pages"
    ],
    tools: ["React", "TypeScript", "React Router"]
  },
  {
    key: "Robotics",
    level: "Learning",
    tagline: "Kinematics, motion control, and system design.",
    whatIDo: [
      "Forward kinematics intuition",
      "IK goals (next)",
      "Robot control UI thinking"
    ],
    tools: ["InMoov", "Servos", "Sensors"]
  },
  {
    key: "Machine Vision",
    level: "Learning",
    tagline: "Face tracking and object detection experiments.",
    whatIDo: [
      "Camera pipelines",
      "Detection and labeling",
      "Performance tradeoffs"
    ],
    tools: ["OpenCV basics", "Webcam pipelines"]
  }
];

/* -----------------------------
   Component
------------------------------ */

export function Skills() {
  // Currently selected skill tab
  const [activeKey, setActiveKey] = useState(SKILLS[0].key);

  // Controls visibility of the JavaScript overlay scene
  const [jsSceneOpen, setJsSceneOpen] = useState(false);

  /**
   * Memoized lookup of the active skill.
   * This avoids re-scanning the array on every render.
   */
  const activeSkill = useMemo(
    () => SKILLS.find((s) => s.key === activeKey) ?? SKILLS[0],
    [activeKey]
  );

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title rgb-gradient">Skills Console</h2>
      <p className="skills-subtitle">
        Click a skill to see how I use it in robotics and software projects.
      </p>

      <div className="skills-grid">
        {/* ======================
            LEFT: Skill Tabs
           ====================== */}
        <div className="skills-tabs neon-border">
          {SKILLS.map((skill) => (
            <button
              key={skill.key}
              type="button"
              className={`skill-tab ${activeKey === skill.key ? "active" : ""}`}
              onClick={() => {
                setActiveKey(skill.key);

                // SPECIAL CASE:
                // Clicking "JavaScript" opens the project showcase scene
                if (skill.key === "JavaScript") {
                  setJsSceneOpen(true);
                }
              }}
            >
              <span className="skill-name">{skill.key}</span>
              <span className={`skill-badge badge-${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
            </button>
          ))}
        </div>

        {/* ======================
            RIGHT: Skill Details
           ====================== */}
        <div className="skills-panel neon-border">
          <div className="panel-top">
            <div>
              <h3 className="panel-title">{activeSkill.key}</h3>
              <div className="panel-tagline">{activeSkill.tagline}</div>
            </div>

            <div className={`panel-level badge-${activeSkill.level.toLowerCase()}`}>
              {activeSkill.level}
            </div>
          </div>

          <div className="panel-section">
            <h4>What I do with it</h4>
            <ul>
              {activeSkill.whatIDo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel-section">
            <h4>Tools / Concepts</h4>
            <div className="tools-row">
              {activeSkill.tools.map((tool) => (
                <span key={tool} className="tool-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================
          JavaScript Project Scene
         ====================== */}
      <JavaScriptProjectsScene
        open={jsSceneOpen}
        onClose={() => setJsSceneOpen(false)}
      />
    </section>
  );
}
