type Props = {
  portfolioPath?: string;
  githubUrl: string;
};

export function JSProjectActions({ portfolioPath, githubUrl }: Props) {
  return (
    <div className="jsProjectActions">
      <a className="jsBtn secondary" href={githubUrl} target="_blank" rel="noreferrer">
        GitHub Repo →
      </a>
    </div>
  );
}
