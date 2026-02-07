
'use client';

import { useState, useEffect } from 'react';
import { Language, translations, getProjectsData } from './data';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleModalChange = (isOpen: boolean) => {
    setIsNavbarVisible(!isOpen);
  };

  const t = translations[language];
  const projectsData = getProjectsData(language);

  if (!mounted) return null;

  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar 
        t={t} 
        language={language} 
        toggleLanguage={toggleLanguage} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        visible={isNavbarVisible}
      />
      
      <Hero t={t} />
      
      <About t={t} />
      
      <Experience t={t} isDarkMode={isDarkMode} />
      
      <Projects t={t} projects={projectsData} onModalChange={handleModalChange} />
      
      <Contact t={t} />
      
      <Footer t={t} />
    </main>
  );
}
