import type { ReactNode } from "react";
import "../../styles/handbook.css";

type HandbookLayoutProps = {
  children: ReactNode;
};

export default function HandbookLayout({ children }: HandbookLayoutProps) {
  return (
    <main className="handbook-page">
      <aside className="handbook-sidebar">
        <h3>📘 Information Before Chaos</h3>

        <nav>
          <a href="/handbook">Introduction</a>
          <a href="/handbook/chapter-1">Chapter 1: Schematics</a>
          <a href="/handbook/chapter-2">Chapter 2: Voltage</a>
          <a href="/handbook/chapter-3">Chapter 3: Current</a>
        </nav>
      </aside>

      <section className="handbook-content">{children}</section>
    </main>
  );
}