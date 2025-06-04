
const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-8 sm:py-12 lg:py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Brand section */}
          <div className="text-center lg:text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Dhruv<span className="text-gray-400">Kakadiya</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400">
              Backend Node.js Developer
            </p>
          </div>

          {/* Tech info */}
          <div className="text-center lg:text-right">
            <p className="text-sm sm:text-base text-gray-400 mb-2">
              Made with ❤️ using Node.js & React
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              © 2024 Dhruv Kakadiya. All rights reserved.
            </p>
          </div>
        </div>

        {/* Enhanced responsive navigation */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 transition-colors duration-300">
          {/* Mobile navigation - Stack vertically on small screens */}
          <div className="flex flex-col sm:hidden space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#about" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700/50 touch-manipulation min-h-[48px]"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700/50 touch-manipulation min-h-[48px]"
              >
                Skills
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="#projects" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700/50 touch-manipulation min-h-[48px]"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700/50 touch-manipulation min-h-[48px]"
              >
                Experience
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <a 
                href="#contact" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-lg hover:bg-gray-700/50 touch-manipulation min-h-[48px]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Tablet navigation - 3 columns for medium screens */}
          <div className="hidden sm:flex md:hidden justify-center">
            <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
              <a 
                href="#about" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation min-h-[48px]"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation min-h-[48px]"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation min-h-[48px]"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation min-h-[48px] col-start-2"
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50 touch-manipulation min-h-[48px]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop navigation - Horizontal layout for large screens */}
          <div className="hidden md:flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-12">
              <a 
                href="#about" 
                className="py-2 px-4 lg:px-6 text-sm lg:text-base text-gray-400 hover:text-white transition-colors hover:bg-gray-800/30 rounded-lg cursor-pointer"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="py-2 px-4 lg:px-6 text-sm lg:text-base text-gray-400 hover:text-white transition-colors hover:bg-gray-800/30 rounded-lg cursor-pointer"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="py-2 px-4 lg:px-6 text-sm lg:text-base text-gray-400 hover:text-white transition-colors hover:bg-gray-800/30 rounded-lg cursor-pointer"
              >
                Projects
              </a>
              <a 
                href="#experience" 
                className="py-2 px-4 lg:px-6 text-sm lg:text-base text-gray-400 hover:text-white transition-colors hover:bg-gray-800/30 rounded-lg cursor-pointer"
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="py-2 px-4 lg:px-6 text-sm lg:text-base text-gray-400 hover:text-white transition-colors hover:bg-gray-800/30 rounded-lg cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
