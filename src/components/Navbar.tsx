
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Translations } from '../app/data';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

interface NavbarProps {
  t: Translations;
  language: Language;
  toggleLanguage: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  visible?: boolean;
}

export default function Navbar({ t, language, toggleLanguage, isDarkMode, toggleTheme, visible = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -200 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`relative backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl transition-all duration-300 ${
            scrolled ? 'bg-white/90 dark:bg-zinc-900/90' : 'bg-white/50 dark:bg-zinc-900/50'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src="/assets/image/avicena-logo.png"
                  alt="Avicena Fahmi"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-white">
                Avicena
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1 items-center bg-zinc-100/50 dark:bg-zinc-900/50 rounded-full p-1 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group rounded-full hover:bg-white/50 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 flex items-center justify-center transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 group"
                aria-label="Toggle language"
              >
                <div className="relative w-5 h-5 overflow-hidden rounded-full">
                   <img 
                    src={`/assets/image/${language}.svg`} 
                    alt={language === 'en' ? 'English' : 'Indonesia'}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 flex items-center justify-center transition-all hover:bg-blue-500/10 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 w-full px-4 pt-2"
            >
              <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-blue-600 text-white px-4 py-3 rounded-xl text-center font-medium mt-2 hover:bg-blue-700 transition-colors"
                  >
                    {t.nav.contact}
                  </a>

                  <div className="flex gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-white/10 justify-center">
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
                    >
                      <img 
                        src={`/assets/image/${language}.svg`} 
                        alt={language}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300 uppercase">{language}</span>
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
                    >
                      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">Theme</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
