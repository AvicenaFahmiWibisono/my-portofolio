
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Translations } from '../app/data';
import { Mail, Send, MapPin, Phone, MessageSquare, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

interface ContactProps {
  t: Translations;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto link
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:avicenafw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/AvicenaFahmiWibisono/', 
      label: 'GitHub', 
      color: 'hover:text-zinc-900 dark:hover:text-white' 
    },
    { 
      icon: Linkedin, 
      href: 'https://id.linkedin.com/in/avicena-fahmi-785679208', 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/avicenaazz/', 
      label: 'Instagram', 
      color: 'hover:text-pink-600' 
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for work
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
              Let's work together
            </h2>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 leading-relaxed max-w-md font-light">
              {t.contact.description}
            </p>

            <div className="space-y-6 mb-12">
              <SpotlightCard className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-1">
                <a href="mailto:avicenafw@gmail.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Email Me</p>
                    <p className="text-zinc-900 dark:text-white font-medium group-hover:text-blue-500 transition-colors">avicenafw@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </a>
              </SpotlightCard>

              <SpotlightCard className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-1">
                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Location</p>
                    <p className="text-zinc-900 dark:text-white font-medium">West Java, Indonesia</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="flex items-center gap-4">
               {socialLinks.map((social, index) => (
                 <a
                   key={index}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 transition-all hover:scale-110 ${social.color}`}
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group relative overflow-hidden ${
                    submitStatus === 'success' 
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-zinc-900 text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      Message Sent!
                    </motion.div>
                  ) : (
                    <>
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {t.contact.sendMessage}
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </>
                  )}
                </button>
              </form>
              
              {/* Decorative gradient inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
