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

  // Updated color themes with lighter colors
  const colorThemes = {
    blue: ['#e6f7ff', '#bae7ff', '#91d5ff'],   // Lighter blue shades
    pink: ['#fff0f6', '#ffd6e7', '#ffadd2'],   // Lighter pink shades
    purple: ['#f9f0ff', '#efdbff', '#d3adf7']  // Lighter purple shades
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
    <>
      <style>
        {`
          @keyframes swirlFade {
            0% {
              opacity: 0.7;
              transform: scale(1) rotate(0deg);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.2) rotate(180deg);
            }
            100% {
              opacity: 0;
              transform: scale(0.8) rotate(360deg);
            }
          }
        `}
      </style>
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
          const opacity = (index + 1) / trail.length * 0.7; // Increased opacity slightly
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
      </div>
    </>
  );
};

export default SwirlCursor;
