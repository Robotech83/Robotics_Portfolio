import { Link } from "react-router-dom";
import "../styles/backbutton.css";

interface BackButtonProps {
  target?: string;
  label?: string;
  variant?: "default" | "control-hub" | "virtual-model" | "system" | "handbook";
  floating?: boolean;
  className?: string;
}

export function BackButton({
  target = "/",
  label = "Home",
  variant = "default",
  floating = false,
  className = "",
}: BackButtonProps) {
  const buttonClass =
    `back-button ${variant} ${floating ? "floating" : ""} ${className}`.trim();

  return (
    <Link to={target} className={buttonClass}>
      {label}
    </Link>
  );
}