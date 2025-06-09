
import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  animationDelay: number;
  shape: 'cube' | 'sphere' | 'pyramid' | 'torus';
  color: string;
}

interface Floating3DShapesProps {
  sectionTheme: 'light' | 'dark';
}

const Floating3DShapes = ({ sectionTheme }: Floating3DShapesProps) => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = sectionTheme === 'light' 
      ? ['#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f1f5f9']
      : ['#4b5563', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb'];

    const newShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      rotation: Math.random() * 360,
      animationDelay: Math.random() * 5,
      shape: ['cube', 'sphere', 'pyramid', 'torus'][Math.floor(Math.random() * 4)] as Shape['shape'],
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setShapes(newShapes);
  }, [sectionTheme]);

  const getShapeElement = (shape: Shape) => {
    const baseClasses = `absolute transition-all duration-1000 opacity-10 hover:opacity-20`;
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      animationDelay: `${shape.animationDelay}s`,
      transform: `rotate(${shape.rotation}deg)`,
      background: shape.color,
    };

    switch (shape.shape) {
      case 'cube':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-lg animate-float shadow-2xl`}
            style={{
              ...style,
              background: `linear-gradient(45deg, ${shape.color}, ${shape.color}80)`,
              boxShadow: `0 10px 30px ${shape.color}20`,
            }}
          />
        );
      case 'sphere':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-full animate-pulse-slow shadow-2xl`}
            style={{
              ...style,
              background: `radial-gradient(circle, ${shape.color}, ${shape.color}60)`,
              boxShadow: `0 0 30px ${shape.color}30`,
            }}
          />
        );
      case 'pyramid':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} transform rotate-45 animate-float shadow-2xl`}
            style={{
              ...style,
              background: `linear-gradient(135deg, ${shape.color}, ${shape.color}40)`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              borderRadius: '8px',
            }}
          />
        );
      case 'torus':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} rounded-full border-8 animate-spin shadow-2xl`}
            style={{
              ...style,
              background: 'transparent',
              borderColor: shape.color,
              animation: 'spin 20s linear infinite',
              animationDelay: `${shape.animationDelay}s`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(getShapeElement)}
      
      {/* Floating gradient orbs */}
      <div 
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-r from-slate-400/10 to-gray-500/10'
            : 'bg-gradient-to-r from-gray-600/20 to-gray-700/20'
        }`}
      />
      <div 
        className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-slow ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-r from-gray-500/10 to-slate-400/10'
            : 'bg-gradient-to-r from-gray-700/20 to-gray-600/20'
        }`}
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
};

export default Floating3DShapes;
