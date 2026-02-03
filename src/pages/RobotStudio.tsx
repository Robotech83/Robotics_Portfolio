import "../styles/robotstudio.css";

//import MovementModule from "../pages/modules/MovementModule";
//import VirtualModel from "../pages/modules/VirtualModel";

//import { StudioHeader } from "../components/studio/StudioHeader";
//import { StudioLayout } from "../components/studio/StudioLayout";
import UnderConstruction from "./UnderConstruction";

export default function RobotStudio() {
  {/*return (
    <div className="robotstudio-wrapper">
      <StudioHeader
        title="Robot Studio"
        subtitle="Virtual InMoov Control Environment"
      />

      <StudioLayout left={<MovementModule />} right={<VirtualModel />} />
    </div>
  );*/}

  <UnderConstruction
  title="Robot Studio"
  description="Paused while I fix model loading and deployment issues."
  status={[
    "Build error: model asset path failing after Vite build",
    "Next: move .glb into /public and verify GitHub Pages base path",
    "Then: re-enable Robot Studio route",
  ]}
/>
}
