// pages/RobotStudio.tsx
import React, { Suspense } from "react";
import "../styles/robotstudio.css";

import { StudioHeader } from "../components/studio/StudioHeader";
import { StudioLayout } from "../components/studio/StudioLayout";

// ✅ Lazy-load panels so failures don’t nuke the entire page
const MovementModule = React.lazy(() => import("../pages/modules/MovementModule"));
const VirtualModel = React.lazy(() => import("../pages/modules/VirtualModel"));

/**
 * Small wrapper so each side can show a loading state + fallback panel.
 */
function PanelShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="studio-panel neon-border">
      <div className="studio-panel__topbar">
        <span className="lab-dot red" />
        <span className="lab-dot yellow" />
        <span className="lab-dot green" />
        <span className="studio-panel__title">{title}</span>
      </div>

      <div className="studio-panel__body">{children}</div>
    </section>
  );
}

/**
 * ErrorBoundary catches RUNTIME errors (not TypeScript compile errors).
 * This prevents a “black page” when a panel crashes while rendering.
 */
class ErrorBoundary extends React.Component<
  { label: string; children: React.ReactNode },
  { hasError: boolean; message?: string }
> {
  constructor(props: { label: string; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { hasError: true, message };
  }

  componentDidCatch(err: unknown) {
    // You can keep this for debugging
    // eslint-disable-next-line no-console
    console.error(`[RobotStudio:${this.props.label}]`, err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="studio-fallback">
          <div className="studio-fallback__title">
            {this.props.label} crashed
          </div>
          <div className="studio-fallback__text">
            This panel hit a runtime error. Robot Studio is still running so you
            can keep working.
          </div>
          <pre className="studio-fallback__pre">{this.state.message}</pre>
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
    <div className="studio-loading">
      <div className="studio-loading__title">{label}</div>
      <div className="studio-loading__bar" />
      <div className="studio-loading__sub">
        Loading module… (if this hangs, check asset paths / model loading)
      </div>
    </div>
  );
}

export default function RobotStudio() {
  return (
    <div className="robotstudio-wrapper">
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
    </div>
  );
}
