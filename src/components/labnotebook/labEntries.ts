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

{
  title: "Robot Arm Module — TypeScript Build Stabilization",
  goal: "Resolve TypeScript build failures preventing portfolio deployment.",
  issue: "JSX structure errors, improper fragment closure, and unsafe Object.entries typing caused TS compilation failures. Additionally, mismatched JointAngles types and placeholder IK logic produced type constraint violations.",
  outcome: "Rewrote the Controls component with explicit typing for JointAngles, enforced safe casting for Object.entries mappings, and corrected JSX structure to eliminate unbalanced tag errors. Standardized KinematicsEngine return types to align with application joint definitions, ensuring successful TypeScript compilation.",
  takeaway: "Strict TypeScript builds expose architectural inconsistencies early. Explicit typing and consistent domain models (e.g., JointAngles structure) prevent cascading runtime and deployment issues in larger React systems."
},

{
  title: "Portfolio UX — Global WIP Banner + Homepage Navigation Improvements",
  goal: "Improve first-impression UX and communicate active development status across the portfolio.",
  issue: "The homepage Hero dominated the viewport, causing users to miss key sections below the fold. The site also lacked a clear indicator that modules are actively evolving, which can create confusion when pages are unfinished.",
  outcome: "Implemented a GlobalWIPBanner component to clearly label the portfolio as under active development. Continued refining homepage navigation flow so users are guided from Hero into deeper sections (Dashboard/Projects) instead of assuming the Control Hub is the entire site.",
  takeaway: "Small UX signals drastically change how users interpret the site. A global status banner + intentional scroll/navigation cues helps visitors explore and sets expectations for work-in-progress modules."
},

{
  title: "Portfolio Routing — Robotics Hub + Navigation Cleanup",
  goal: "Move the Virtual Robot Arm demo into Skills → Robotics and make navigation flow match the portfolio structure.",
  issue: "Robot Arm was showing under Projects and its back button returned to the homepage instead of the Robotics hub, breaking the intended hierarchy.",
  outcome: "Created/used a RoboticsProjects hub page at /robotics-projects, linked Skills → Robotics to that hub, removed the Robot Arm card from Projects, and updated RobotKinematics back navigation to return to the RoboticsProjects page.",
  takeaway: "Good portfolios have a clear information hierarchy. Skills should launch curated hubs, and project pages should navigate back to their parent hub—not to the homepage."
},

{
  title: "Homepage UX — Scroll Guidance + Dashboard Anchor",
  goal: "Ensure visitors discover content below the Hero and land on the Dashboard intentionally.",
  issue: "The Hero section made the site feel like it only contained the Control Hub, and Dashboard scrolling did not work due to a missing/incorrect anchor setup.",
  outcome: "Added a Hero scroll button to jump to the Dashboard section using scrollIntoView and fixed Dashboard.tsx structure (removed accidental double return) while ensuring the dashboard section is properly anchorable.",
  takeaway: "Users don’t scroll unless you tell them. A simple scroll cue + correct anchors drastically improves perceived site depth."
},

{
  title: "Dashboard UI — Readability Improvement (No Hidden Labels)",
  goal: "Make Dashboard module buttons readable without relying on hover-only behavior.",
  issue: "Visual effects made text clarity inconsistent and reduced immediate understanding of each module’s purpose.",
  outcome: "Adjusted Dashboard styling so the title and module cards remain readable by default while preserving the neon aesthetic. Prepared next step to add one-line descriptions under each module card for instant clarity.",
  takeaway: "Hover effects should enhance—not reveal—critical information. Defaults must be readable on desktop and mobile."
},

{
  title: "Robot Arm Module — TypeScript Build Fix & Controls Stabilization",
  goal: "Resolve TypeScript build failures blocking deployment and stabilize the Controls component.",
  issue: "TS build errors were caused by JSX structure problems and unsafe Object.entries typing, plus mismatch between kinematics types and joint keys.",
  outcome: "Replaced Controls.tsx with a correctly typed, build-safe implementation, normalized angle rendering, and aligned KinematicsEngine outputs with the real joint keys so npm run build succeeds.",
  takeaway: "Strict TypeScript is a feature, not a nuisance. When models and UI disagree (JointAngles), builds fail—forcing healthier architecture."
},

{
  title: "JS Projects Scene — Hover Behavior & Contrast Tuning",
  goal: "Keep the hacker-tech color palette while making hover behavior calmer and the UI easier on the eyes.",
  issue: "Hover interactions felt too aggressive and the scene background was too bright/saturated for comfortable reading.",
  outcome: "Reduced hover movement to zero (no translate/scale), kept hover as a subtle brightness/border change, and darkened the scene window + card backgrounds to reduce neon intensity while keeping the original palette.",
  takeaway: "Consistency beats intensity. A controlled hover and darker surfaces improve readability and perceived quality without changing the theme."
},

{
  title: "SystemModule — Back Navigation Fix",
  goal: "Add a top-level back button to SystemModule with correct routing behavior.",
  issue: "Back button JSX was placed outside the return block, causing it not to render. Navigation previously returned to the homepage instead of the parent module context.",
  outcome: "Moved button inside the component’s return and implemented navigate(-1) for contextual back navigation. Ensured proper positioning via systemmodule.css.",
  takeaway: "JSX outside the return block does nothing. Navigation should respect hierarchy; contextual back navigation improves UX flow."
},

{
  title: "Lab Notebook — Newest-First Rendering Refactor",
  goal: "Display newest lab entries at the top without manually reordering the data file.",
  issue: "Entries rendered oldest → newest, requiring manual array reordering for every new log entry.",
  outcome: "Implemented presentation-layer reversal using [...entries].reverse() inside LabPanel before mapping. Preserved source array integrity and avoided mutating labEntries.",
  takeaway: "Data order should remain stable; rendering order belongs to the UI layer. Small architectural decisions reduce long-term maintenance friction."
},

{
  title: "Energy Management — Real-World Disruption Handling",
  goal: "Maintain forward momentum on portfolio development despite unexpected physical setback.",
  issue: "Sustained a minor injury at work (mechanical alignment incident), resulting in headache and reduced cognitive bandwidth during evening development.",
  outcome: "Shifted to lower-complexity UI refinements (Lab ordering + navigation fixes) instead of attempting high-load architectural refactors.",
  takeaway: "Engineering progress requires adaptive task selection. When cognitive capacity drops, pivot to controlled improvements rather than forcing deep work."
},

{
  title: "Embedded Systems Debug — DSI & CSI Stabilization",
  goal: "Restore stable display output and bring OV5647 camera online for facial tracking development.",
  issue: "DSI panel exhibited post-desktop flickering due to KMS driver conflict. OV5647 camera initially undetected due to extended CSI ribbon causing signal integrity failure. After correction, camera detected but streaming reliability remains inconsistent.",
  outcome: "Resolved display instability by switching from vc4-kms-v3d to vc4-fkms-v3d. Confirmed OV5647 sensor registration and correct pipeline initialization under libcamera. Identified high-speed CSI ribbon length as primary instability factor.",
  takeaway: "High-speed interfaces (MIPI DSI/CSI) are highly sensitive to signal integrity. Detection at the control layer does not guarantee stable data streaming. Hardware-layer validation must precede higher-level vision development.",
},

{
  title: "OV5647 Reality Check — 'It Worked Yesterday' Doesn’t Count",
  goal: "Get a stable camera feed on Pi 4 so facial tracking isn’t built on quicksand.",
  issue: "OV5647 repeatedly times out during streaming (dequeue expired → camera frontend timeout → restart attempts). Failures persist even with short cables and multiple camera boards; brief moments of valid output are followed by crashes.",
  outcome: "Camera enumeration and pipeline init succeed, but sustained streaming is unreliable. Root cause is still under investigation, with strongest suspects being power integrity/noise (GPIO loads), connector sensitivity, and clone-module quality.",
  takeaway: "Robotics is systems engineering. If the camera isn’t deterministic, everything above it (face tracking, recognition, automation) becomes impossible to debug. Reliability first—features later.",
},

{
  title: "OV5647 Regression — Stream-On Timeout Persists",
  goal: "Stabilize OV5647 CSI streaming on Raspberry Pi 4 for offline vision and facial tracking.",
  issue: "Repeated stream start failures: `Failed to start streaming: Connection timed out` during `libcamera-hello -t 500/1000` despite successful sensor registration and format selection.",
  outcome: "Pipeline init confirmed stable; failure isolated to stream-on. GPIO fan load previously contributed to instability; ongoing failures suggest additional power/noise or connector sensitivity issues remain.",
  takeaway: "Next: run camera in a minimal hardware configuration (no GPIO loads, minimal USB, HDMI-only) and validate repeatable `libcamera-jpeg -n` capture before resuming vision development.",
},

{
  title: "CSI Camera Failure Analysis — OV5647 I2C Timeout (-110)",
  goal: "Stabilize OV5647 camera streaming on Pi 4 to unblock offline face tracking development.",
  issue: "Camera repeatedly fails during stream start with V4L2 timeouts. Kernel logs show repeated `i2c-bcm2835 ... i2c transfer timed out` followed by `ov5647 ... stream start failed: -110` and `unicam ... stream on failed in subdev`, indicating the sensor drops off the I2C control bus during stream-on.",
  outcome: "Confirmed this is not a detection/overlay problem: pipeline initialization succeeds, but stream start fails when the sensor becomes unresponsive over I2C. Prior investigation identified GPIO-powered accessories as contributors; current evidence points to power/noise/connection instability affecting the OV5647 control channel.",
  takeaway: "CSI camera stability depends on more than the ribbon cable. If the sensor loses I2C control during stream-on, the entire camera pipeline collapses. The correct approach is systems isolation: remove GPIO/I2C loads, validate power integrity, and reintroduce peripherals one at a time only after stable capture is proven.",
},

{
  title: "Portfolio Homepage — Robotics Architecture Refactor",
  goal: "Restructure the homepage so the portfolio communicates a robotics engineering focus instead of a general software developer site.",
  issue: "The homepage content did not clearly highlight the Sonny robotics project and navigation contained multiple Control Hub entry points, creating redundant calls to action and visual clutter.",
  outcome: "Reorganized the homepage flow to highlight Sonny as the flagship robotics system and cleaned up navigation so the Hero remains the primary entry point to the Control Hub.",
  takeaway: "Robotics portfolios should introduce the system architecture and flagship robot early to communicate engineering focus immediately."
},

{
  title: "Flagship Sonny Component Implementation",
  goal: "Create a homepage section that introduces Sonny as the primary robotics project and system platform.",
  issue: "The project previously existed only within project listings and did not visually represent the scale or complexity of the robotics system.",
  outcome: "Implemented a FlagshipSonny component that summarizes the humanoid robot platform, including system badges, capability overview, and links to robotics projects and engineering logs.",
  takeaway: "Highlighting a flagship system helps frame the rest of the portfolio around engineering depth instead of isolated projects."
},

{
  title: "System Architecture Section",
  goal: "Add a simple system architecture overview to explain how Sonny's hardware and control systems are structured.",
  issue: "Visitors had no quick way to understand how the robot's computing, control, and actuation layers interact.",
  outcome: "Implemented a system architecture section showing the relationship between the Raspberry Pi controller, Arduino/ESP32 motion control layer, servo drivers, and physical actuators.",
  takeaway: "Even a simple architecture overview helps communicate embedded systems understanding and systems thinking."
},

{
  title: "Navigation Cleanup — Control Hub Entry",
  goal: "Reduce navigation redundancy and establish a clear hierarchy of calls to action on the homepage.",
  issue: "Multiple 'Control Hub' buttons appeared in different sections, including the Hero, Sonny component, and teaser sections.",
  outcome: "Removed duplicate Control Hub buttons and kept the Hero section as the primary entry point into the Control Hub interface.",
  takeaway: "Clear navigation hierarchy improves usability and prevents the interface from feeling cluttered or repetitive."
},

{
  title: "CSS Structure Correction",
  goal: "Align new homepage components with the project's existing styling architecture.",
  issue: "During prototyping, CSS styles were introduced directly inside TSX components, conflicting with the project's external CSS structure.",
  outcome: "Removed inline styles and consolidated homepage styling into the existing home.css file to maintain consistency across the project.",
  takeaway: "Separating styling from component logic keeps the project maintainable and consistent with the rest of the codebase."
},

{
  title: "Robotics Networking and Public Demonstration",
  goal: "Practice presenting Sonny and explaining its systems to other engineers and makers.",
  issue: "Presenting a complex robotics project to unfamiliar audiences can be intimidating, especially when speaking with professionals in the field.",
  outcome: "The demonstration provided valuable experience explaining Sonny's hardware, software, and control systems to others. Conversations about resumes, job searches, and robotics careers provided useful insight into how to position the project professionally.",
  takeaway: "Demonstrating robotics projects publicly improves technical communication skills and helps refine how the system is explained to engineers, recruiters, and the broader maker community."
},
{
  title: "Sonny AI Assistant — Persistent Brain Architecture",
  goal: "Give Sonny the ability to remember information across sessions instead of responding only with hard-coded commands.",
  issue: "The assistant previously had no persistent memory layer, meaning it could not store facts or learn from user interactions.",
  outcome: "Implemented a BrainStore system using structured JSON storage to persist memories, conversations, and system metadata. Created directory structure (people, objects, memories, conversations, skills, logs) and integrated it into the chat script.",
  takeaway: "Even simple file-based storage creates the foundation for long-term robot learning and personalization."
},

{
  title: "BrainStore System — Initialization Bug Debug",
  goal: "Resolve runtime error preventing the BrainStore class from loading.",
  issue: "The script crashed with AttributeError: 'BrainStore' object has no attribute 'brain_path' due to initialization order problems in the class constructor.",
  outcome: "Reorganized the BrainStore initialization logic so file paths are defined before being used by the JSON loader. Added safer loading behavior with default values when files do not exist.",
  takeaway: "Initialization order matters in class design—attributes must exist before dependent functions are called."
},

{
  title: "Sonny Learning System — Memory Commands Integration",
  goal: "Allow Sonny to store and recall user-provided information through voice commands.",
  issue: "The assistant could respond to questions but could not retain facts like preferences or names.",
  outcome: "Added command patterns for remembering, recalling, listing, and forgetting information using the BrainStore memory API. Verified persistence by storing facts such as favorite color and retrieving them later.",
  takeaway: "A robot becomes significantly more interactive once it can remember context about the user."
},

{
  title: "Speech Interface — Natural Language Command Handling",
  goal: "Improve the assistant’s ability to understand conversational commands.",
  issue: "Early tests revealed confusion between phrases like 'my favorite color' and 'your favorite color', causing incorrect responses.",
  outcome: "Refined command parsing logic to normalize phrasing and map user statements into consistent memory keys stored by the BrainStore.",
  takeaway: "Natural language interfaces require normalization so different phrasings resolve to the same stored concept."
},

{
  title: "Offline Time Handling — System Clock Reliability",
  goal: "Prevent Sonny from giving incorrect time and date information when the Raspberry Pi is offline.",
  issue: "Without internet time synchronization, the Pi sometimes reports an outdated or incorrect system clock value.",
  outcome: "Implemented logic to detect suspicious system time and fall back to a stored 'last known good time' saved in the BrainStore.",
  takeaway: "Embedded systems must gracefully handle unreliable hardware states instead of blindly trusting system values."
},

{
  title: "Sonny Cognitive Architecture — Simplification Reset",
  goal: "Reduce complexity after attempting to integrate voice, memory, facial recognition, and tracking simultaneously.",
  issue: "Working on too many subsystems at once created cognitive overload and made debugging difficult.",
  outcome: "Paused facial recognition development and refocused solely on stabilizing the BrainStore memory system and voice chat integration.",
  takeaway: "Complex robotics systems are best developed one subsystem at a time—stability before feature expansion."
},

{
  title: "Voice Assistant Development — Testing Strategy Planning",
  goal: "Define a clear testing workflow for validating Sonny's new memory capabilities.",
  issue: "Without a structured testing plan it was difficult to confirm whether memory persistence worked correctly across sessions.",
  outcome: "Created a set of voice test commands (remember, recall, list memories, forget) to verify BrainStore functionality and confirm JSON persistence between runs.",
  takeaway: "Testing simple repeatable command scenarios is critical when validating conversational AI behaviors."
},

{
  title: "AI Assistant Architecture — Future Vision System Integration",
  goal: "Plan how Sonny’s cognitive memory system will eventually connect with facial recognition and tracking.",
  issue: "Integrating vision learning alongside conversational learning risked creating tightly coupled scripts and unstable debugging conditions.",
  outcome: "Established a future architecture where the vision system identifies people while the BrainStore stores contextual information about them.",
  takeaway: "Separating perception systems (vision) from cognition systems (memory) produces a more maintainable robot architecture."
},

{
  title: "Engineering Workflow — Managing Cognitive Load During Development",
  goal: "Maintain forward progress during an evening of intensive debugging and architecture work.",
  issue: "Multiple subsystems (voice recognition, persistent memory, time synchronization, facial recognition planning) introduced mental overload.",
  outcome: "Intentionally simplified the development scope, stabilized the core brain and chat system, and deferred vision work to a future session.",
  takeaway: "Effective engineering sometimes means intentionally reducing scope to protect clarity and momentum."
},

{
  title: "Sonny AI Development — Cognitive System Milestone",
  goal: "Move Sonny from a scripted assistant toward a learning robotic system.",
  issue: "Static command systems limit interaction and prevent personalization.",
  outcome: "Implemented a persistent brain layer capable of storing memories, handling recall, and supporting future integrations with perception systems.",
  takeaway: "A robot becomes truly interactive once perception, memory, and conversation are connected through a unified cognitive layer."
},

{
  title: "Sonny Torso Assembly — Lunch Break Mechanical Progress",
  goal: "Begin structural assembly of the InMoov torso and install core actuator mounts.",
  issue: "Torso components were still loose parts and difficult to work with while installing the head and neck mechanism.",
  outcome: "Aligned and assembled the primary torso frame plates and began installing servo mounting points. Partial alignment was intentionally left loose to allow easier access for future head and neck installation.",
  takeaway: "Early mechanical alignment and dry fitting simplifies later subsystem installation and prevents binding in humanoid robot joints."
},

{
  title: "Sonny AI Assistant — Persistent Brain Architecture Implementation",
  goal: "Give Sonny the ability to remember information between sessions instead of relying on hard-coded responses.",
  issue: "The assistant previously had no persistent memory layer, preventing it from learning user information or recalling past interactions.",
  outcome: "Integrated a BrainStore memory system into the voice assistant using JSON-based storage. Created a structured directory system for memories and connected voice commands to memory storage and retrieval.",
  takeaway: "Persistent storage transforms a scripted assistant into a system capable of learning and personalized interaction."
},

{
  title: "BrainStore Debug — Initialization Order Fix",
  goal: "Resolve runtime crash preventing the BrainStore system from loading.",
  issue: "The program crashed during startup due to the attribute 'brain_path' being referenced before it was defined in the class constructor.",
  outcome: "Reorganized the BrainStore initialization order so file paths are defined before being used by the JSON loader. Added safer fallback loading behavior for missing files.",
  takeaway: "Constructor initialization order is critical in class design—dependencies must exist before being used."
},

{
  title: "Sonny Learning System — Voice Memory Commands",
  goal: "Enable Sonny to learn facts from voice commands and recall them later.",
  issue: "The assistant could respond to commands but could not store or retrieve user-provided information.",
  outcome: "Implemented conversational commands such as 'remember', 'what is my', 'forget', and 'what do you know'. Verified that Sonny could store multiple memories including name, favorite color, favorite robot, and favorite tools.",
  takeaway: "Natural language learning commands dramatically improve the perceived intelligence of a robot assistant."
},

{
  title: "Persistent Memory Verification — Reboot Testing",
  goal: "Confirm that Sonny's memory system persists across system restarts.",
  issue: "Memory systems that only exist during runtime lose their usefulness after reboot.",
  outcome: "Rebooted the Raspberry Pi and verified that Sonny successfully reloaded stored memories from disk and listed them through voice commands.",
  takeaway: "Persistent memory is a foundational capability for long-term human-robot interaction."
},

{
  title: "Cognitive Architecture Scope Reset",
  goal: "Reduce development complexity by stabilizing core systems before adding new features.",
  issue: "Simultaneously working on voice commands, persistent memory, facial recognition, and tracking created cognitive overload and debugging difficulty.",
  outcome: "Paused facial recognition development and focused on stabilizing the BrainStore memory system and chat interface.",
  takeaway: "Complex robotics systems should be developed incrementally—stability before expansion."
},

{
  title: "Sonny Cognitive Milestone — First Persistent Robot Memory",
  goal: "Demonstrate a robot capable of learning and recalling information through conversation.",
  issue: "Scripted assistants feel static and do not improve interaction over time.",
  outcome: "Sonny successfully learned and recalled multiple facts through voice commands and retained them after reboot, marking the first working version of Sonny's cognitive memory system.",
  takeaway: "Adding memory creates the foundation for higher-level capabilities such as recognizing returning users and contextual interaction."
},

{
  title: "Sonny Cognitive Milestone — First Learned Conversation",
  goal: "Verify that Sonny can learn new information through voice interaction and recall it during later conversations.",
  issue: "Earlier versions of the assistant relied entirely on scripted responses and could not retain information provided by the user.",
  outcome: "Successfully demonstrated Sonny learning multiple facts through voice commands including the user's name, favorite color, favorite robot, and favorite tool. Sonny was able to recall the stored information during conversation and list all stored memories on request.",
  takeaway: "The moment a robot can learn from interaction instead of relying on static commands, it shifts from a scripted assistant to a developing cognitive system."
},

{
  title: "Persistent Brain Verification — Memory Survives System Reboot",
  goal: "Confirm that Sonny's BrainStore memory system persists across Raspberry Pi restarts.",
  issue: "Some memory implementations only store data in runtime variables and lose information when the system shuts down or restarts.",
  outcome: "After rebooting the Raspberry Pi, Sonny successfully reloaded stored memories from disk and listed them correctly using the 'what do you know' command. This confirmed that the BrainStore JSON storage system persists knowledge across sessions.",
  takeaway: "Persistent storage is a foundational requirement for long-term learning systems and future features such as face recognition memory."
},

{
  title: "Sonny — Face Recognition Architecture",
  goal: "Design how Sonny’s vision system communicates with the voice assistant without merging both projects.",
  issue: "Face recognition and SonnyChat were separate systems with no shared memory or communication layer.",
  outcome: "Designed a shared 'Sonny Brain' directory structure where the vision system writes a vision_event.json file and SonnyChat reads it to trigger greetings and load person profiles.",
  takeaway: "Separating perception (vision) from interaction (chat) keeps the robot architecture modular and easier to debug."
},

{
  title: "Sonny — Face Recognition Architecture",
  goal: "Design how Sonny’s vision system communicates with the voice assistant without merging both projects.",
  issue: "Face recognition and SonnyChat were separate systems with no shared memory or communication layer.",
  outcome: "Designed a shared 'Sonny Brain' directory structure where the vision system writes a vision_event.json file and SonnyChat reads it to trigger greetings and load person profiles.",
  takeaway: "Separating perception (vision) from interaction (chat) keeps the robot architecture modular and easier to debug."
},

{
  title: "SonnyChat Integration — Vision Events",
  goal: "Allow Sonny to greet recognized individuals automatically.",
  issue: "SonnyChat only responded to wake words and had no way to react to vision events.",
  outcome: "Added handle_vision_event() logic to check for a vision_event.json file and trigger contextual greetings.",
  takeaway: "Event-driven design allows robot subsystems to communicate asynchronously."
},

{
  title: "Filesystem Debug — Missing Brain Directories",
  goal: "Test Sonny’s new face recognition greeting system.",
  issue: "SonnyChat never detected vision events even though the code was functioning correctly.",
  outcome: "Discovered the shared SonnyData/sonny_brain/inbox directory did not exist, preventing event detection.",
  takeaway: "Robotics debugging often comes down to system-level issues like filesystem paths rather than code errors."
},

{
  title: "Human-Robot Interaction Design",
  goal: "Make Sonny less intrusive when recognizing people.",
  issue: "Storing hobbies or personal information felt too invasive for casual interactions.",
  outcome: "Shifted toward conversation starters such as 'How has your day been?' or 'Last time I saw you we were working in the lab.'",
  takeaway: "Designing robot personalities requires balancing usefulness with respect for personal boundaries."
},

{
  title: "Human-Robot Interaction Design",
  goal: "Make Sonny less intrusive when recognizing people.",
  issue: "Storing hobbies or personal information felt too invasive for casual interactions.",
  outcome: "Shifted toward conversation starters such as 'How has your day been?' or 'Last time I saw you we were working in the lab.'",
  takeaway: "Designing robot personalities requires balancing usefulness with respect for personal boundaries."
},

{
  title: "Architecture Planning — Sonny Brain",
  goal: "Define a long-term structure for Sonny’s memory, perception, and conversation systems.",
  issue: "Multiple subsystems (vision, voice, memory) needed a shared data layer.",
  outcome: "Created the concept of the 'Sonny Brain' directory to hold inbox events, people profiles, and long-term memory.",
  takeaway: "Clear system architecture early in a project prevents major integration problems later."
},

{
  title: "Sonny — Face Recognition Consent System",
  goal: "Design a respectful system allowing Sonny to recognize people without violating personal privacy.",
  issue: "Facial recognition can feel intrusive if the robot stores identity data without explicit permission.",
  outcome: "Added a consent flag inside each person profile so Sonny only stores and remembers faces when permission has been granted.",
  takeaway: "Human-robot interaction should include consent mechanisms, even in prototype systems."
},

{
  title: "Sonny — Face Recognition Consent System",
  goal: "Design a respectful system allowing Sonny to recognize people without violating personal privacy.",
  issue: "Facial recognition can feel intrusive if the robot stores identity data without explicit permission.",
  outcome: "Added a consent flag inside each person profile so Sonny only stores and remembers faces when permission has been granted.",
  takeaway: "Human-robot interaction should include consent mechanisms, even in prototype systems."
},

{
  title: "Event-Driven Robot Architecture",
  goal: "Connect Sonny’s vision system to the voice assistant without tightly coupling both programs.",
  issue: "Face recognition and SonnyChat existed as separate projects with no shared communication layer.",
  outcome: "Implemented a filesystem event system where the vision module writes a vision_event.json file that SonnyChat reads to trigger greetings and memory lookup.",
  takeaway: "Loose coupling between robot subsystems improves reliability and makes debugging easier."
},

{
  title: "System Debugging — Missing Brain Directory",
  goal: "Test Sonny’s automatic greeting when a known face is detected.",
  issue: "SonnyChat never responded to vision events even though the code appeared correct.",
  outcome: "Discovered the shared Sonny Brain directory structure had not been created on disk, preventing event detection.",
  takeaway: "Many robotics failures are caused by system configuration issues rather than code logic."
},

{
  title: "Sonny — Assistive Household Robot Vision",
  goal: "Define the long-term purpose of Sonny as an assistive household robot capable of helping with everyday tasks.",
  issue: "While reviewing other humanoid robotics projects, it initially felt like large companies were already solving the same problems.",
  outcome: "Refocused the project around a personal mission: building Sonny as a robot that could one day assist my fiancée if her vasculitis progresses and mobility becomes limited.",
  takeaway: "Personal motivation can drive meaningful engineering projects. Even small prototypes contribute to the larger goal of accessible assistive robotics."
},

{
  title: "Household Robotics — Core Capability Planning",
  goal: "Identify the foundational capabilities required before Sonny can realistically perform household chores.",
  issue: "Modern humanoid robots shown online appear capable of many tasks, but the underlying systems required were not clearly defined.",
  outcome: "Identified three foundational systems Sonny must develop first: vision (object recognition), manipulation (arms and motion control), and contextual interaction (voice and memory).",
  takeaway: "Complex robot behavior emerges from combining smaller reliable subsystems rather than building one massive feature at once."
},

{
  title: "Project Perspective — Independent Robotics Development",
  goal: "Evaluate Sonny’s development path compared to large commercial robotics companies.",
  issue: "Seeing advanced humanoid robots online created the impression of competing directly with large research teams.",
  outcome: "Recognized that independent robotics projects serve a different purpose: experimentation, learning, and building meaningful assistive technology at a personal scale.",
  takeaway: "Innovation in robotics often begins with individual builders exploring ideas long before they become commercial systems."
},

{
  title: "Sonny Vision System — Face Recognition + Memory Event Pipeline",
  goal: "Connect Sonny's face recognition system to the BrainStore memory architecture so the robot can recognize people and greet them by name.",
  issue: "Initial tests failed due to incorrect filesystem paths and module import errors. SonnyChat could not locate the inbox or people memory files even though they existed, preventing greeting events from triggering.",
  outcome: "Corrected project directory paths and verified the shared brain directory structure (people, inbox, memories). Face recognition now writes a vision_event.json file that SonnyChat can read to load a person's profile and trigger greeting behavior.",
  takeaway: "Robotics subsystems must share a consistent filesystem architecture. Once perception (vision) and cognition (memory/chat) communicate through a clean event pipeline, higher-level social behaviors become much easier to build."
},

{
  title: "Sonny Interaction Milestone — First Face Recognition Greeting",
  goal: "Verify that Sonny can recognize a known person and trigger a spoken greeting using the BrainStore memory system.",
  issue: "Initial tests produced no greeting on startup even though the vision event system was running. Investigation showed that the inbox event file and people memory paths were not aligned with the actual project directory structure, preventing SonnyChat from loading the recognized person's profile.",
  outcome: "After correcting filesystem paths and confirming that the vision_event.json file was written to the shared brain inbox directory, SonnyChat successfully detected the event, loaded the corresponding person profile, and triggered a greeting response.",
  takeaway: "This marks Sonny's first working perception → memory → speech loop. When vision, memory, and conversation systems are connected, the robot transitions from a command assistant into a socially aware system capable of recognizing and interacting with individuals."
},

{
  title: "Sonny Portfolio Page — Media Layout + CSS Refactor",
  goal: "Add Sonny as a flagship robotics project page in the portfolio with images, video, and a cleaner presentation.",
  issue: "The first version used the wrong styling approach for the project, causing oversized images, broken spacing, missing text styling, and confusion between media path issues and unrelated React warnings.",
  outcome: "Reworked the Sonny portfolio page to use the existing CSS structure instead of Tailwind-style utility classes, corrected media paths for the project base URL, organized the layout into a cleaner hero/gallery/video structure, and stabilized image sizing so the page became usable and visually coherent.",
  takeaway: "When a project already has an established styling system, matching that architecture is more important than forcing a new one. Clean structure, correct asset paths, and scoped CSS made the Sonny page far easier to debug and polish."
},


];