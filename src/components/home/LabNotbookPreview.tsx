const entries = [
  { title: "Camera Debugging Investigation", note: "CSI detection issues, conflict isolation, repeatable tests." },
  { title: "Servo Power Distribution Testing", note: "Load validation, sag mitigation, staged ramping plan." },
  { title: "Voice Command Integration", note: "Command taxonomy + demo-friendly responses." },
];

export default function LabNotebookPreview() {
  return (
    <section className="section">
      <div className="section__head">
        <h2 className="section__title">Engineering Lab Notebook</h2>
        <p className="section__sub">Proof you can debug, document, and iterate like a real engineer.</p>
      </div>

      <div className="grid">
        {entries.map((e) => (
          <div className="gridCard" key={e.title}>
            <h3 className="gridCard__title">{e.title}</h3>
            <p className="gridCard__desc">{e.note}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14 }}>
        <a className="btn btn--primary" href="/#/lab-notebook">
          View All Logs
        </a>
      </div>
    </section>
  );
}