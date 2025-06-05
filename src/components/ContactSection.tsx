
import { useState, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import SwirlCursor from './SwirlCursor';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ColorThemePicker from './ColorThemePicker';

const ContactSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [colorTheme, setColorTheme] = useState<'blue' | 'pink' | 'purple'>('blue');
  const { getSectionTheme, isTransitioning } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  const sectionTheme = getSectionTheme('contact');

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <SwirlCursor isActive={isHovering} colorTheme={colorTheme} />
      
      <section 
        ref={sectionRef}
        id="contact" 
        className={`py-20 transition-all duration-1000 relative overflow-hidden ${
          sectionTheme === 'light' 
            ? 'bg-white text-black' 
            : 'bg-black text-white'
        } ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background gradient overlay for better swirl visibility */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          sectionTheme === 'light'
            ? 'bg-gradient-to-br from-slate-50/50 via-white to-slate-100/50'
            : 'bg-gradient-to-br from-gray-950/50 via-black to-gray-900/50'
        }`} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000 ${
              sectionTheme === 'light' 
                ? 'text-black' 
                : 'text-white'
            }`}>
              Let's Work Together
            </h2>
            <p className={`text-xl max-w-2xl mx-auto mb-8 transition-colors duration-1000 ${
              sectionTheme === 'light' 
                ? 'text-gray-700' 
                : 'text-gray-300'
            }`}>
              Ready to build something amazing? Let's discuss your next project.
            </p>
            
            {/* Color theme picker */}
            <ColorThemePicker 
              currentTheme={colorTheme}
              onThemeChange={setColorTheme}
              sectionTheme={sectionTheme}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo sectionTheme={sectionTheme} />
            <ContactForm sectionTheme={sectionTheme} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
