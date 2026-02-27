import type { Vector3, JointAngles } from "../types/kinematics";

export class KinematicsEngine {
  static forwardKinematics(angles: JointAngles): Vector3 {
    return { x: 0, y: 0, z: 0 };
  }

  static inverseKinematics(target: Vector3): JointAngles {
    return { shoulder: 0, elbow: 0, wrist: 0 };
  }
}
