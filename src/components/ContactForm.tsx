
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Zap } from 'lucide-react';

interface ContactFormProps {
  sectionTheme: 'light' | 'dark';
}

const ContactForm = ({ sectionTheme }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully! ✨",
        description: "Thanks for reaching out. I'll get back to you soon with some magic!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl border transition-all duration-1000 shadow-2xl relative overflow-hidden ${
      sectionTheme === 'light'
        ? 'bg-white/40 border-slate-200/50 shadow-slate-200/50'
        : 'bg-black/40 border-gray-700/50 shadow-black/50'
    }`}>
      {/* Floating icon */}
      <div className="absolute top-4 right-4">
        <Zap className={`w-5 h-5 sm:w-6 sm:h-6 animate-pulse ${
          sectionTheme === 'light' ? 'text-slate-500' : 'text-gray-400'
        }`} />
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 opacity-5 ${
        sectionTheme === 'light'
          ? 'bg-gradient-to-tl from-slate-600 via-gray-500 to-slate-400'
          : 'bg-gradient-to-tl from-gray-400 via-gray-500 to-gray-600'
      }`} />
      
      <div className="relative z-10">
        <h3 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
          sectionTheme === 'light' 
            ? 'text-gray-900' 
            : 'text-white'
        }`}>Start a Conversation</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="relative group">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`border-2 transition-all duration-500 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl h-12 sm:h-14 text-base sm:text-lg transform group-hover:scale-102 sm:group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-slate-200 text-black placeholder-slate-500 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 hover:border-slate-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100/20 hover:border-gray-500'
              }`}
            />
          </div>

          <div className="relative group">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`border-2 transition-all duration-500 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl h-12 sm:h-14 text-base sm:text-lg transform group-hover:scale-102 sm:group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-slate-200 text-black placeholder-slate-500 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 hover:border-slate-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100/20 hover:border-gray-500'
              }`}
            />
          </div>

          <div className="relative group">
            <Textarea
              name="message"
              placeholder="Tell me about your amazing project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`border-2 resize-none transition-all duration-500 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl text-base sm:text-lg transform group-hover:scale-102 sm:group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-slate-200 text-black placeholder-slate-500 focus:border-slate-400 focus:ring-4 focus:ring-slate-100 hover:border-slate-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-4 focus:ring-gray-100/20 hover:border-gray-500'
              }`}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full transition-all duration-500 disabled:opacity-50 hover:scale-102 sm:hover:scale-105 hover:-translate-y-0.5 sm:hover:-translate-y-1 rounded-xl sm:rounded-2xl py-4 sm:py-5 md:py-6 text-base sm:text-lg font-semibold relative overflow-hidden group shadow-xl hover:shadow-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:from-slate-700 hover:to-gray-800 hover:shadow-slate-300/50'
                : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-800 hover:to-gray-700 hover:shadow-gray-400/50'
            }`}
          >
            {/* Animated background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-slate-400/20 to-gray-500/20'
                : 'bg-gradient-to-r from-gray-500/20 to-gray-400/20'
            }`}></div>
            
            <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Magic...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </>
              )}
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
