import { useNavigate } from "react-router-dom"
import '../styles/controlhubbutton.css';

export function ControlHubButton() {
  const navigate = useNavigate();
  return (
    <button
          className="back-btn-top" 
          onClick={() => navigate('/control-hub')}
        >
          ← Control Hub
        </button>
  );
}

