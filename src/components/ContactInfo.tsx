
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
      color: "from-red-400 to-pink-400"
    },
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
      value: "@Dhruvkakadiya1911",
      external: true,
      color: "from-gray-400 to-gray-600"
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
      value: "Dhruv Kakadiya",
      external: true,
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <div className={`rounded-3xl p-8 backdrop-blur-xl border transition-all duration-1000 shadow-2xl relative overflow-hidden ${
      sectionTheme === 'light'
        ? 'bg-white/40 border-gray-200/50 shadow-gray-200/50'
        : 'bg-black/40 border-gray-700/50 shadow-black/50'
    }`}>
      {/* Floating sparkles */}
      <div className="absolute top-4 right-4">
        <Sparkles className={`w-6 h-6 animate-pulse ${
          sectionTheme === 'light' ? 'text-purple-500' : 'text-cyan-400'
        }`} />
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 opacity-10 ${
        sectionTheme === 'light'
          ? 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
          : 'bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500'
      }`} />
      
      <div className="relative z-10 space-y-8">
        <div>
          <h3 className={`text-3xl font-bold mb-6 transition-colors duration-1000 ${
            sectionTheme === 'light' 
              ? 'text-gray-900' 
              : 'text-white'
          }`}>
            Let's Connect
          </h3>
          <p className={`leading-relaxed mb-8 text-lg transition-colors duration-1000 ${
            sectionTheme === 'light' 
              ? 'text-gray-700' 
              : 'text-gray-300'
          }`}>
            I'm always excited to discuss new opportunities, innovative projects, 
            or potential collaborations. Whether you need a skilled developer for 
            your startup or want to explore cutting-edge technologies, let's create something amazing together.
          </p>
        </div>

        <div className="space-y-6">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className={`flex items-center space-x-6 transition-all duration-500 group rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 ${
                  sectionTheme === 'light'
                    ? 'text-gray-700 hover:text-black hover:bg-white/60 hover:shadow-xl'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/40 hover:shadow-2xl'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl bg-gradient-to-br ${link.color}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-xl">{link.label}</div>
                  <div className={`text-base mt-1 transition-colors duration-1000 ${
                    sectionTheme === 'light' 
                      ? 'text-gray-600' 
                      : 'text-gray-400'
                  }`}>{link.value}</div>
                </div>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${link.color} opacity-20 group-hover:opacity-100 transition-all duration-500`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
