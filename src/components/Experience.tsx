'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../app/data';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

interface ExperienceProps {
  t: Translations;
  isDarkMode: boolean;
}

export default function Experience({ t, isDarkMode }: ExperienceProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experiences = [
    {
      role: 'System Administrator & Founder',
      company: 'CenaHost (Self-employed)',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      logo: 'https://cenahost.id/images/logo.webp',
      logoLight: 'https://docs.cenahost.my.id/wp-content/uploads/2025/05/Service-e1748140987324.png',
      logoDark: 'https://cenahost.id/images/logo.webp',
      description: [
        'Built multi-service hosting business serving web, game server, and bot hosting',
        'Managed Linux VPS infrastructure, cPanel/WHM, and Pterodactyl panels',
        'Implemented automated billing system with WHMCS integration',
        'Provided 24/7 technical support for 235+ community members'
      ]
    },
    {
      role: 'IT Staff - IT SUPPORT',
      company: 'PT Megalopolis Manunggal Industrial Development',
      period: 'Mar 2023 - Present',
      location: 'Cikarang Barat, Bekasi',
      logo: '/assets/image/ExperienceEducation/mmid.png',
      description: [
        'Developed web-based network monitoring system for industrial area management',
        'Managed fiber optic infrastructure and CCTV systems across 4 locations',
        'Implemented IP scanning and real-time device monitoring features',
        'Maintained 99.9% network uptime for critical infrastructure'
      ]
    },
    {
      role: 'IT Support Intern',
      company: 'Sugity Creatives',
      period: '2022',
      location: 'Cikarang, Indonesia',
      logo: '/assets/image/ExperienceEducation/sugity.png',
      description: [
        'Provided technical support for hardware and software issues',
        'Assisted in network maintenance and troubleshooting',
        'Maintained IT asset inventory and documentation'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Information Systems',
      school: 'President University',
      period: '2024 - Present',
      location: 'Cikarang, Indonesia',
      logo: '/assets/image/ExperienceEducation/campus.png',
      description: 'Currently in 5th Semester. Active in Computing Faculty student activities. Focusing on Cloud Computing and Enterprise Systems.'
    },
    {
      degree: 'Industrial Electronics',
      school: 'SMK Mitra Industri MM2100',
      period: '2020 - 2023',
      location: 'Cikarang, Indonesia',
      logo: '/assets/image/ExperienceEducation/mitra.png',
      description: 'Graduated with expertise in IoT systems, microcontroller programming (Arduino), and industrial automation.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6"
          >
            <Briefcase className="w-4 h-4 text-blue-500" />
            {t.experience.sectionTitle}
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight text-center">
            My <span className="text-blue-500 inline-block">Journey</span>
          </h2>
          
          {/* Custom Tabs */}
          <div className="flex p-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 relative">
            {(['experience', 'education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-xl transition-colors z-10 ${
                  activeTab === tab 
                    ? 'text-zinc-900 dark:text-white' 
                    : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab === 'experience' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  {tab === 'experience' ? t.experience.workExperience : t.experience.education}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 pl-8 md:pl-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-[3px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-transparent -translate-x-1/2 hidden md:block" />
                <div className="absolute left-[3px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2 md:hidden" />

                {experiences.map((exp, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Dot */}
                    <div className="absolute left-[-29px] md:left-1/2 top-8 w-4 h-4 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-500 -translate-x-1/2 z-20 shadow-md" />

                    {/* Spacer for Desktop */}
                    <div className="flex-1 hidden md:block" />

                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <SpotlightCard className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-1">
                        <div className="p-6 md:p-8">
                          <div className="flex items-start justify-between gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 p-2 flex items-center justify-center">
                               <img src={isDarkMode ? (exp.logoDark || exp.logo) : (exp.logoLight || exp.logo)} alt={exp.company} className="w-full h-full object-contain" />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-medium border border-blue-500/20 whitespace-nowrap">
                              {exp.period}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm mb-6">
                            <Building2 className="w-3.5 h-3.5" />
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <span className="text-zinc-400">{exp.location}</span>
                          </div>

                          <ul className="space-y-3">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2 flex-shrink-0" />
                                {desc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {education.map((edu, index) => (
                  <SpotlightCard key={index} className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl h-full">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 p-3 flex items-center justify-center">
                          <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-400 text-xs font-medium border border-purple-500/20">
                          {edu.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-medium mb-6">
                         <MapPin className="w-4 h-4" />
                         {edu.school}
                      </div>
                      
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-6">
                        {edu.description}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
