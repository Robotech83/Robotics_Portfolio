type Props = {
  portfolioPath?: string;
  githubUrl: string;
};

export function JSProjectActions({ portfolioPath, githubUrl }: Props) {
  return (
    <div className="jsCardActions">
      {portfolioPath && (
        <a className="jsBtn" href={portfolioPath}>
          View in Portfolio →
        </a>
      )}

      <a className="jsBtn secondary" href={githubUrl} target="_blank" rel="noreferrer">
        GitHub Repo →
      </a>
    </div>
  );
}
