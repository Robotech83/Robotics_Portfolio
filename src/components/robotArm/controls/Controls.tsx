export default function Controls({
  joints,
  setJoints,
  target,
  setTarget,
  mode,
  setMode,
  solveIK
}: any) {

  const updateJoint = (key: string, value: number) =>
    setJoints({ ...joints, [key]: value });

  const updateTarget = (key: string, value: number) =>
    setTarget({ ...target, [key]: value });

  return (
    <div className="controls">
      <h3>Mode</h3>
      <button onClick={() => setMode("FK")}>FK</button>
      <button onClick={() => setMode("IK")}>IK</button>

      {mode === "FK" && (
        <>
          <h3>Joint Angles</h3>
          {Object.entries(joints).map(([key, value]) => (
            <div key={key}>
              <label>{key}</label>
              <input
                type="range"
                min={-90}
                max={90}
                value={value as number}
                onChange={e => updateJoint(key, +e.target.value)}
              />
              <span>{value}°</span>
            </div>
          ))}
        </>
      )}

      {mode === "IK" && (
        <>
          <h3>IK Target (mm)</h3>

          {["x", "y", "z"].map(axis => (
            <div key={axis}>
              <label>{axis.toUpperCase()}</label>
              <input
                type="range"
                min={-400}
                max={400}
                value={target[axis]}
                onChange={e => updateTarget(axis, +e.target.value)}
              />
              <span>{target[axis]}</span>
            </div>
          ))}

          <button onClick={solveIK}>Solve IK</button>
        </>
      )}
    </div>
  );
}
