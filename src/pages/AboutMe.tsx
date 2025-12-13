import {BackButton} from "../components/BackButton";
import  "../styles/aboutme.css";

export default function AboutMePage() {
  return (
    <div className="about-page">

      <BackButton />

      {/* ---------- TITLE ---------- */}
      <h1 className="about-title">About Me</h1>

      {/* ---------- HOLOGRAM PROFILE ---------- */}
      <div className="holo-profile">
        <div className="holo-frame">
          <img src="/profile.jpg" alt="Profile" className="holo-img" />
          <div className="scanlines"></div>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="about-content">

        <p>
          Hi, I'm Keneshia — a self-taught robotics builder, programmer, and creative engineer.
          I specialize in mixing hardware, embedded systems, and expressive movement
          to bring humanoid robotics into the real world.
        </p>

        <p>
          My biggest ongoing project is “Sonny,” a full InMoov humanoid robot built from scratch
          using Raspberry Pi, multiple Arduinos, PCA9685 servo controllers, and a completely
          offline voice + motion system.
        </p>

        <p>
          I learn by building — solving real engineering problems, wiring real circuits,
          and breaking things (then fixing them again).
        </p>

        <p className="mission">
          My mission: <strong>create robotics that feel alive.</strong>
        </p>
      </div>

      {/* ---------- SKILL BADGES ---------- */}
      <div className="stats-panel">
        <div className="stat-chip">5+ Robotics Systems Built</div>
        <div className="stat-chip">3D Printing & CAD</div>
        <div className="stat-chip">Servo Motion Engineering</div>
        <div className="stat-chip">Raspberry Pi & Arduino</div>
        <div className="stat-chip">Offline AI & Vision</div>
      </div>

      {/* ---------- TIMELINE ---------- */}
      <div className="timeline">
        <h2 className="timeline-title">Robotics Journey</h2>

        <div className="timeline-item left">Started robotics exploration</div>
        <div className="timeline-item right">First Arduino servo project</div>
        <div className="timeline-item left">Face tracking + Pi → Arduino control</div>
        <div className="timeline-item right">InMoov humanoid build begins</div>
        <div className="timeline-item left">Offline voice assistant + vision system</div>
        <div className="timeline-item right">Robot Control Hub development</div>
      </div>
    </div>
  );
}
