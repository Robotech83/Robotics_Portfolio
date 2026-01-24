/**
 * JSProjectsPage
 * --------------
 * Full page that showcases my Vanilla JavaScript projects.
 * Reached via the Skills → JavaScript button.
 */

import { BackButton } from "../components/BackButton";
import "../styles/jsProjectsScene.css";

type JsProject = {
  title: string;
  description: string;
  githubUrl: string;
  portfolioPath?: string;
  tags?: string[];
};



const JS_PROJECTS: JsProject[] = [
  {
    title: "JS To-Do List",
    description: "Vanilla JS task manager (DOM, events, local state).",
    githubUrl: "https://github.com/Robotech83/JS_ToDoList",
    portfolioPath: "/projects/js-todolist",
    tags: ["Vanilla JS", "DOM", "Events"],
  },
  {
    title: "Tic Tac Toe",
    description: "Game logic + UI updates using pure JavaScript.",
    githubUrl: "https://github.com/Robotech83/TicTacToe",
    portfolioPath: "/projects/tictactoe",
    tags: ["Vanilla JS", "Game Logic"],
  },
  {
    title: "Live Chat",
    description: "Chat UI experiment (front-end logic + realtime patterns).",
    githubUrl: "https://github.com/Robotech83/LiveChat",
    portfolioPath: "/projects/livechat",
    tags: ["Vanilla JS", "UI", "Realtime"],
  },
  {
    title: "Calculator",
    description: "Classic calculator logic + clean UI.",
    githubUrl: "https://github.com/Robotech83/Calucator",
    portfolioPath: "/projects/calculator",
    tags: ["Vanilla JS", "Logic"],
  },
];

export default function JSProjectsPage() {
  return (
    <div className="jsScenePage">
      <header className="jsSceneHeader neon-border">
        <div>
          <h1 className="rgb-gradient">JavaScript Projects</h1>
          <p className="jsSceneSubtitle">
            Vanilla JavaScript projects focused on DOM, logic, and browser APIs.
          </p>
        </div>
      </header>

      <main className="jsSceneBody">
        <div className="jsSceneGrid">
          {JS_PROJECTS.map((p) => (
            <div key={p.title} className="jsSceneCard neon-hover">
              <div className="jsCardTop">
                <h3 className="jsCardTitle">{p.title}</h3>

                <div className="jsCardTags">
                  {(p.tags ?? []).map((t) => (
                    <span key={t} className="jsTag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="jsCardDesc">{p.description}</p>

              <div className="jsCardActions">
                {p.portfolioPath && (
                  <a className="jsBtn" href={p.portfolioPath}>
                    View in Portfolio →
                  </a>
                )}

                <a
                  className="jsBtn secondary"
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          ))}
        </div>
        <BackButton />

        <footer className="jsSceneFooter">
          These projects use **vanilla JavaScript** — no frameworks.
        </footer>
      </main>
    </div>
  );
}
