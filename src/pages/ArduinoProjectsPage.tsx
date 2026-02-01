// src/pages/ArduinoProjectsPage.tsx
// Purpose: A "scene" page like your JavaScript projects page, but for Arduino.
// Shows 2 featured projects with repo links + demo links + wiring photo placeholders.

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/arduinoprojects.css";

type ArduinoProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  repoUrl: string;
  demoUrl?: string;      // optional (video link / GitHub assets / YouTube)
  wiringImage?: string;  // optional local image path in /public or /src/assets
  status: "featured" | "in-progress" | "completed";
};

export default function ArduinoProjectsPage() {
  const navigate = useNavigate();

  // 🔧 Add/edit projects here (this is your “single source of truth”)
  const projects: ArduinoProject[] = useMemo(
    () => [
      {
        id: "sonny-hand",
        title: "Sonny Hand Controller",
        tagline: "5-servo hand gestures via PCA9685 (I2C PWM driver)",
        description:
          "Controls a robotic hand using Arduino + PCA9685. Includes open/close/rest style gesture routines and servo tuning. Built as a real robotics control demo.",
        skills: ["Arduino", "I2C", "PCA9685", "Servo Control", "Robotics"],
        repoUrl: "https://github.com/Robotech83/SonnyHand.ino",
        // demoUrl: "PASTE YOUR DEMO VIDEO LINK HERE",
        // wiringImage: "/images/sonnyhand-wiring.jpg", // put image in /public/images
        status: "featured",
      },
      {
        id: "aria-prototype",
        title: "Aria Humanoid Prototype",
        tagline: "Early-stage hardware prototype & iteration log",
        description:
          "Prototype repo documenting early humanoid design direction. Focused on physical iteration, placement, and practical build planning (hardware-first).",
        skills: ["Prototyping", "Hardware", "Robotics Design", "Iteration"],
        repoUrl: "https://github.com/Robotech83/Aria",
        // demoUrl: "OPTIONAL: short clip link",
        // wiringImage: "/images/aria-prototype.jpg",
        status: "in-progress",
      },
      {
        id: "robot-arm",
        title: "Robot Arm Controller",
        tagline: "Arduino-based robotic arm with servo control",
        description:
          "Prototype repo documenting early humanoid design direction. Focused on physical iteration, placement, and practical build planning (hardware-first).",
        skills: ["Prototyping", "Hardware", "Robotics Design", "Iteration"],
        repoUrl: "https://github.com/Robotech83/Robot_Arm.ino",
        // demoUrl: "OPTIONAL: short clip link",
        // wiringImage: "/images/robot-arm-wiring.jpg",
        status: "in-progress",
      },
      {
        id: "joystick-car",
        title: "Car controller by Joystick",
        tagline: "Arduino-based RC car with analog joystick control",
        description:
          "An Arduino-based RC car controlled by an analog joystick. Features real-time motor control and feedback.",
        skills: ["Arduino", "Joystick", "Motor Control", "Embedded Systems"],
        repoUrl: "https://github.com/Robotech83/car_joystick.ino",
        // demoUrl: "OPTIONAL: short clip link",
        // wiringImage: "/images/car-joystick-wiring.jpg",
        status: "completed",
      },
      {
        id: "I2CTester",
        title: "I2C Tester",
        tagline: "Arduino-based I2C bus scanner and device tester",
        description:
          "An Arduino-based I2C bus scanner and device tester. Useful for debugging I2C connections and identifying devices on the bus.",
        skills: ["Arduino", "I2C", "Scanning", "Debugging"],
        repoUrl: "https://github.com/Robotech83/I2CTest.ino",
        // demoUrl: "OPTIONAL: short clip link",
        // wiringImage: "/images/i2c-tester-wiring.jpg",
        status: "completed",
      },
      
    ],
    []
  );

  // Simple filtering like a “project scene”
  const [filter, setFilter] = useState<"all" | "featured" | "in-progress">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.status === filter);
  }, [filter, projects]);

  return (
    <div className="arduino-page">
      {/* Back Button */}
      <button className="back-btn-top" onClick={() => navigate("/")}>
        ← Back
      </button>

      {/* Header */}
      <header className="arduino-header">
        <h1 className="arduino-title">Arduino Projects</h1>
        <p className="arduino-subtitle">
          Hardware robotics builds — real I2C, real servos, real debugging.
        </p>
      </header>

      {/* Controls */}
      <section className="arduino-controls neon-panel">
        <div className="controls-row">
          <span className="terminal-prompt">&gt;</span>
          <span className="controls-label">filter:</span>

          <div className="filter-group">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "featured" ? "active" : ""}`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
            <button
              className={`filter-btn ${filter === "in-progress" ? "active" : ""}`}
              onClick={() => setFilter("in-progress")}
            >
              In Progress
            </button>
          </div>
        </div>

        <p className="controls-hint">
          Tip: Add a wiring photo + 10s demo clip for each project to make it “real” instantly.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="arduino-grid">
        {filtered.map((p) => (
          <article key={p.id} className="project-card neon-panel">
            <div className="card-top">
              <div className="card-status">
                <span className={`status-pill ${p.status}`}>
                  {p.status === "featured" ? "FEATURED" : "IN PROGRESS"}
                </span>
              </div>

              <h2 className="project-title">{p.title}</h2>
              <p className="project-tagline">{p.tagline}</p>
            </div>

            {/* Optional wiring image */}
            {p.wiringImage ? (
              <div className="wiring-preview">
                <img src={p.wiringImage} alt={`${p.title} wiring`} />
              </div>
            ) : (
              <div className="wiring-placeholder">
                <div className="placeholder-line">
                  <span className="terminal-prompt">&gt;</span> wiring_photo:{" "}
                  <span className="muted">not added yet</span>
                </div>
                <div className="placeholder-line">
                  <span className="terminal-prompt">&gt;</span> demo_clip:{" "}
                  <span className="muted">not added yet</span>
                </div>
              </div>
            )}

            <p className="project-desc">{p.description}</p>

            <div className="skills-row">
              {p.skills.map((s) => (
                <span key={s} className="skill-chip">
                  {s}
                </span>
              ))}
            </div>

            <div className="card-actions">
              <a className="neon-link" href={p.repoUrl} target="_blank" rel="noreferrer">
                View Repo →
              </a>

              {p.demoUrl ? (
                <a className="neon-link secondary" href={p.demoUrl} target="_blank" rel="noreferrer">
                  Demo Video →
                </a>
              ) : (
                <span className="muted small">Demo link coming soon</span>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="arduino-footer neon-panel">
        <span className="terminal-prompt">&gt;</span>
        <span className="muted">
          Next: add wiring photo + 10s demo clip to Sonny Hand, then update the placeholders.
        </span>
      </footer>
    </div>
  );
}
