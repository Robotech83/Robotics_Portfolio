import type { ArduinoProject } from "../types/arduino";

export const arduinoProjects: ArduinoProject[] = [
  {
    id: "sonny-hand",
    title: "Sonny Hand Controller",
    tagline: "5-servo hand gestures via PCA9685 (I2C PWM driver)",
    description:
      "Controls a robotic hand using Arduino + PCA9685. Includes open/close/rest style gesture routines and servo tuning. Built as a real robotics control demo.",
    skills: ["Arduino", "I2C", "PCA9685", "Servo Control", "Robotics"],
    repoUrl: "https://github.com/Robotech83/SonnyHand.ino",
    status: "featured",
  },
  {
    id: "aria-prototype",
    title: "Aria Humanoid Prototype",
    tagline: "Early-stage hardware prototype & iteration log",
    description:
      "Prototype repo documenting early humanoid design direction. Focused on physical iteration, placement, and practical build planning (hardware-first).",
    skills: ["Prototyping", "Hardware", "Robotics Design", "Iteration"],
    repoUrl: "https://github.com/Robotech83/Aria",
    status: "in-progress",
  },
  {
    id: "robot-arm",
    title: "Robot Arm Controller",
    tagline: "Arduino-based robotic arm with servo control",
    description:
      "Prototype repo documenting early humanoid design direction. Focused on physical iteration, placement, and practical build planning (hardware-first).",
    skills: ["Prototyping", "Hardware", "Robotics Design", "Iteration"],
    repoUrl: "https://github.com/Robotech83/Robot_Arm.ino",
    status: "in-progress",
  },
  {
    id: "joystick-car",
    title: "Car controller by Joystick",
    tagline: "Arduino-based RC car with analog joystick control",
    description:
      "An Arduino-based RC car controlled by an analog joystick. Features real-time motor control and feedback.",
    skills: ["Arduino", "Joystick", "Motor Control", "Embedded Systems"],
    repoUrl: "https://github.com/Robotech83/car_joystick.ino",
    status: "completed",
  },
  {
    id: "I2CTester",
    title: "I2C Tester",
    tagline: "Arduino-based I2C bus scanner and device tester",
    description:
      "An Arduino-based I2C bus scanner and device tester. Useful for debugging I2C connections and identifying devices on the bus.",
    skills: ["Arduino", "I2C", "Scanning", "Debugging"],
    repoUrl: "https://github.com/Robotech83/I2CTest.ino",
    status: "completed",
  },
];
