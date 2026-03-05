import "../../styles/home.css";

export default function SystemArchitecture() {
  return (
    <section className="home-section">
      <header className="home-sectionHead">
        <h2 className="home-h2">System Architecture</h2>
        <p className="home-sub">High-level control stack overview.</p>
      </header>

      <div className="arch-card">
        <pre className="arch-pre">{`Raspberry Pi 4
(Voice + Vision + High-Level Logic)
        │
     I2C / UART
        │
Arduino Mega / ESP32
(Real-Time Servo Control)
        │
PCA9685 Servo Drivers + Power Rails
        │
20+ Servo Actuators → InMoov Body`}</pre>
      </div>
    </section>
  );
}