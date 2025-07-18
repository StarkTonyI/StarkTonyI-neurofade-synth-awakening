import { useEffect, useState } from 'react';

interface DataParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

export const NeuralBackground = () => {
  const [dataParticles, setDataParticles] = useState<DataParticle[]>([]);

  useEffect(() => {
    const particleCount = 20;
    
    const newParticles: DataParticle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 3,
    }));

    setDataParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 neural-gradient">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 animate-pulse" />
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--neon-electric) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(var(--neon-purple) / 0.05) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Data stream particles */}
      {dataParticles.map((particle) => (
        <div
          key={particle.id}
          className="data-particle"
          style={{
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};