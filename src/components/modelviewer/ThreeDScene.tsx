import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";

import Floor from "./Floor";
import GridHelper from "./GridHelper";
import SonnyModel from "./SonnyModel"; // Make sure this path is correct

interface ThreeDSceneProps {
  viewerSettings: {
    showShadows: boolean;
    showReflections: boolean;
    showGrid: boolean;
    showAxes: boolean;
    wireframe: boolean;
    ambientLightIntensity: number;
    directionalLightIntensity: number;
    backgroundColor: string;
  };
  modelScale: number;
  modelRotation: { x: number; y: number; z: number };
  modelPosition: { x: number; y: number; z: number };
}

export default function ThreeDScene({
  viewerSettings,
  modelScale,
  modelRotation,
  modelPosition
}: ThreeDSceneProps) {

  return (
    <Canvas shadows={viewerSettings.showShadows}>
      <color attach="background" args={[viewerSettings.backgroundColor]} />

      <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={60} />
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        maxDistance={20}
        minDistance={2}
      />

      <ambientLight intensity={viewerSettings.ambientLightIntensity} />
      <directionalLight
        castShadow={viewerSettings.showShadows}
        position={[5, 5, 5]}
        intensity={viewerSettings.directionalLightIntensity}
      />

      {viewerSettings.showReflections && <Environment preset="city" />}

      <Floor />
      {viewerSettings.showGrid && <GridHelper />}

      {/* -- Sonny Here -- */}
      <SonnyModel
        scale={modelScale}
        rotation={modelRotation}
        position={modelPosition}
        wireframe={viewerSettings.wireframe}
      />

      {viewerSettings.showAxes && <axesHelper args={[3]} />}
    </Canvas>
  );
}