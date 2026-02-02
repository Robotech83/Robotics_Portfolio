type Props = {
  tags?: string[];
};

export function JSTagChips({ tags }: Props) {
  return (
    <div className="jsCardTags">
      {(tags ?? []).map((t) => (
        <span key={t} className="jsTag">
          {t}
        </span>
      ))}
    </div>
  );
}
