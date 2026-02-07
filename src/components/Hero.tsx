'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../app/data';
import { ArrowRight, Mail, Github, Linkedin, Instagram, ChevronDown, FileText } from 'lucide-react';
import { AuroraBackground } from './ui/AuroraBackground';
import { SplitText } from './ui/SplitText';

interface HeroProps {
  t: Translations;
}

export default function Hero({ t }: HeroProps) {
  const roles = [
    t.hero.title,
    "System Administrator",
    "Network Engineer",
    "Web Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <AuroraBackground className="min-h-[100dvh] pt-32 pb-20" id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center w-full">
          
          {/* Image (Mobile First Order) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] mt-8 md:mt-0">
              {/* Abstract Background Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-zinc-200/50 dark:bg-zinc-900/50 rounded-full blur-3xl -z-10" />
              
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 shadow-2xl group rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src="/assets/image/myphoto.png"
                  alt="Avicena Fahmi"
                  className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-6 md:-left-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl flex items-center gap-3 z-20 w-max"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <span className="text-lg md:text-xl">👋</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Available for</p>
                  <p className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white">Freelance Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 text-center md:text-left mt-8 md:mt-0"
          >
            <div className="relative z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6 md:mb-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-default mx-auto md:mx-0 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-zinc-400 dark:text-zinc-500 mx-2">|</span>
              <div className="relative h-5 overflow-hidden min-w-[160px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block text-zinc-700 dark:text-zinc-300"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <h1 className="mb-6 relative z-20">
              <span className="block text-2xl sm:text-3xl font-medium text-zinc-600 dark:text-zinc-400 mb-2 tracking-wide drop-shadow-sm">
                {t.hero.greeting}
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none drop-shadow-md">
                <SplitText text={t.hero.name.split(' ')[0]} delay={0.2} /> <span className="text-blue-500 inline-block"><SplitText text={t.hero.name.split(' ')[1]} delay={0.5} /></span>
              </span>
            </h1>

            <p className="text-base md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 font-normal relative z-20">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-20">
              <a
                href="#projects"
                className="px-8 py-3 bg-zinc-900 text-zinc-50 dark:bg-white dark:text-black font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-zinc-900/10 dark:shadow-white/5"
              >
                {t.projects.viewDetails}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv"
                target="_blank"
                className="px-8 py-3 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-white font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                {t.hero.downloadCV}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800/50 relative z-20">
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-500 z-20"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
