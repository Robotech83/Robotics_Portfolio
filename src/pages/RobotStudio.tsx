// pages/RobotStudio.tsx
import React, { Suspense } from "react";
import "../styles/robotstudio.css";

import { StudioHeader } from "../components/studio/StudioHeader";
import { StudioLayout } from "../components/studio/StudioLayout";

const MovementModule = React.lazy(() =>
  import("../pages/modules/MovementModule")
);

const VirtualModel = React.lazy(() =>
  import("../pages/modules/VirtualModel")
);

type PanelShellProps = {
  title: string;
  children: React.ReactNode;
};

function PanelShell({ title, children }: PanelShellProps) {
  return (
    <section className="studio-panel neon-border" aria-label={title}>
      <div className="studio-panel__topbar">
        <span className="lab-dot red" aria-hidden="true" />
        <span className="lab-dot yellow" aria-hidden="true" />
        <span className="lab-dot green" aria-hidden="true" />
        <span className="studio-panel__title">{title}</span>
      </div>

      <div className="studio-panel__body">{children}</div>
    </section>
  );
}

type ErrorBoundaryProps = {
  label: string;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(err: unknown): ErrorBoundaryState {
    const message = err instanceof Error ? err.message : String(err);
    return { hasError: true, message };
  }

  componentDidCatch(err: unknown) {
    console.error(`[RobotStudio:${this.props.label}]`, err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="studio-fallback" role="alert">
          <div className="studio-fallback__title">
            {this.props.label} crashed
          </div>

          <div className="studio-fallback__text">
            This panel hit a runtime error. Robot Studio is still running so you
            can keep working.
          </div>

          {this.state.message && (
            <pre className="studio-fallback__pre">{this.state.message}</pre>
          )}

          <div className="studio-fallback__hint">
            Tip: open DevTools → Console to see the full stack trace.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function LoadingPanel({ label }: { label: string }) {
  return (
    <div className="studio-loading" aria-live="polite">
      <div className="studio-loading__title">{label}</div>
      <div className="studio-loading__bar" />
      <div className="studio-loading__sub">
        Loading module… check asset paths or model loading if this hangs.
      </div>
    </div>
  );
}

export default function RobotStudio() {
  return (
    <main className="robotstudio-wrapper">
      <StudioHeader
        title="Robot Studio"
        subtitle="Virtual InMoov Control Environment"
      />

      <StudioLayout
        left={
          <PanelShell title="Movement Module">
            <ErrorBoundary label="Movement Module">
              <Suspense fallback={<LoadingPanel label="Movement Module" />}>
                <MovementModule />
              </Suspense>
            </ErrorBoundary>
          </PanelShell>
        }
        right={
          <PanelShell title="Virtual Model">
            <ErrorBoundary label="Virtual Model">
              <Suspense fallback={<LoadingPanel label="Virtual Model" />}>
                <VirtualModel />
              </Suspense>
            </ErrorBoundary>
          </PanelShell>
        }
      />
    </main>
  );
}