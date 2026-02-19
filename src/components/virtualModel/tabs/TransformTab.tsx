// src/pages/controlhub/VirtualModel/components/tabs/TransformTab.tsx

import React from "react";
import type { RotationDeg, Vec3Number } from "../types";

type Props = {
  fileInputRef: React.RefObject<HTMLInputElement>;

  modelScale: number;
  setModelScale: React.Dispatch<React.SetStateAction<number>>;

  modelRotation: RotationDeg;
  setModelRotation: React.Dispatch<React.SetStateAction<RotationDeg>>;

  modelPosition: Vec3Number;
  setModelPosition: React.Dispatch<React.SetStateAction<Vec3Number>>;

  onImportFile: (file: File) => void;
};

export default function TransformTab({
  fileInputRef,
  modelScale,
  setModelScale,
  modelRotation,
  setModelRotation,
  modelPosition,
  setModelPosition,
  onImportFile,
}: Props) {
  return (
    <div className="tab-panel-top">
      <div className="control-section">
        <h4>Model Transform</h4>

        {/* SCALE */}
        <div className="control-group-top">
          <div className="slider-control">
            <div className="slider-header">
              <label>Scale</label>
              <span className="slider-value">{modelScale.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="10"
              step="0.1"
              value={modelScale}
              onChange={(e) => setModelScale(parseFloat(e.target.value))}
            />
          </div>
        </div>

        {/* POSITION */}
        <div className="control-group-top">
          <h5>Position</h5>

          <div className="vector-controls-top">
            {(["x", "y", "z"] as const).map((axis) => (
              <div className="axis-control" key={axis}>
                <span className="axis-label">{axis.toUpperCase()}</span>
                <input
                  type="range"
                  min={axis === "y" ? -3 : -5}
                  max={axis === "y" ? 3 : 5}
                  step="0.1"
                  value={modelPosition[axis]}
                  onChange={(e) =>
                    setModelPosition((prev) => ({ ...prev, [axis]: parseFloat(e.target.value) }))
                  }
                />
                <span className="axis-value">{modelPosition[axis].toFixed(1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROTATION */}
        <div className="control-group-top">
          <h5>Rotation</h5>

          <div className="vector-controls-top">
            {(["x", "y", "z"] as const).map((axis) => (
              <div className="axis-control" key={axis}>
                <span className="axis-label">{axis.toUpperCase()}</span>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  step="1"
                  value={modelRotation[axis]}
                  onChange={(e) =>
                    setModelRotation((prev) => ({ ...prev, [axis]: parseInt(e.target.value) }))
                  }
                />
                <span className="axis-value">{modelRotation[axis]}°</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMPORT */}
        <div className="model-import-section">
          <button className="import-btn-top" onClick={() => fileInputRef.current?.click()}>
            Import 3D Model
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".glb,.gltf,.obj,.fbx,.stl"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImportFile(file);
            }}
          />

          <p className="file-hint">Supports: .glb, .gltf, .obj, .fbx, .stl</p>
        </div>
      </div>
    </div>
  );
}
