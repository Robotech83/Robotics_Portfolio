import HandbookLayout from "../components/handbook/HandbookLayout";
import HandbookCard from "../components/handbook/HandbookCard";
import MissionControl from "../components/handbook/MissionControl";
import "../styles/handbook.css";
import { BackButton } from "../components/BackButton";




const chapters = [
  {
    number: "Chapter 1",
    title: "What Is a Schematic?",
    description: "Learn how engineers communicate electrical systems.",
    link: "/handbook/chapter-1",
  },
  {
    number: "Chapter 2",
    title: "Voltage",
    description: "Understand what voltage is and why robots need it.",
    link: "/handbook/chapter-2",
  },
  {
    number: "Chapter 3",
    title: "Current",
    description: "Learn how electrical flow powers motors, boards, and servos.",
    link: "/handbook/chapter-3",
  },
];

export default function Handbook() {
  return (
    <HandbookLayout>
      <section className="handbook-hero">
        <p className="eyebrow">Robotech83 Learning System</p>

        <h1>Information Before Chaos</h1>

        <h2>From Zero Knowledge to Robotics Engineer</h2>

        <p>
          Engineering isn&apos;t about memorizing. It&apos;s about understanding.
        </p>

        <p>
          This handbook documents the lessons, experiments, mistakes, and
          discoveries made while building Sonny — an offline humanoid robotics
          platform.
        </p>

        <a className="handbook-button" href="/handbook/chapter-1">
          Begin Reading
        </a>
      </section>

      <MissionControl />

      <section className="chapter-grid">
        {chapters.map((chapter) => (
          <HandbookCard key={chapter.title} {...chapter} />
        ))}
      </section>

<BackButton
    target="/about"
    label="← Return to Portfolio"
    variant="handbook"
/>

    </HandbookLayout>
  );
}