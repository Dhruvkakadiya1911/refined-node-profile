
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface FloatingElementsProps {
  density?: number;
  sectionTheme?: 'light' | 'dark';
}

const FloatingElements = ({ density = 30, sectionTheme = 'light' }: FloatingElementsProps) => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    shape: 'circle' | 'square' | 'triangle';
  }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 5,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 15,
      shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
    }));
    setElements(newElements);
  }, [density]);

  const getShapeClasses = (shape: string, size: number) => {
    const baseClasses = `absolute pointer-events-none transition-all duration-1000 ${
      sectionTheme === 'light' 
        ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
        : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
    }`;
    
    switch (shape) {
      case 'circle':
        return `${baseClasses} rounded-full`;
      case 'triangle':
        return `${baseClasses} transform rotate-45`;
      default:
        return `${baseClasses} rounded-lg`;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className={getShapeClasses(element.shape, element.size)}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      ))}
      
      {/* Interactive gradient orbs */}
      <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ${
        sectionTheme === 'light'
          ? 'bg-gradient-to-r from-purple-400/5 to-pink-400/5'
          : 'bg-gradient-to-r from-purple-400/15 to-pink-400/15'
      }`} />
      <div 
        className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-r from-blue-400/5 to-cyan-400/5'
            : 'bg-gradient-to-r from-blue-400/15 to-cyan-400/15'
        }`} 
        style={{ animationDelay: '1s' }} 
      />
    </div>
  );
};

export default FloatingElements;
