import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  description: string;
};

export default function SkillPlaceholderPage({ title, description }: Props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050013",
        color: "#00ffc8",
        padding: "2.5rem",
      }}
    >
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1 style={{ marginTop: "1.5rem" }}>{title}</h1>
      <p style={{ maxWidth: "700px", marginTop: "1rem", color: "#d1d1d1" }}>
        {description}
      </p>

      <p style={{ marginTop: "2rem", opacity: 0.85 }}>
        Projects and demos for this skill will be added here.
      </p>
    </div>
  );
}
