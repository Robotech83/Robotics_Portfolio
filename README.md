# Robotics Portfolio

**Status:** Prototype / Active Development  
**Focus:** Robotics Systems • Embedded Software • Perception • Human–Robot Interaction

This repository contains my **robotics portfolio and digital twin environment**, built to design, test, and demonstrate an **offline humanoid robot** named **Sonny**.  
The project emphasizes **real-world robotics workflows**: partial hardware, debugging under constraints, simulation-first development, and modular system design.

---

## 🧠 Project Overview

Sonny is an **offline humanoid robotics platform** designed to explore how perception, voice interaction, motion control, and diagnostics work together in a real robot system.

The portfolio serves as:
- a **digital twin** for hardware-in-progress
- a **control interface** similar to internal robotics dashboards
- a **proof-of-knowledge** artifact for robotics and embedded systems roles

---

## 🧩 System Architecture

### Core Subsystems

- **Perception**
  - Face detection and tracking
  - Real-time object detection (TensorFlow.js / COCO-SSD)
  - Task-specific perception modules:
    - Clothing detection (folding tasks)
    - Kitchenware detection (dish handling tasks)

- **Voice & Interaction**
  - Wake-word system
  - Offline speech recognition
  - Text-to-speech output
  - Command training and routing

- **Motion & Control**
  - Joint-based motion control
  - Servo angle computation
  - Serial communication to embedded controllers
  - Kinematics visualization (in progress)

- **Digital Twin & Simulation**
  - 3D humanoid model viewer
  - Virtual arm studio
  - Simulation-first workflow when hardware is unavailable

- **System & Diagnostics**
  - CPU / memory monitoring
  - Network and power modules
  - System health and fault-handling UI

---

## 🖥️ Technologies Used

- **Languages:** Python, TypeScript, JavaScript  
- **Frontend:** React, Vite, Three.js  
- **Robotics & Embedded:** Raspberry Pi, Arduino, Servo Control, Serial Communication  
- **Perception & AI:** OpenCV, TensorFlow.js, COCO-SSD  
- **3D & Simulation:** GLTF (.glb), Blender (source assets kept separate)  
- **Tooling:** Git, Git LFS, Linux

---

## 📊 System Status

This project is intentionally transparent about development state.

- ✅ Face detection & object detection working
- ✅ Offline voice pipeline functional
- 🟡 Motion control limited by current hardware availability
- 🟡 Kinematics tools actively iterating
- ⏸ Some physical components pending repair or redesign

A full system status overview is available inside the portfolio UI.

---

## 🎯 Development Philosophy

This project prioritizes **engineering realism over cosmetic completeness**.

Hardware failures, incomplete assemblies, and limited resources are treated as part of the design process. When hardware is unavailable, development continues through simulation, modular testing, and virtual tools.

---

## 🚀 Running the Project Locally

```bash
npm install
npm run dev
