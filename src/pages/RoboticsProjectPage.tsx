import { Link, useNavigate } from "react-router-dom";
import "../styles/roboticsProject.css";

export default function RoboticsProjectsPage() {
  const navigate = useNavigate();
  return (
    <section className="robotics-page">
  <button
    className="robotics-back-btn"
    onClick={() => navigate("/")}
  >
    ← Back
  </button>

  <header className="robotics-header">
    <h2>Robotics Projects</h2>
    <p>Simulation, kinematics, control systems, and robotics tooling.</p>
  </header>

      <div className="robotics-grid">
        {/* Robot Arm Card */}
        <div className="robotics-card">
          <div className="robotics-card-top">
            <h3>Virtual Robot Arm — FK/IK Studio</h3>
            <span className="robotics-badge">WIP</span>
          </div>

          <p className="robotics-desc">
            Interactive kinematics sandbox built with React Three Fiber.
            Demonstrates forward kinematics and the foundation for inverse
            kinematics target solving.
          </p>

          <div className="robotics-actions">
            <Link to="/robotarm" className="robotics-btn">
              Launch Demo →
            </Link>
          </div>
        </div>

        {/* Sonny OS Card */}
<div className="robotics-card">
  <div className="robotics-card-top">
    <h3>Sonny OS — Humanoid AI Platform</h3>
    <span className="robotics-badge">FLAGSHIP</span>
  </div>

  <p className="robotics-desc">
    Offline humanoid robotics platform built on Raspberry Pi.
    Combines voice interaction, facial recognition, memory, and modular AI systems
    designed for real-world demos and future motion control.
  </p>

  <div className="robotics-actions">
    <Link to="/robotics-projects/sonny-os" className="robotics-btn">
      View Project →
    </Link>
  </div>
</div>

<div className="robotics-grid">
{/* Robot Arm Kinematics Calculator (Python) */}
<div className="robotics-card">
  <div className="robotics-card-top">
    <h3>Robot Arm Kinematics Calculator</h3>
    <span className="robotics-badge">NEW</span>
  </div>

  <p className="robotics-desc">
  Demonstrates forward kinematics used in real robotic systems, including 
  my humanoid robot project (Sonny OS), bridging mathematical modeling 
  with physical robot control.
  </p>

  <div className="robotics-actions">
    <a
      href="https://github.com/Robotech83/robot-arm-kinematics-calculator"
      target="_blank"
      rel="noopener noreferrer"
      className="robotics-btn"
    >
      View Project →
    </a>
  </div>
</div>
</div>

        {/* Add more robotics cards later */}
      </div>
    </section>
  );
}