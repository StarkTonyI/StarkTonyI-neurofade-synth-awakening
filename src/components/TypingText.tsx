import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const TypingText = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "", 
  onComplete 
}: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const typeNext = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(typeNext);
  }, [isTyping, currentIndex, text, speed, onComplete]);

  return (
    <span className={`${className} ${isTyping && currentIndex < text.length ? 'border-r-2 border-primary' : ''}`}>
      {displayText}
    </span>
  );
};