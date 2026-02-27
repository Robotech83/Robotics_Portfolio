// All lab entries live here (easy to edit, no UI noise)

import type { LabEntry } from "./types";

export const labEntries: LabEntry[] = [
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
},

{
  title: "Raspberry Pi — Miuzei 4\" HDMI Kit Recovery + Touch Debug",
  goal: "Move my Pi to the Miuzei 4-inch HDMI screen and restore display + touch input.",
  issue: "Touch input was dead and a wrong LCD-show driver script broke HDMI output (no signal).",
  outcome: "Recovered by restoring a safe /boot/config.txt (HDMI output + RealVNC working again). Confirmed touchscreen is not USB-based (lsusb shows no touch device) and determined the kit uses GPIO header connections, so touch debugging needs I2C/GPIO path instead of USB drivers.",
  takeaway: "HDMI touchscreens aren’t all USB—identify the interface first; bad display scripts can brick video, but boot partition recovery fixes it fast.",
},

{
  title: "Sonny Vision System — Hardware-Level Camera Debug",
  goal: "Bring CSI ribbon camera online for face recognition pipeline using Picamera2.",
  issue: "System reported no available cameras; dmesg showed bcm2835 stack loaded but no imx/ov sensor attachment — indicating kernel could not detect physical camera.",
  outcome: "Traced failure to hardware/driver layer instead of application code. Narrowed likely causes to CSI seating/orientation or legacy camera configuration.",
  takeaway: "Debug embedded systems from the bottom up — hardware detection before drivers, drivers before application logic.",
},

{
  title: "Sonny Voice System — Command Interface Documentation",
  goal: "Formalize Sonny’s voice interface into a structured, human-readable command reference.",
  issue: "Natural-language command matching worked, but lack of structured documentation reduced demo reliability and discoverability.",
  outcome: "Audited command dictionary, identified wake word + grammar scope, and produced categorized documentation to align spoken interface with system capabilities.",
  takeaway: "An interface is only complete when its capabilities are discoverable and repeatable.",
},
{
  title: "Embedded Resume — Firmware-Focused Rewrite",
  goal: "Strengthen resume for embedded/firmware roles and reduce emphasis on general AI in favor of system-level engineering.",
  issue: "Original resume described projects well but lacked measurable metrics and firmware-specific language that recruiters look for.",
  outcome: "Rewrote resume to emphasize distributed control architecture, I2C bus speed, PWM frequency, servo count, voltage rails, and deterministic behavior. Identified need for a small firmware-only project to anchor embedded credibility.",
  takeaway: "Embedded resumes must highlight determinism, hardware interaction, bus protocols, and measurable system behavior—not just features."
},
 {
  title: "Embedded Resume — Sonny Flagship Rewrite",
  goal: "Reposition my resume to break into embedded systems by making Sonny (InMoov) the flagship system and emphasizing firmware + hardware integration.",
  issue: "Previous resume bullets were too general and could read as hobby robotics instead of embedded engineering (not enough firmware language or system-level framing).",
  outcome: "Rewrote summary, skills, and projects to present Sonny as a distributed embedded platform (ESP32/Arduino/RPi), highlighting PWM/I2C/PCA9685, mixed-voltage power rails, and integration-driven troubleshooting.",
  takeaway: "For embedded roles, tell the story as a system: architecture, protocols, power, timing, debugging—not just features.",
},

{
  title: "Recruiter Review — Resume Pros/Cons & Gap Targets",
  goal: "Evaluate my resume like a senior embedded recruiter and identify what would make it harder to reject.",
  issue: "Risk of appearing broad (robotics + AI + vision + voice) and lacking measurable metrics; firmware depth could be questioned without a standalone firmware repo.",
  outcome: "Identified strongest signals (Sonny as a real system + automotive diagnostics + embedded keywords) and set next upgrades: add measurable specs (servo count, bus speed, PWM rate, voltage rails) and build a firmware-only project to anchor credibility.",
  takeaway: "A single focused firmware repo + metrics can convert “interesting” into “hireable” for embedded roles.",
},

{
  title: "Portfolio Positioning — Sonny as a System, Not a Component",
  goal: "Replace component-style project framing (robot head) with a flagship platform narrative that communicates embedded competency.",
  issue: "Component projects can sound like isolated builds and don’t automatically signal distributed control, constraints, or integration complexity.",
  outcome: "Refactored project narrative around Sonny as the platform: distributed control model, controller segmentation, power management, and AI-triggered actuation as separate subsystems.",
  takeaway: "Hiring managers remember platforms—flagship systems create a clear technical identity.",
},

{
  title: "State Machines — Deep Dive + Paper Drafting",
  goal: "Level up state machine understanding for embedded/robotics interviews and produce a portfolio-ready writeup.",
  issue: "Early drafts felt too generic (summary-style) and didn’t reflect real understanding or systems-level thinking.",
  outcome: "Reframed the paper around theory → firmware → robotics (state as memory, automata foundation, determinism/WCET, hierarchy/complexity, and architectural tradeoffs). Produced a dense PDF and exported a Word doc for editing.",
  takeaway: "A strong technical paper should teach *why* (constraints, determinism, failure modes), not just define terms—depth comes from connecting theory to real embedded timing and robotics behavior."
},

{
  title: "Sonny — Repository Cleanup & Documentation Hardening",
  goal: "Align GitHub repository with actual working system and improve professional presentation.",
  issue: "README overstated features (face tracking/recognition not operational) and dependencies were loosely defined.",
  outcome: "Rewrote README to reflect current capabilities only, removed unsupported features, and created a version-pinned requirements.txt for stability.",
  takeaway: "Clear documentation and honest feature scoping improve credibility more than unfinished features."
},

{
  title: "Sonny — Dependency Stabilization",
  goal: "Prevent environment breakage and improve reproducibility.",
  issue: "Unpinned Python packages could cause inconsistent behavior across installs.",
  outcome: "Created structured requirements.txt with pinned versions and grouped dependencies by function.",
  takeaway: "Embedded projects require controlled environments for long-term reliability."
},

{
  title: "Lab Notebook — Component Cleanup & Terminal Refactor",
  goal: "Refactor the LabNotebook component into a cleaner, more maintainable structure with a terminal-style layout.",
  issue: "LabNotebook had grown large and hard to reason about, mixing data, layout, and visual structure in one block.",
  outcome: "Standardized entry structure (title, goal, issue, outcome, takeaway), added terminal topbar, prompt styling, and consistent grid rows for each field.",
  takeaway: "Well-structured components make it easier to scale content without rewriting layout or styles."
},

{
  title: "Virtual Robot Arm — FK/IK Mathematical Implementation",
  goal: "Implement forward kinematics with correct transform hierarchy and begin inverse kinematics target solving.",
  issue: "Initial joint rotations produced collapsed geometry due to improper transform ordering and undefined joint mappings. Additionally, IK target coordinates required consistent world-to-local conversion for solver stability.",
  outcome: "Structured the arm using nested rotational groups to mirror real joint chaining (shoulder → elbow → wrist). Ensured degrees-to-radians conversion for all rotations and validated transform propagation visually. Established groundwork for inverse kinematics by mapping target coordinates into scaled scene space and preparing joint angle solving logic.",
  takeaway: "Forward kinematics depends as much on transform order as it does on math. Small errors in joint hierarchy or unit conversion can invalidate an entire chain. Establishing a stable FK model is essential before reliable IK solving."
},

{
  title: "Robot Kinematics Page — Layout Stabilization",
  goal: "Create a clean two-column viewport + controls layout that fits portfolio styling.",
  issue: "Canvas height inheritance and global CSS interference caused floating controls and broken layout alignment.",
  outcome: "Built a scoped grid layout using rk-* class prefixes, implemented a controlled Canvas wrapper for proper height management, and added a WIP terminal-style overlay with back navigation.",
  takeaway: "In React + WebGL environments, layout containers must explicitly control height. Scoped CSS prevents unpredictable cross-page styling conflicts."
},

{
  title: "SystemModule Routing & Architecture Refactor Planning",
  goal: "Redirect Dashboard Power System navigation to SystemModule and prepare module for proper component separation.",
  issue: "Route mismatches (robotstudio vs robot-studio) caused navigation failures. SystemModule was growing too large and relying on shared dashboard.css styling, increasing risk of cross-page layout conflicts.",
  outcome: "Corrected route definitions in App.tsx to ensure consistent navigation behavior. Implemented back navigation inside SystemModule using useNavigate. Established plan to decompose SystemModule into smaller panel components and migrate styling into a dedicated systemmodule.css file for proper modular isolation.",
  takeaway: "As applications grow, routing consistency and scoped styling become critical. Separating module-specific CSS and breaking large components into smaller units improves maintainability and reduces unintended side effects."
},

];