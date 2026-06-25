import HandbookLayout from "../../components/handbook/HandbookLayout";
import MissionControl from "../../components/handbook/MissionControl";

export default function Chapter01() {
  return (
    <HandbookLayout>
      <article className="chapter-page">
        <p className="eyebrow">Chapter 1</p>

        <h1>What Is a Schematic?</h1>

        <MissionControl />

        <p>
          A schematic is a drawing that shows how electrical parts connect to
          each other. It does not show where the parts physically sit. It shows
          the electrical relationship between them.
        </p>

        <h2>Why Schematics Matter</h2>

        <p>
          When building a robot like Sonny, a schematic helps turn chaos into a
          plan. Batteries, switches, fuses, motors, sensors, and controllers all
          need to be connected safely.
        </p>

        <h2>The Big Idea</h2>

        <p>
          A schematic is not meant to look like the real robot. It is meant to
          show how electricity moves through the system.
        </p>

        <nav className="chapter-nav">
          <a href="/handbook">← Handbook Home</a>
          <a href="/handbook/chapter-2">Next: Voltage →</a>
        </nav>
      </article>
    </HandbookLayout>
  );
}