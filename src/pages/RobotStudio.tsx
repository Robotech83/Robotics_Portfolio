import UnderConstruction from "./UnderConstruction";

export default function RobotStudio() {
  return (
    <UnderConstruction
      title="Robot Studio"
      description="Paused while I fix model loading and deployment issues."
      status={[
        "Build error: model asset path failing after Vite build",
        "Next: move .glb into /public and verify GitHub Pages base path",
        "Then: re-enable Robot Studio route",
      ]}
    />
  );
}
