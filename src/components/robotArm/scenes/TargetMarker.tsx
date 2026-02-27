export default function TargetMarker() {
  return (
    <mesh position={[1.5, 1.5, 0]}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
