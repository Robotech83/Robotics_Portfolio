import React from "react";
import "../../styles/jsProjectsScene.css";

type JsProject = {
  title: string;
  description: string;
  githubUrl: string;
  // Optional: if you have a route/page inside your portfolio for this project
  portfolioPath?: string;
  tags?: string[];
};

const JS_PROJECTS: JsProject[] = [
  {
    title: "JS To-Do List",
    description: "Vanilla JS task manager (DOM, events, local state).",
    githubUrl: "https://github.com/Robotech83/JS_ToDoList",
    portfolioPath: "/projects/js-todolist", // optional
    tags: ["Vanilla JS", "DOM", "Events"],
  },
  {
    title: "Tic Tac Toe",
    description: "Game logic + UI updates using pure JavaScript.",
    githubUrl: "https://github.com/Robotech83/TicTacToe",
    portfolioPath: "/projects/tictactoe", // optional
    tags: ["Vanilla JS", "Game Logic"],
  },
  {
    title: "Live Chat",
    description: "Chat UI experiment (front-end logic + realtime patterns).",
    githubUrl: "https://github.com/Robotech83/LiveChat",
    portfolioPath: "/projects/livechat", // optional
    tags: ["Vanilla JS", "UI", "Realtime"],
  },
  {
    title: "Calculator",
    description: "Classic calculator logic + clean UI.",
    githubUrl: "https://github.com/Robotech83/Calucator",
    portfolioPath: "/projects/calculator", // optional
    tags: ["Vanilla JS", "Logic"],
  },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function JavaScriptProjectsScene({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="jsSceneOverlay" role="dialog" aria-modal="true">
      <div className="jsSceneBackdrop" onClick={onClose} />

      <div className="jsSceneWindow neon-border">
        <div className="jsSceneHeader">
          <div className="jsSceneTitle">
            <span className="rgb-gradient">JavaScript Projects</span>
            <span className="jsSceneSubtitle">Vanilla JS demos & builds</span>
          </div>

          <button className="jsSceneClose" onClick={onClose} type="button">
            ✕
          </button>
        </div>

        <div className="jsSceneBody">
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
                  {p.portfolioPath ? (
                    <a className="jsBtn" href={p.portfolioPath}>
                      View in Portfolio →
                    </a>
                  ) : (
                    <span className="jsHint">No portfolio page linked yet</span>
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

          <div className="jsSceneFooter">
            Tip: These are “vanilla JS” projects (DOM + logic), separate from React modules.
          </div>
        </div>
      </div>
    </div>
  );
}
