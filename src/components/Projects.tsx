
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Translations, Project } from '../app/data';
import { Github, ExternalLink, Tag, X, ChevronRight, ChevronLeft, ImageIcon, Maximize2, ArrowUpRight, Layers } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

interface ProjectsProps {
  t: Translations;
  projects: Project[];
  onModalChange?: (isOpen: boolean) => void;
}

function ProjectCard({ project, index, onClick, t }: { project: Project; index: number; onClick: (p: Project) => void; t: Translations }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div onClick={() => onClick(project)} className="h-full relative group cursor-pointer">
        {/* Animated Border Gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
        
        <SpotlightCard className="h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col" spotlightColor="rgba(59, 130, 246, 0.2)">
          
          {/* Image Container with Parallax-like effect */}
          <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-950">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Floating Badges */}
            <div className="absolute top-4 right-4 z-10">
              <div className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-sm">
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-sm">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow relative bg-white dark:bg-zinc-900/95 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-2xl shadow-inner">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-1">
                {project.title}
              </h3>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {project.desc}
            </p>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
              <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide">
                {project.role}
              </span>
              <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                {t.projects.viewDetails} <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}

export default function Projects({ t, projects, onModalChange }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    if (onModalChange) onModalChange(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (onModalChange) onModalChange(false);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3], 
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 50, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" 
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
               <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {t.projects.sectionTitle}
               </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 font-light"
            >
              Explore my latest works and technical achievements
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
             <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={handleProjectClick}
              t={t}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseModal}
                className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="w-full max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col h-[85vh] border border-zinc-200 dark:border-zinc-800"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                  {/* Left Side: Image Gallery */}
                  <div className="w-full lg:w-1/2 bg-zinc-100 dark:bg-black/50 relative group h-48 lg:h-auto shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 dark:bg-zinc-950">
                      {selectedProject.images.length > 0 ? (
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={selectedProject.title}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-zinc-400" />
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, idx) => (
                            <div 
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Right Side: Details */}
                  <div className="w-full lg:w-1/2 flex flex-col min-h-0 lg:h-full bg-white dark:bg-zinc-900 relative flex-1">
                    {/* Fixed Header */}
                    <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 shrink-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-10 flex justify-between items-start">
                        <div className="flex items-center gap-4">
                           <div className="p-2.5 bg-blue-500/10 rounded-xl shrink-0">
                             <span className="text-2xl">{selectedProject.icon}</span>
                           </div>
                           <div>
                             <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight line-clamp-1">
                                {selectedProject.title}
                             </h3>
                             <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mt-0.5">{selectedProject.role}</p>
                           </div>
                        </div>
                        
                        <button 
                          onClick={handleCloseModal}
                          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-zinc-500 dark:text-zinc-400 hover:text-red-500 transition-colors shrink-0"
                        >
                          <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                       <div className="prose dark:prose-invert max-w-none mb-8">
                          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line font-light">
                            {selectedProject.fullDescription || selectedProject.desc}
                          </p>
                       </div>

                       {/* Tech Stack */}
                       <div className="mb-2">
                          <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Layers size={14} className="text-blue-500" />
                            {t.projects.techStack}
                          </h4>
                          
                          {selectedProject.technologies ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {Object.entries(selectedProject.technologies.reduce((acc, tech) => {
                                if (!acc[tech.category]) acc[tech.category] = [];
                                acc[tech.category].push(tech.name);
                                return acc;
                              }, {} as Record<string, string[]>)).map(([category, techs], idx) => (
                                <div key={idx} className="bg-zinc-50 dark:bg-zinc-800/50 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
                                  <span className="text-[10px] font-bold text-blue-500 mb-2 block uppercase tracking-wider">{category}</span>
                                  <div className="flex flex-wrap gap-1.5">
                                    {techs.map((tech, i) => (
                                      <span key={i} className="px-2 py-0.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-[10px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tech.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                       </div>
                    </div>

                    {/* Fixed Footer */}
                    <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 shrink-0 bg-white dark:bg-zinc-900">
                       <div className="flex gap-3">
                          {selectedProject.demo && (
                            <a 
                              href={selectedProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                              <ExternalLink size={16} />
                              {t.projects.liveDemo}
                            </a>
                          )}
                          {selectedProject.github && (
                            <a 
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 text-sm"
                            >
                              <Github size={16} />
                              {t.projects.viewCode}
                            </a>
                          )}
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
