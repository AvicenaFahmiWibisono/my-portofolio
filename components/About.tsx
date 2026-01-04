
'use client';

import { motion } from 'framer-motion';
import { Translations } from '../app/data';
import { Briefcase, Code, GraduationCap, Award } from 'lucide-react';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  const stats = [
    { number: '2+', label: 'Years Experience', icon: <Briefcase className="w-6 h-6 text-blue-500" /> },
    { number: '6', label: 'Projects Completed', icon: <Code className="w-6 h-6 text-blue-500" /> },
    { number: '8+', label: 'Technologies', icon: <Award className="w-6 h-6 text-blue-500" /> },
    { number: '3', label: 'Certifications', icon: <GraduationCap className="w-6 h-6 text-blue-500" /> }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {t.about.sectionTitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight"
          >
            Passionate about <span className="text-blue-500">Technology</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-none transition-all group shadow-sm dark:shadow-none"
            >
              <div className="mb-4 p-3 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{stat.number}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              {t.about.education}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              {t.about.educationDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-500" />
              {t.about.skills}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              {t.about.skillsDesc}
            </p>
          </motion.div>
        </div>

        {/* Detailed Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-8 md:p-12 hover:border-zinc-300 dark:hover:border-zinc-700/50 transition-colors"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {t.about.hardSkills}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Microsoft Office', 'Arduino', 'PHP', 'HTML & CSS', 'MySQL', 'Cloud Computing', 'WordPress', 'IoT Systems'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                {t.about.softSkills}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Communication', 'Problem Solving', 'Time Management', 'Teamwork', 'Analysis', 'Documentation'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
