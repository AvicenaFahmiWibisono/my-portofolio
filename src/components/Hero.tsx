'use client';

import { useState, useEffect } from 'react';
import { Translations } from '../app/data';

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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300); // Wait for fade out
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="min-h-[100dvh] pt-32 pb-20 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900" id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center w-full">
          
          {/* Image (Mobile First Order) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] mt-8 md:mt-0">
              {/* Simple Background Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-2xl -z-10" />
              
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                <img
                  src="/assets/image/myphoto.png"
                  alt="Avicena Fahmi"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-6 md:-left-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 md:p-4 rounded-2xl shadow-lg flex items-center gap-3 z-20 w-max">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <span className="text-lg md:text-xl">👋</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Available for</p>
                  <p className="text-xs md:text-sm font-bold text-zinc-900 dark:text-white">Freelance Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left mt-8 md:mt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6 md:mb-8 mx-auto md:mx-0 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-zinc-400 dark:text-zinc-500 mx-2">|</span>
              <div className="relative h-5 overflow-hidden min-w-[160px] text-left">
                  <span
                    className={`block text-zinc-700 dark:text-zinc-300 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {roles[currentRoleIndex]}
                  </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              {t.hero.greeting} <span className="text-blue-500">Avicena</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                {t.projects.viewDetails}
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors w-full sm:w-auto"
              >
                {t.hero.contactMe}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
