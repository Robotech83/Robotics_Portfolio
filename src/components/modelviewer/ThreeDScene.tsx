import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";

import Floor from "./Floor";
import GridHelper from "./GridHelper";

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

function Sonny({
  modelScale,
  modelRotation,
  modelPosition,
}: {
  modelScale: number;
  modelRotation: { x: number; y: number; z: number };
  modelPosition: { x: number; y: number; z: number };
}) {
  // ✅ GitHub Pages safe path (adds /Robotics_Portfolio/ automatically)
  const url = `${import.meta.env.BASE_URL}models/Sonny.glb`;
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      scale={modelScale}
      rotation={[modelRotation.x, modelRotation.y, modelRotation.z]}
      position={[modelPosition.x, modelPosition.y, modelPosition.z]}
    />
  );
}

export default function ThreeDScene({
  viewerSettings,
  modelScale,
  modelRotation,
  modelPosition,
}: ThreeDSceneProps) {
  return (
    <Canvas shadows={viewerSettings.showShadows}>
      <color attach="background" args={[viewerSettings.backgroundColor]} />

      <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={60} />
      <OrbitControls enablePan enableZoom enableRotate maxDistance={20} minDistance={2} />

      <ambientLight intensity={viewerSettings.ambientLightIntensity} />
      <directionalLight
        castShadow={viewerSettings.showShadows}
        position={[5, 5, 5]}
        intensity={viewerSettings.directionalLightIntensity}
      />

      {viewerSettings.showReflections && <Environment preset="city" />}

      <Floor />
      {viewerSettings.showGrid && <GridHelper />}

      {/* ✅ Load model properly */}
      <Suspense fallback={null}>
        <Sonny
          modelScale={modelScale}
          modelRotation={modelRotation}
          modelPosition={modelPosition}
        />
      </Suspense>

      {viewerSettings.showAxes && <axesHelper args={[3]} />}
    </Canvas>
  );
}

// Optional preload
useGLTF.preload(`${import.meta.env.BASE_URL}models/Sonny.glb`);
