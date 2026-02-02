type Props = {
  repoUrl: string;
  demoUrl?: string;
};

export function ProjectLinks({ repoUrl, demoUrl }: Props) {
  return (
    <div className="card-actions">
      <a className="neon-link" href={repoUrl} target="_blank" rel="noreferrer">
        View Repo →
      </a>

      {demoUrl ? (
        <a className="neon-link secondary" href={demoUrl} target="_blank" rel="noreferrer">
          Demo Video →
        </a>
      ) : (
        <span className="muted small">Demo link coming soon</span>
      )}
    </div>
  );
}
