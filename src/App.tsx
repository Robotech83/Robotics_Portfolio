import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import GlobalWIPBanner from "./components/GlobalWIPBanner";

import HomePage from "./pages/Home";

// Pages
import ControlHub from "./pages/ControlHub";
import AboutMe from "./pages/AboutMe";
import VirtualModel from "./pages/modules/VirtualModel";
import AIAssistantPage from "./pages/AIAssistant";
import ObjectScanner from "./pages/ObjectScanner";

import SystemModule from "./pages/modules/SystemModule";
import NetworkPage from "./pages/dashboard/NetworkPage";
import MovementModule from "./pages/modules/MovementModule";
import VoiceModule from "./pages/modules/VoiceModule";

import WakeWordPage from "./pages/voicemodule/WakeWord";
import SpeechOutputPage from "./pages/voicemodule/SpeechOutput";
import CommandTrainerPage from "./pages/voicemodule/CommandTrainer";

import JSProjectsPage from "./pages/JSProjectsPage";
import SkillPlaceholderPage from "./pages/SkillPlaceholderPage";
import ArduinoProjectsPage from "./pages/ArduinoProjectsPage";
import UnderConstruction from "./pages/UnderConstruction";
import RobotArm from "./pages/RobotKinematics";
import RoboticsProjectsPage from "./pages/RoboticsProjectPage";
import SonnyPortfolioPage from "./pages/SonnyPortfolioPage";

import Handbook from "./pages/Handbook";
import Chapter01 from "./pages/chapters/Chapter01";

export default function App() {
  return (
    <>
      <GlobalWIPBanner />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/control-hub" element={<ControlHub />} />
        <Route path="/virtual-model" element={<VirtualModel />} />

        <Route path="/robot-studio" element={<UnderConstruction />} />
        <Route path="/robotstudio" element={<Navigate to="/robot-studio" replace />} />

        <Route path="/robotarm" element={<RobotArm />} />

        <Route path="/ai-assistant" element={<AIAssistantPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/object-scanner" element={<ObjectScanner />} />

        <Route path="/movement-module" element={<MovementModule />} />
        <Route path="/voice-module" element={<VoiceModule />} />
        <Route path="/power-module" element={<SystemModule />} />
        <Route path="/network-module" element={<NetworkPage />} />

        <Route path="/voice/wakeword" element={<WakeWordPage />} />
        <Route path="/voice/tts" element={<SpeechOutputPage />} />
        <Route path="/voice/commands" element={<CommandTrainerPage />} />

        <Route path="/js-projects" element={<JSProjectsPage />} />
        <Route path="/arduino-projects" element={<ArduinoProjectsPage />} />
        <Route path="/robotics-projects" element={<RoboticsProjectsPage />} />
        <Route path="/robotics-projects/sonny-os" element={<SonnyPortfolioPage />} />
        <Route
          path="/python-projects"
          element={
            <SkillPlaceholderPage
              title="Python Projects"
              description="Automation, robotics scripting, and system tooling projects."
            />
          }
        />
        
        <Route path="/handbook" element={<Handbook />} />
<Route path="/handbook/chapter-1" element={<Chapter01 />} />

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
          path="/vision-projects"
          element={
            <SkillPlaceholderPage
              title="Machine Vision Projects"
              description="Object detection, face tracking, and vision pipelines."
            />
          }
        />

        <Route
          path="/react-projects"
          element={
            <SkillPlaceholderPage
              title="React Projects"
              description="Frontend web development projects using React and TypeScript."
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}