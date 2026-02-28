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

        {/* Add more robotics cards later */}
      </div>
    </section>
  );
}