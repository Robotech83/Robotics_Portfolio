import React from "react";

type Mode = "FK" | "IK";

type Joints = {
  shoulderRoll: number;
  shoulderPitch: number;
  elbowPitch: number;
  wristPitch: number;
  wristRoll: number;
};

type Props = {
  mode?: Mode;
  setMode?: React.Dispatch<React.SetStateAction<Mode>>;
  joints: Joints;
  setJoints: React.Dispatch<React.SetStateAction<Joints>>;

  // Optional IK props (safe if you don't use them yet)
  target?: { x: number; y: number; z: number };
  setTarget?: React.Dispatch<React.SetStateAction<{ x: number; y: number; z: number }>>;
  solveIK?: () => void;
};

export default function Controls({
  mode,
  setMode,
  joints,
  setJoints,
  target,
  setTarget,
  solveIK,
}: Props) {
  const handleJointChange = (key: keyof Joints, v: number) => {
    setJoints((prev) => ({ ...prev, [key]: v }));
  };

  return (
    <div className="rk-controls">
      <h3>Controls</h3>

      {/* Mode toggle (only shows if you passed mode props) */}
      {mode && setMode && (
        <div className="rk-control-row">
          <label>Mode</label>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" onClick={() => setMode("FK")}>
              FK
            </button>
            <button type="button" onClick={() => setMode("IK")}>
              IK
            </button>
          </div>
        </div>
      )}

      {/* FK Sliders */}
      {(Object.entries(joints) as [keyof Joints, number][]).map(([key, value]) => (
        <div key={String(key)} className="rk-control-row">
          <label>{String(key)}</label>

          <input
            type="range"
            min={-180}
            max={180}
            value={value}
            onChange={(e) => handleJointChange(key, Number(e.target.value))}
          />

          <span>{value.toFixed(0)}°</span>
        </div>
      ))}

      {/* Optional IK Target controls */}
      {target && setTarget && (
        <>
          <hr />

          <h4>IK Target</h4>

          {(["x", "y", "z"] as const).map((axis) => (
            <div key={axis} className="rk-control-row">
              <label>{axis.toUpperCase()}</label>

              <input
                type="range"
                min={-500}
                max={500}
                value={target[axis]}
                onChange={(e) =>
                  setTarget((prev) => ({
                    ...prev,
                    [axis]: Number(e.target.value),
                  }))
                }
              />

              <span>{target[axis].toFixed(0)}</span>
            </div>
          ))}

          {solveIK && (
            <button type="button" onClick={solveIK}>
              Solve IK
            </button>
          )}
        </>
      )}
    </div>
  );
}