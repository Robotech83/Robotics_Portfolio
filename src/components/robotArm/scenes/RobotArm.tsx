export default function RobotArm({ joints }: any) {
  const {
    shoulderRoll,     // ✅ was shoulderYaw
    shoulderPitch,
    elbowPitch,
    wristPitch,
    wristRoll,
  } = joints;

  const upperArm = 1.5;
  const forearm = 1.2;
  const hand = 0.5;

  return (
    <group>
      {/* BASE */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 0.3]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>

      {/* SHOULDER YAW (using shoulderRoll value) */}
      <group rotation={[0, (shoulderRoll ?? 0) * Math.PI / 180, 0]}>
        {/* SHOULDER PITCH */}
        <group rotation={[(shoulderPitch ?? 0) * Math.PI / 180, 0, 0]}>

          {/* UPPER ARM */}
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[0.2, 1, 0.2]} />
            <meshStandardMaterial color="#16a34a" />
          </mesh>

          {/* ELBOW */}
          <group
            position={[0, upperArm, 0]}
            rotation={[(elbowPitch ?? 0) * Math.PI / 180, 0, 0]}
          >
            {/* FOREARM */}
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[0.15, 1, 0.15]} />
              <meshStandardMaterial color="#f97316" />
            </mesh>

            {/* WRIST PITCH */}
            <group
              position={[0, forearm, 0]}
              rotation={[(wristPitch ?? 0) * Math.PI / 180, 0, 0]}
            >
              {/* WRIST ROLL */}
              <group rotation={[0, 0, (wristRoll ?? 0) * Math.PI / 180]}>
                {/* HAND */}
                <mesh position={[0, hand / 2, 0]}>
                  <boxGeometry args={[0.2, hand, 0.4]} />
                  <meshStandardMaterial color="#eab308" />
                </mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}