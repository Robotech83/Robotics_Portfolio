import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { LabNotebook } from "../components/labnotebook/LabNotebook";
import { ContactTerminal } from "../components/ContactTerminal";
import FloatingAboutButton from "../components/FloatingAboutButton";




import "../styles/home.css";

export default function HomePage() {
  return (
    <main className="homepage">
      <div className="homepage__container">
        <Hero />
        

        {/* Existing homepage sections */}
        <Dashboard />
        <Projects />
        <Skills />
        <LabNotebook />
        <ContactTerminal />
        <FloatingAboutButton />
      </div>
    </main>
  );
}