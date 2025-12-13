import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={50}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#1a1a2e"
        metalness={0.8}
        roughness={1}
      />
    </mesh>
  );
}
