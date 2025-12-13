import { useNavigate } from 'react-router-dom';
import '../styles/backbutton.css';

interface BackButtonProps {
  target?: string;
  label?: string;
  variant?: 'default' | 'control-hub' | 'virtual-model' | 'system';
  floating?: boolean;
  className?: string;
}

export function BackButton({ 
  target = '/', 
  label = 'Home',
  variant = 'default',
  floating = false,
  className = ''
}: BackButtonProps) {
  const navigate = useNavigate();

  const buttonClass = `back-button ${variant} ${floating ? 'floating' : ''} ${className}`.trim();

  return (
    <button
      onClick={() => navigate(target)}
      className={buttonClass}
    >
      {label}
    </button>
  );
}