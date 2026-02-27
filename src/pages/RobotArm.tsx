import { useMemo, useState } from "react";
import RobotScene from "../components/robotArm/scenes/RobotScene";
import Controls from "../components/robotArm/controls/Controls";
import "./styles/studio.css";

export type Joints = {
  shoulderRoll: number;
  shoulderPitch: number;
  elbowPitch: number;
  wristPitch: number;
  wristRoll: number;
};

export default function App() {
  const [mode, setMode] = useState<"FK" | "IK">("FK");

  const [joints, setJoints] = useState<Joints>({
    shoulderRoll: 0,
    shoulderPitch: 0,
    elbowPitch: 0,
    wristPitch: 0,
    wristRoll: 0,
  });

  // If you already have a target state for IK, keep yours.
  // This is just a safe default so RobotScene has something.
  const target = useMemo(() => ({ x: 120, y: 80, z: 60 }), []);

  return (
    <div className="studio-grid">
      {/* LEFT: 3D viewport */}
      <section className="studio-left">
        <RobotScene joints={joints} target={target} />
      </section>

      {/* RIGHT: Controls panel */}
      <aside className="studio-right">
        <Controls
          mode={mode}
          setMode={setMode}
          joints={joints}
          setJoints={setJoints}
        />
      </aside>
    </div>
  );
}