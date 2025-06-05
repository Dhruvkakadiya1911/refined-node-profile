import { useEffect, useState, useRef } from 'react';

interface SwirlCursorProps {
  isActive: boolean;
  colorTheme?: 'blue' | 'pink' | 'purple';
}

const SwirlCursor = ({ isActive, colorTheme = 'blue' }: SwirlCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const trailIdRef = useRef(0);

  // Color themes for the swirl
  const colorThemes = {
    blue: ['#b3e5fc', '#81d4fa', '#4fc3f7'],
    pink: ['#f8bbd0', '#f48fb1', '#f06292'],
    purple: ['#e1bee7', '#ce93d8', '#ba68c8']
  };

  const colors = colorThemes[colorTheme];

  useEffect(() => {
    // Check if device supports touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (!isActive || isTouchDevice) return;

    const updatePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailIdRef.current++ }];
        // Keep only last 12 trail points
        return newTrail.slice(-12);
      });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, [isActive, isTouchDevice]);

  // Clear trail when not active
  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => setTrail([]), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Main cursor swirl */}
      <div
        className="absolute w-6 h-6 rounded-full opacity-80 transition-all duration-75 ease-out"
        style={{
          left: position.x - 12,
          top: position.y - 12,
          background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
          filter: 'blur(1px)',
          transform: 'scale(1)',
        }}
      />
      
      {/* Trail particles */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length * 0.6;
        const scale = (index + 1) / trail.length * 0.8;
        const colorIndex = index % colors.length;
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full transition-all duration-200 ease-out"
            style={{
              left: point.x - 8,
              top: point.y - 8,
              width: 16 * scale,
              height: 16 * scale,
              background: colors[colorIndex],
              opacity: opacity,
              filter: 'blur(2px)',
              animation: `swirlFade 0.8s ease-out forwards`,
            }}
          />
        );
      })}
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes swirlFade {
          0% {
            opacity: 0.6;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SwirlCursor;
