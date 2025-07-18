import { useState } from 'react';

interface AccessButtonProps {
  onClick?: () => void;
}

export const AccessButton = ({ onClick }: AccessButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
    onClick?.();
  };

  return (
    <button 
      className={`
        neural-button px-8 py-4 font-neural text-lg tracking-wider uppercase
        transform transition-all duration-300 ease-out
        ${isPressed ? 'scale-95' : 'hover:scale-105'}
        hover:animate-pulse
      `}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-primary">›</span>
        Access Node
        <span className="text-primary">‹</span>
      </span>
    </button>
  );
};