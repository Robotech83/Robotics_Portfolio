import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import RobotArm from "./RobotArm";

export default function RobotScene({ joints, target }: any) {
  return (
    <div className="rk-canvasWrap">
      <Canvas className="rk-canvas" camera={{ position: [4, 4, 6], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />

        <Grid infiniteGrid />

        <mesh position={[target.x / 100, target.z / 100, target.y / 100]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        <RobotArm joints={joints} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}