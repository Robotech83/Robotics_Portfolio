const systems = [
  {
    title: "Embedded Control",
    desc: "Servo timing, PWM calibration, HAL-style separation, controller coordination.",
    tags: ["C/C++", "PWM 50Hz", "I2C/UART"],
  },
  {
    title: "Hardware Integration",
    desc: "Power rails, wiring segmentation, load testing, signal validation.",
    tags: ["5V/3.3V", "8A+ peak", "Diagnostics"],
  },
  {
    title: "Vision Experiments",
    desc: "Face detection and tracking hooks to motion behaviors.",
    tags: ["OpenCV", "Camera", "Actuation"],
  },
  {
    title: "Voice Interaction",
    desc: "Offline speech recognition + TTS command framework for demos.",
    tags: ["Vosk", "pyttsx3", "Command Design"],
  },
];

export default function SystemsGrid() {
  return (
    <section className="section">
      <div className="section__head">
        <h2 className="section__title">Robotics Systems</h2>
        <p className="section__sub">Break the robot into subsystems. That’s how engineers communicate complexity.</p>
      </div>

      <div className="grid">
        {systems.map((s) => (
          <div className="gridCard" key={s.title}>
            <h3 className="gridCard__title">{s.title}</h3>
            <p className="gridCard__desc">{s.desc}</p>
            <div className="tagRow">
              {s.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}