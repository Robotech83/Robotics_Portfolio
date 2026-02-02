type Props = {
  skills: string[];
};

export function SkillChips({ skills }: Props) {
  return (
    <div className="skills-row">
      {skills.map((s) => (
        <span key={s} className="skill-chip">
          {s}
        </span>
      ))}
    </div>
  );
}
