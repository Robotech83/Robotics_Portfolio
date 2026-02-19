// src/pages/controlhub/VirtualModel/components/ViewerStats.tsx

import type { RotationDeg, Vec3Number } from "./types";

type Props = {
  modelScale: number;
  modelRotation: RotationDeg;
  modelPosition: Vec3Number;
};

export default function ViewerStats({ modelScale, modelRotation, modelPosition }: Props) {
  return (
    <div className="viewer-stats-top">
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label-top">SCALE</span>
          <span className="stat-value-top">{modelScale.toFixed(2)}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label-top">ROTATION</span>
          <span className="stat-value-top">
            X: {modelRotation.x}° | Y: {modelRotation.y}° | Z: {modelRotation.z}°
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label-top">POSITION</span>
          <span className="stat-value-top">
            X: {modelPosition.x.toFixed(2)} | Y: {modelPosition.y.toFixed(2)} | Z:{" "}
            {modelPosition.z.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
