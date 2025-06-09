
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

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
      ? ['#3b82f6', '#8b5cf6', '#ef4444', '#10b981', '#f59e0b']
      : ['#60a5fa', '#a78bfa', '#f87171', '#34d399', '#fbbf24'];

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
    const baseClasses = `absolute transition-all duration-1000 opacity-20 hover:opacity-40`;
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
              boxShadow: `0 10px 30px ${shape.color}40`,
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
              boxShadow: `0 0 30px ${shape.color}60`,
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
            ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
            : 'bg-gradient-to-r from-cyan-400/30 to-pink-400/30'
        }`}
      />
      <div 
        className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse-slow ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-r from-pink-400/20 to-orange-400/20'
            : 'bg-gradient-to-r from-purple-400/30 to-blue-400/30'
        }`}
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
};

export default Floating3DShapes;
