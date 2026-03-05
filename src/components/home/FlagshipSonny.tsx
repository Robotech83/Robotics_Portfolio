import "../../styles/home.css";

export default function FlagshipSonny() {
  return (
    <section className="home-section">
      <header className="home-sectionHead">
        <h2 className="home-h2">Flagship System</h2>
        <p className="home-sub">
          The project that ties together embedded firmware, power, buses, sensors, vision, and voice.
        </p>
      </header>

      <div className="sonny-card">
        <div className="sonny-badges">
          <span className="home-badge home-badge--star">⭐ Flagship</span>
          <span className="home-badge">Active Development</span>
          <span className="home-badge">20+ Servos</span>
          <span className="home-badge">Pi + Arduino + ESP32</span>
        </div>

        <h3 className="home-h3">Sonny — Distributed Humanoid Robotics Platform</h3>

        <p className="sonny-desc">
          A multi-controller humanoid robot system integrating Raspberry Pi (high-level processing),
          Arduino Mega / ESP32 (real-time actuation), servo drivers, and sensor-triggered behaviors.
          Built with a focus on deterministic control, reliability, and debugability.
        </p>

        <div className="sonny-facts">
          <div className="sonny-fact">
            <strong>Embedded</strong>
            <span>PWM • I2C/UART • Timing</span>
          </div>
          <div className="sonny-fact">
            <strong>Hardware</strong>
            <span>Power rails • Load testing • Wiring</span>
          </div>
          <div className="sonny-fact">
            <strong>Systems</strong>
            <span>Vision triggers • Voice commands</span>
          </div>
        </div>

        <div className="home-btnRow">
          <a className="home-btn home-btn--primary" href="/#/robotics-projects">
            Explore Sonny (Robotics)
          </a>
          <a className="home-btn" href="/#/lab-notebook">
            Engineering Logs
          </a>
        </div>
      </div>
    </section>
  );
}