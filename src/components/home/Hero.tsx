export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <p className="hero__tag">Robotics • Embedded • Hardware Integration</p>

          <h1 className="hero__title">
            Robotech83
            <span className="hero__subtitle">Robotics & Embedded Systems Developer</span>
          </h1>

          <p className="hero__desc">
            I design and build robotic systems integrating embedded firmware, distributed
            microcontrollers, and real-world electromechanical hardware.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#sonny">
              View Robotics Projects
            </a>
            <a className="btn" href="https://github.com/Robotech83" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="/Keneshia%20Edward%20Embedded%20Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>

          <p className="hero__micro">
            Flagship system: <strong>Sonny</strong> — Distributed Humanoid Robotics Platform (Active Development)
          </p>
        </div>

        <div className="hero__right">
          <div className="hero__panel">
            <div className="hero__panelHead">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="hero__panelTitle">system_status</span>
            </div>
            <div className="hero__panelBody">
              <div className="kv">
                <span className="k">mode</span>
                <span className="v">engineering_portfolio</span>
              </div>
              <div className="kv">
                <span className="k">focus</span>
                <span className="v">embedded + robotics integration</span>
              </div>
              <div className="kv">
                <span className="k">flagship</span>
                <span className="v">sonny_humanoid_platform</span>
              </div>
              <div className="kv">
                <span className="k">status</span>
                <span className="v v--ok">active_development</span>
              </div>
            </div>
          </div>
          <p className="hero__note">
            (Translation: you’re not hiring a “web dev who sometimes touches hardware” — you’re hiring a builder.)
          </p>
        </div>
      </div>
    </section>
  );
}