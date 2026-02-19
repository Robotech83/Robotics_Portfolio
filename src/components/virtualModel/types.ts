// src/pages/controlhub/VirtualModel/types.ts

export interface ViewerSettings {
  showGrid: boolean;
  showShadows: boolean;
  showAxes: boolean;
  showReflections: boolean;
  wireframe: boolean;
  ambientLightIntensity: number;
  directionalLightIntensity: number;
  backgroundColor: string;
}

export type VMTabKey = "transform" | "display" | "lighting";

export type Vec3Number = { x: number; y: number; z: number };
export type RotationDeg = { x: number; y: number; z: number };
