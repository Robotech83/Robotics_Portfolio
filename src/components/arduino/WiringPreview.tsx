type Props = {
  title: string;
  wiringImage?: string;
  demoUrl?: string;
};

export function WiringPreview({ title, wiringImage, demoUrl }: Props) {
  if (wiringImage) {
    return (
      <div className="wiring-preview">
        <img src={wiringImage} alt={`${title} wiring`} />
      </div>
    );
  }

  return (
    <div className="wiring-placeholder">
      <div className="placeholder-line">
        <span className="terminal-prompt">&gt;</span> wiring_photo:{" "}
        <span className="muted">not added yet</span>
      </div>

      <div className="placeholder-line">
        <span className="terminal-prompt">&gt;</span> demo_clip:{" "}
        <span className="muted">{demoUrl ? "added" : "not added yet"}</span>
      </div>
    </div>
  );
}
