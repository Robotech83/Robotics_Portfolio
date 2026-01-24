import { Routes, Route } from "react-router-dom";
// Importing components
import Hero from "./components/Hero";
import  Dashboard from "./components/Dashboard";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { LabNotebook } from "./components/LabNotebook";
import { ContactTerminal } from "./components/ContactTerminal";
import FloatingAboutButton from "./components/FloatingAboutButton";
import ScrollToTop from "./components/ScrollToTop";





// Importing pages
import ControlHub from "./pages/ControlHub";
import AboutMe from "./pages/AboutMe";
import VirtualModel from "./pages/modules/VirtualModel";
import RobotStudio from "./pages/RobotStudio";
import AIAssistantPage from "./pages/AIAssistant";
import ObjectScanner from "./pages/ObjectScanner";

import PowerPage from "./pages/dashboard/PowerPage";
import NetworkPage from "./pages/dashboard/NetworkPage";
import MovementModule from "./pages/modules/MovementModule";
import VoiceModule from "./pages/modules/VoiceModule";

import WakeWordPage from "./pages/voicemodule/WakeWord";
import SpeechOutputPage from "./pages/voicemodule/SpeechOutput";
import CommandTrainerPage from "./pages/voicemodule/CommandTrainer";

import JSProjectsPage from "./pages/JSProjectsPage";
import SkillPlaceholderPage from "./pages/SkillPlaceholderPage";







function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* HOMEPAGE (everything directly inside App.tsx) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Dashboard />
              <Projects />
              <Skills />
              <LabNotebook />
              <ContactTerminal />
              

              <FloatingAboutButton />
            </>
          }
        />

        {/* Control Hub */}
        <Route path="/control-hub" element={<ControlHub />} />
        {/* Virtual Model Viewer */}
        <Route path="/virtual-model" element={<VirtualModel />} />
        {/* Robot Studio */}
        <Route path="/robotstudio" element={<RobotStudio />} />
        {/* AI Assistant */}
        <Route path="/AIAssistant" element={<AIAssistantPage />} />
        {/* About Me Page */}
        <Route path="/about" element={<AboutMe />} />
        {/* Object Scanner */}
        <Route path="/object-scanner" element={<ObjectScanner />} />
        {/* Dashboard Sub-Pages */}
         {/* Modules */}
        <Route path="/movement-module" element={<MovementModule />} />
        <Route path="/voice-module" element={<VoiceModule />} />
        <Route path="/power-module" element={<PowerPage />} />
        <Route path="/network-module" element={<NetworkPage />} />
        {/* Voice Module Sub-Pages */}
        <Route path="/voice/wakeword" element={<WakeWordPage />} />
        <Route path="/voice/tts" element={<SpeechOutputPage />} />
        <Route path="/voice/commands" element={<CommandTrainerPage />} />

          {/* JavaScript Projects Page */}
        <Route path="/js-projects" element={<JSProjectsPage />} />
        {/* Skill Placeholder Pages */}
        <Route
  path="/python-projects"
  element={
    <SkillPlaceholderPage
      title="Python Projects"
      description="Automation, robotics scripting, and system tooling projects."
    />
  }
/>

<Route
  path="/arduino-projects"
  element={
    <SkillPlaceholderPage
      title="Arduino Projects"
      description="Embedded systems, servo control, and hardware prototyping."
    />
  }
/>

<Route
  path="/linux-projects"
  element={
    <SkillPlaceholderPage
      title="Linux Projects"
      description="System setup, automation, and robotics environment tooling."
    />
  }
/>

<Route
  path="/bash-projects"
  element={
    <SkillPlaceholderPage
      title="Bash Projects"
      description="Automation scripts and developer workflow tools."
    />
  }
/>

<Route
  path="/robotics-projects"
  element={
    <SkillPlaceholderPage
      title="Robotics Projects"
      description="Kinematics, simulation, and robot control systems."
    />
  }
/>

<Route
  path="/vision-projects"
  element={
    <SkillPlaceholderPage
      title="Machine Vision Projects"
      description="Object detection, face tracking, and vision pipelines."
    />
  }
/>
      </Routes>
    </>
  );
}

export default App;
