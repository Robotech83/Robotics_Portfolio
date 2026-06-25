type HandbookCardProps = {
  number: string;
  title: string;
  description: string;
  link: string;
};

export default function HandbookCard({
  number,
  title,
  description,
  link,
}: HandbookCardProps) {
  return (
    <article className="handbook-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link}>Read →</a>
    </article>
  );
}