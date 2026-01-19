import { useState } from "react";
import "../../styles/modules/movementmodule.css";
//import { Link, Route } from "react-router-dom";



/**
 * MovementModule - Advanced Robotics Panel
 * - categories: Head, Left Arm, Right Arm, Hands, Presets
 * - each control updates local state
 * - "Send Pose" emits a `robot:pose` CustomEvent with the joint map
 *
 * NOTE: The event payload is intentionally simple and extensible:
 * {
 *   source: 'MovementModule',
 *   pose: { headTurn: 10, headTilt: 5, leftShoulder: 30, ... },
 *   meta: { preset: 'wave' }
 * }
 */


type Pose = {
  headTurn?: number;
  headTilt?: number;
  leftShoulder?: number;
  leftElbow?: number;
  rightShoulder?: number;
  rightElbow?: number;
  leftHand?: number;
  rightHand?: number;
  // add more joints as needed
};

const DEFAULT_POSE: Pose = {
  headTurn: 0,
  headTilt: 0,
  leftShoulder: 10,
  leftElbow: 60,
  rightShoulder: 10,
  rightElbow: 60,
  leftHand: 0,
  rightHand: 0,
};

export default function MovementModule() {
  const [pose, setPose] = useState<Pose>({ ...DEFAULT_POSE });
  const [category, setCategory] = useState<
    "head" | "left" | "right" | "hands" | "presets"
  >("head");

  // PRESETS: add / edit to taste
  const presets: Record<string, Pose> = {
    rest: { headTurn: 0, headTilt: 0, leftShoulder: 5, leftElbow: 20, rightShoulder: 5, rightElbow: 20, leftHand: 0, rightHand: 0 },
    wave: { headTurn: 10, headTilt: 0, leftShoulder: 40, leftElbow: 20, rightShoulder: 5, rightElbow: 20, leftHand: 30 },
    salute: { headTurn: 0, headTilt: -10, rightShoulder: 60, rightElbow: 10, leftShoulder: 5, leftElbow: 20 },
    point: { headTurn: 15, headTilt: 0, rightShoulder: 30, rightElbow: 10, rightHand: 10 },
    tpose: { headTurn: 0, headTilt: 0, leftShoulder: 90, rightShoulder: -90, leftElbow: 0, rightElbow: 0 },
  };

  const applyPreset = (name: string) => {
    const p = presets[name];
    if (p) {
      setPose((prev) => ({ ...prev, ...p }));
      // Immediately send preset to listeners
      sendPose(p, { preset: name });
    }
  };

  const sendPose = (poseToSend: Pose = pose, meta: Record<string, any> = {}) => {
    const detail = {
      source: "MovementModule",
      pose: poseToSend,
      meta,
      timestamp: Date.now(),
    };
    window.dispatchEvent(new CustomEvent("robot:pose", { detail }));
  };

  const updateJoint = (key: keyof Pose, value: number) => {
    setPose((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="movement-module">
      <h2 className="mm-title">Advanced Robotics Panel</h2>

      <div className="mm-topbar">
        <div className="tabs">
          <button className={category === "head" ? "active" : ""} onClick={() => setCategory("head")}>Head</button>
          <button className={category === "left" ? "active" : ""} onClick={() => setCategory("left")}>Left Arm</button>
          <button className={category === "right" ? "active" : ""} onClick={() => setCategory("right")}>Right Arm</button>
          <button className={category === "hands" ? "active" : ""} onClick={() => setCategory("hands")}>Hands</button>
          <button className={category === "presets" ? "active" : ""} onClick={() => setCategory("presets")}>Presets</button>
        </div>

        <div className="mm-actions">
          <button className="btn" onClick={() => sendPose()}>Send Pose</button>
          <button className="btn ghost" onClick={() => { setPose({ ...DEFAULT_POSE }); sendPose(DEFAULT_POSE, { preset: "reset" }); }}>Reset</button>
        </div>
      </div>

      <div className="mm-body">
        {category === "head" && (
          <div className="panel">
            <label>Head Turn (Y) {Math.round(pose.headTurn ?? 0)}°</label>
            <input type="range" min={-90} max={90} value={pose.headTurn ?? 0}
              onChange={(e) => updateJoint("headTurn", parseInt(e.target.value))} />
            <label>Head Tilt (X) {Math.round(pose.headTilt ?? 0)}°</label>
            <input type="range" min={-45} max={45} value={pose.headTilt ?? 0}
              onChange={(e) => updateJoint("headTilt", parseInt(e.target.value))} />
            <div className="quick-actions">
              <button onClick={() => sendPose({ headTurn: 0, headTilt: 0 }, { action: "center_head" })}>Center</button>
              <button onClick={() => sendPose({ headTurn: 30 }, { action: "look_right" })}>Look Right</button>
              <button onClick={() => sendPose({ headTurn: -30 }, { action: "look_left" })}>Look Left</button>
            </div>
          </div>
        )}

        {category === "left" && (
          <div className="panel">
            <label>Left Shoulder {Math.round(pose.leftShoulder ?? 0)}°</label>
            <input type="range" min={-10} max={180} value={pose.leftShoulder ?? 0}
              onChange={(e) => updateJoint("leftShoulder", parseInt(e.target.value))} />
            <label>Left Elbow {Math.round(pose.leftElbow ?? 0)}°</label>
            <input type="range" min={0} max={180} value={pose.leftElbow ?? 0}
              onChange={(e) => updateJoint("leftElbow", parseInt(e.target.value))} />
            <div className="quick-actions">
              <button onClick={() => sendPose({ leftShoulder: 40, leftElbow: 20 }, { action: "left_wave" })}>Wave Prep</button>
            </div>
          </div>
        )}

        {category === "right" && (
          <div className="panel">
            <label>Right Shoulder {Math.round(pose.rightShoulder ?? 0)}°</label>
            <input type="range" min={-10} max={180} value={pose.rightShoulder ?? 0}
              onChange={(e) => updateJoint("rightShoulder", parseInt(e.target.value))} />
            <label>Right Elbow {Math.round(pose.rightElbow ?? 0)}°</label>
            <input type="range" min={0} max={180} value={pose.rightElbow ?? 0}
              onChange={(e) => updateJoint("rightElbow", parseInt(e.target.value))} />
            <div className="quick-actions">
              <button onClick={() => sendPose({ rightShoulder: 60, rightElbow: 10 }, { action: "salute" })}>Salute</button>
            </div>
          </div>
        )}

        {category === "hands" && (
          <div className="panel">
            <label>Left Hand Grip {Math.round(pose.leftHand ?? 0)}%</label>
            <input type="range" min={0} max={100} value={pose.leftHand ?? 0}
              onChange={(e) => updateJoint("leftHand", parseInt(e.target.value))} />
            <label>Right Hand Grip {Math.round(pose.rightHand ?? 0)}%</label>
            <input type="range" min={0} max={100} value={pose.rightHand ?? 0}
              onChange={(e) => updateJoint("rightHand", parseInt(e.target.value))} />
            <div className="quick-actions">
              <button onClick={() => sendPose({ leftHand: 100, rightHand: 100 }, { action: "grip" })}>Grip</button>
              <button onClick={() => sendPose({ leftHand: 0, rightHand: 0 }, { action: "release" })}>Release</button>
            </div>
          </div>
        )}

        {category === "presets" && (
          <div className="panel presets">
            <h4>Presets</h4>
            <div className="preset-grid">
              {Object.keys(presets).map((name) => (
                <div key={name} className="preset-card">
                  <div className="preset-name">{name}</div>
                  <div className="preset-actions">
                    <button onClick={() => applyPreset(name)}>Apply</button>
                    <button onClick={() => sendPose(presets[name], { preset: name })}>Send</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mm-footer">
        <small>Advanced Robotics Panel — Movement controls & presets</small>
      </div>
   




    </div>
  );
}
