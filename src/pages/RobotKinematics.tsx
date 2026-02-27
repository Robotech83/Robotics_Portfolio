import { useState } from "react";
import RobotScene from "../components/robotArm/scenes/RobotScene";
import Controls from "../components/robotArm/controls/Controls";
import "../styles/robotKinematics.css";
import { useNavigate } from "react-router-dom";


export default function RobotKinematics() {
  const [mode, setMode] = useState<"FK" | "IK">("FK");

  const [joints, setJoints] = useState({
    shoulderRoll: 0,
    shoulderPitch: 0,
    elbowPitch: 0,
    wristPitch: 0,
    wristRoll: 0,
  });

  const navigate = useNavigate();

  const [target, setTarget] = useState({ x: 300, y: 0, z: 200 });

  const solveIK = () => {
    // keep your solver call here if you have it wired in
  };

  return (
    <div className="rk-page">
      <div className="rk-header">
      <button className="rk-back" onClick={() => navigate("/")}>
        ← Back
      </button>
        <h1>Virtual Robot Arm — FK/IK Studio</h1>
        <p>FK is live. IK is in progress.</p>
      </div>

      <div className="rk-grid">
        <div className="rk-viewport">
          <div className="rk-wip">
            <span className="rk-blink">▌</span> MODULE STATUS: IN DEVELOPMENT
          </div>

          <RobotScene joints={joints} target={target} />
        </div>

        <div className="rk-panel">
          <Controls
            joints={joints}
            setJoints={setJoints}
            target={target}
            setTarget={setTarget}
            mode={mode}
            setMode={setMode}
            solveIK={solveIK}
          />
        </div>
      </div>
    </div>
  );
}