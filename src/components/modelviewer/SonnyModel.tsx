import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface Props {
  scale: number;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  wireframe: boolean;
}

// Load model outside component for caching
useGLTF.preload("/models/Sonny.glb");

export default function SonnyModel({ scale, rotation, position, wireframe }: Props) {
  const gltf = useGLTF("/models/Sonny.glb");

  // Apply wireframe mode to all child materials
  useEffect(() => {
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.wireframe = wireframe;
        child.material.needsUpdate = true;
      }
    });
  }, [wireframe, gltf]);

  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={[position.x, position.y, position.z]}
      rotation={[
        rotation.x * (Math.PI / 100),
        rotation.y * (Math.PI / 180),
        rotation.z * (Math.PI / 180)
      ]}
    />
  );
}
