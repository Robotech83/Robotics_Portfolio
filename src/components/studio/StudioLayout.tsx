type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export function StudioLayout({ left, right }: Props) {
  return (
    <div className="robotstudio-layout">
      {/* LEFT — Movement controls */}
      <div className="robotstudio-left">{left}</div>

      {/* RIGHT — 3D InMoov viewer */}
      <div className="robotstudio-container">
        <div className="robotstudio-right">{right}</div>
      </div>
    </div>
  );
}
