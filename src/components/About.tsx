'use client';

import { Translations } from '../app/data';
import { Briefcase, Code, GraduationCap, Award, Cpu, Users, Sparkles } from 'lucide-react';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  const stats = [
    { number: 2, suffix: '+', label: 'Years Experience', icon: <Briefcase className="w-5 h-5 text-blue-500" /> },
    { number: 6, suffix: '', label: 'Projects Completed', icon: <Code className="w-5 h-5 text-purple-500" /> },
    { number: 8, suffix: '+', label: 'Technologies', icon: <Award className="w-5 h-5 text-pink-500" /> },
    { number: 3, suffix: '', label: 'Certifications', icon: <GraduationCap className="w-5 h-5 text-amber-500" /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-black/20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm mb-4 shadow-sm hover:scale-105 transition-transform">
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            {t.about.sectionTitle}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4">
             Passionate about <span className="text-blue-500 inline-block">
               Technology
             </span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
             Turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Education Card - Tall Left */}
          <div className="md:row-span-2 h-full animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <div className="h-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  {t.about.education}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                  {t.about.educationDesc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Current Status</span>
                   </div>
                   <p className="text-sm text-zinc-500 dark:text-zinc-400">
                     Focusing on Web Development & Network Engineering
                   </p>
                </div>
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl -z-0" />
            </div>
          </div>

          {/* Stats Grid - Top Right (2x2) */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
             {stats.map((stat, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <div className="h-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 text-center hover:border-blue-500/50 transition-colors shadow-sm hover:shadow-md">
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <div className="mb-4 w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          {/* Skills - Bottom Right (Wide) */}
          <div className="md:col-span-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="h-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0 group-hover:bg-purple-500/10 transition-colors duration-500" />
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                      {t.about.skills}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      My technical arsenal & proficiency
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Code className="w-3 h-3" /> Hard Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Microsoft Office', 'Arduino', 'PHP', 'HTML & CSS', 'MySQL', 'Cloud Computing', 'WordPress', 'IoT Systems'].map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300 text-xs font-medium hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Users className="w-3 h-3" /> Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Communication', 'Problem Solving', 'Time Management', 'Teamwork', 'Analysis'].map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-600 dark:text-zinc-300 text-xs font-medium hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
