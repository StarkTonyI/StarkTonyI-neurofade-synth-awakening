import { useState, useEffect } from 'react';
import { NeuralBackground } from '@/components/NeuralBackground';
import { MatrixRain } from '@/components/MatrixRain';
import { TypingText } from '@/components/TypingText';
import { AccessButton } from '@/components/AccessButton';
import { toast } from 'sonner';

const Index = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add motion blur effect on mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.neural-element');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${x * 10 - 5}px, ${y * 10 - 5}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAccessNode = () => {
    toast("Neural interface activated... Initializing connection...", {
      description: "The synthetic mind is awakening. Please stand by.",
      duration: 4000,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Main Title */}
        <div className="text-center mb-12 neural-element">
          <h1 className="font-neural text-8xl md:text-9xl font-black tracking-wider mb-6">
            <TypingText 
              text="NEUROFADE"
              delay={500}
              speed={100}
              className="neon-glow text-primary"
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          <h2 className="font-neural text-2xl md:text-3xl font-normal tracking-widest text-foreground/80">
            {showSubtitle && (
              <TypingText 
                text="The Synthetic Mind Awakens"
                delay={200}
                speed={80}
                className="text-accent"
                onComplete={() => setShowButton(true)}
              />
            )}
          </h2>
        </div>
        
        {/* Subtitle */}
        {showSubtitle && (
          <div className="text-center mb-16 neural-element">
            <p className="font-system text-lg italic text-muted-foreground max-w-md mx-auto leading-relaxed">
              <TypingText 
                text='"An experimental AI interface. Nothing here is real."'
                delay={1000}
                speed={60}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </p>
          </div>
        )}
        
        {/* Access Button */}
        {showButton && (
          <div className="neural-element animate-fade-in">
            <AccessButton onClick={handleAccessNode} />
          </div>
        )}
        
        {/* Status Indicator */}
        <div className="absolute bottom-8 left-8 neural-element">
          <div className="flex items-center space-x-2 text-primary/60 font-neural text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>NEURAL LINK ESTABLISHED</span>
          </div>
        </div>
        
        {/* Version Info */}
        <div className="absolute bottom-8 right-8 neural-element">
          <div className="text-primary/40 font-neural text-xs tracking-wider">
            v2.0.47-SYNTHETIC
          </div>
        </div>
      </div>
      
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none" />
    </div>
  );
};

export default Index;
