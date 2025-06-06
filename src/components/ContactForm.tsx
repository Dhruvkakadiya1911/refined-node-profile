
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
    <div className={`rounded-3xl p-8 backdrop-blur-xl border transition-all duration-1000 shadow-2xl relative overflow-hidden ${
      sectionTheme === 'light'
        ? 'bg-white/40 border-gray-200/50 shadow-gray-200/50'
        : 'bg-black/40 border-gray-700/50 shadow-black/50'
    }`}>
      {/* Floating icon */}
      <div className="absolute top-4 right-4">
        <Zap className={`w-6 h-6 animate-pulse ${
          sectionTheme === 'light' ? 'text-blue-500' : 'text-pink-400'
        }`} />
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 opacity-10 ${
        sectionTheme === 'light'
          ? 'bg-gradient-to-tl from-purple-500 via-blue-500 to-cyan-500'
          : 'bg-gradient-to-tl from-pink-500 via-purple-500 to-blue-500'
      }`} />
      
      <div className="relative z-10">
        <h3 className={`text-3xl font-bold mb-8 transition-colors duration-1000 ${
          sectionTheme === 'light' 
            ? 'text-gray-900' 
            : 'text-white'
        }`}>Start a Conversation</h3>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative group">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`border-2 transition-all duration-500 rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl h-14 text-lg transform group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-gray-200 text-black placeholder-gray-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-gray-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100/20 hover:border-gray-500'
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
              className={`border-2 transition-all duration-500 rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl h-14 text-lg transform group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-gray-200 text-black placeholder-gray-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-gray-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100/20 hover:border-gray-500'
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
              rows={6}
              className={`border-2 resize-none transition-all duration-500 rounded-2xl shadow-lg group-hover:shadow-xl focus:shadow-2xl text-lg transform group-hover:scale-105 ${
                sectionTheme === 'light'
                  ? 'bg-white/80 border-gray-200 text-black placeholder-gray-500 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 hover:border-gray-400'
                  : 'bg-gray-900/60 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-100/20 hover:border-gray-500'
              }`}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full transition-all duration-500 disabled:opacity-50 hover:scale-105 hover:-translate-y-1 rounded-2xl py-6 text-lg font-semibold relative overflow-hidden group shadow-xl hover:shadow-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-300/50'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-400/50'
            }`}
          >
            {/* Animated background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${
              sectionTheme === 'light'
                ? 'bg-gradient-to-r from-cyan-400/20 to-pink-400/20'
                : 'bg-gradient-to-r from-cyan-300/20 to-yellow-300/20'
            }`}></div>
            
            <span className="relative z-10 flex items-center justify-center space-x-3">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Magic...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
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
