
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../app/data';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

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
      role: 'IT Staff - Network Administrator & Developer',
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
      period: '2022 - 2026 (Expected)',
      location: 'Cikarang, Indonesia',
      logo: '/assets/image/ExperienceEducation/campus.png',
      description: 'Currently in 5th Semester. Active in Computing Faculty student activities. Focusing on Cloud Computing and Enterprise Systems.'
    },
    {
      degree: 'Industrial Electronics',
      school: 'SMK Mitra Industri MM2100',
      period: '2019 - 2022',
      location: 'Cikarang, Indonesia',
      logo: '/assets/image/ExperienceEducation/mitra.png',
      description: 'Graduated with expertise in IoT systems, microcontroller programming (Arduino), and industrial automation.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6">
            <Briefcase className="w-4 h-4" />
            {t.experience.sectionTitle}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight text-center">
            My <span className="text-blue-500">Journey</span>
          </h2>
          
          <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 sm:px-8 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {t.experience.workExperience}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 sm:px-8 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {t.experience.education}
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === 'experience' ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

                {experiences.map((exp, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-8 group">
                    {/* Logo/Icon Column */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img src={isDarkMode ? (exp.logoDark || exp.logo) : (exp.logoLight || exp.logo)} alt={exp.company} className="w-full h-full object-contain rounded-lg" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-grow">
                      <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 md:p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                          <div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                            <p className="text-zinc-700 dark:text-zinc-400 font-medium text-lg">{exp.company}</p>
                          </div>
                          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-zinc-500">
                            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-950/50 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
                              <Calendar className="w-3.5 h-3.5" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 mt-2 flex-shrink-0 group-hover:bg-blue-500 transition-colors" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
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
                  <div key={index} className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 p-8 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 group h-full">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 p-3 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-medium border border-blue-500/20">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <p className="text-zinc-700 dark:text-zinc-400 font-medium mb-4">{edu.school}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pt-6 border-t border-zinc-200 dark:border-zinc-800/50">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
