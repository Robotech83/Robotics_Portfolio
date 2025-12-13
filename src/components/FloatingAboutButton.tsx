import { Link } from "react-router-dom";
import "../styles/floatingabout.css";

export default function FloatingAboutButton() {
  return (
    <Link to="/about" className="floating-about-btn">
      <span className="label">About Me</span>
      <span className="ring"></span>
    </Link>
  );
}
