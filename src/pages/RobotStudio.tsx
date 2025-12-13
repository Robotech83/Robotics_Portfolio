import "../styles/robotstudio.css";

import MovementModule from "../pages/modules/MovementModule";
import VirtualModel from "../pages/modules/VirtualModel";



export default function RobotStudio() {
  return (
    <div className="robotstudio-wrapper">

      <div className="robotstudio-header">
        <h1 className="robotstudio-title">Robot Studio</h1>
        <p className="robotstudio-subtitle">Virtual InMoov Control Environment</p>
      </div>
      

      <div className="robotstudio-layout">

        {/* LEFT — Movement controls */}
        <div className="robotstudio-left">
          <MovementModule />
        </div>

        {/* RIGHT — 3D InMoov viewer */}
        <div className="robotstudio-container">
          <div className="robotstudio-right">
            <VirtualModel />
          </div>
        </div>
      </div>
    </div>
  );
}
