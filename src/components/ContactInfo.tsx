
import { Mail, Github, Linkedin, Sparkles } from 'lucide-react';

interface ContactInfoProps {
  sectionTheme: 'light' | 'dark';
}

const ContactInfo = ({ sectionTheme }: ContactInfoProps) => {
  const contactLinks = [
    {
      href: "mailto:dhruvkakadiya1911@gmail.com",
      icon: Mail,
      label: "Email",
      value: "dhruvkakadiya1911@gmail.com",
      color: "from-gray-500 to-gray-600"
    },
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
      value: "@Dhruvkakadiya1911",
      external: true,
      color: "from-gray-600 to-gray-700"
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Dhruv Kakadiya",
      external: true,
      color: "from-gray-400 to-gray-500"
    }
  ];

  return (
    <div className={`rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl border transition-all duration-1000 shadow-2xl relative overflow-hidden ${
      sectionTheme === 'light'
        ? 'bg-white/40 border-gray-200/50 shadow-gray-200/50'
        : 'bg-black/40 border-gray-700/50 shadow-black/50'
    }`}>
      {/* Floating sparkles */}
      <div className="absolute top-4 right-4">
        <Sparkles className={`w-5 h-5 sm:w-6 sm:h-6 animate-pulse ${
          sectionTheme === 'light' ? 'text-gray-500' : 'text-gray-400'
        }`} />
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 opacity-5 ${
        sectionTheme === 'light'
          ? 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600'
          : 'bg-gradient-to-br from-gray-600 via-gray-500 to-gray-400'
      }`} />
      
      <div className="relative z-10 space-y-6 sm:space-y-8">
        <div>
          <h3 className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-1000 ${
            sectionTheme === 'light' 
              ? 'text-gray-900' 
              : 'text-white'
          }`}>
            Let's Connect
          </h3>
          <p className={`leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg transition-colors duration-1000 ${
            sectionTheme === 'light' 
              ? 'text-gray-700' 
              : 'text-gray-300'
          }`}>
            I'm always excited to discuss new opportunities, innovative projects, 
            or potential collaborations. Whether you need a skilled developer for 
            your startup or want to explore cutting-edge technologies, let's create something amazing together.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className={`flex items-center space-x-4 sm:space-x-6 transition-all duration-500 group rounded-xl sm:rounded-2xl p-4 sm:p-6 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                  sectionTheme === 'light'
                    ? 'text-gray-700 hover:text-black hover:bg-white/60 hover:shadow-xl'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/40 hover:shadow-2xl'
                }`}
              >
                <div className={`w-10 h-10 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl bg-gradient-to-br ${link.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base sm:text-lg md:text-xl truncate">{link.label}</div>
                  <div className={`text-sm sm:text-base mt-0.5 sm:mt-1 truncate transition-colors duration-1000 ${
                    sectionTheme === 'light' 
                      ? 'text-gray-600' 
                      : 'text-gray-400'
                  }`}>{link.value}</div>
                </div>
                <div className={`hidden sm:block w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${link.color} opacity-20 group-hover:opacity-100 transition-all duration-500`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
