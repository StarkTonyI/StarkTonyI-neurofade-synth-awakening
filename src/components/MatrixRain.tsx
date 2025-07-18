import { useEffect, useState } from 'react';

interface MatrixParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  char: string;
}

export const MatrixRain = () => {
  const [particles, setParticles] = useState<MatrixParticle[]>([]);

  useEffect(() => {
    const chars = '01ΝΞΦΨΩαβγδεζηθικλμνξοπρστυφχψω';
    const particleCount = 50;
    
    const newParticles: MatrixParticle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      char: chars[Math.floor(Math.random() * chars.length)]
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="matrix-rain"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};