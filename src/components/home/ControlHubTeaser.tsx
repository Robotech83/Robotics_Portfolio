import "../../styles/home.css";

export default function ControlHubTeaser() {
  return (
    <section className="home-section">
      <div className="hub-card">
        <div className="hub-left">
          <h3 className="home-h3">Control Hub</h3>
          <p className="home-sub">
            Your software cockpit — dashboards, diagnostics, and the Virtual Sonny model.
          </p>
        </div>

        <a className="home-btn home-btn--primary" href="/#/control-hub">
          Launch Control Hub
        </a>
      </div>
    </section>
  );
}
