export default function GridHelper() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[-2, -1.45, -3]}>
      <gridHelper args={[10, 10, "#4cc9f0", "#1a1a2e"]} />
    </mesh>
  );
}
