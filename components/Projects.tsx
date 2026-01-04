
'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Translations, Project } from '../app/data';
import { Github, ExternalLink, Tag, X, ChevronRight, ChevronLeft, ImageIcon, Maximize2 } from 'lucide-react';

interface ProjectsProps {
  t: Translations;
  projects: Project[];
}

function ProjectCard({ project, index, onClick, t }: { project: Project; index: number; onClick: (p: Project) => void; t: Translations }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none"
    >
      <motion.div
        className="hidden md:block pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 dark:bg-zinc-800 backdrop-blur-md rounded-lg text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-zinc-700 transition-colors"
                title="View Code"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                title="Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-500 transition-colors mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-blue-500 font-medium">{project.role}</p>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-light">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 rounded-md border border-zinc-200 dark:border-zinc-700/50">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={() => onClick(project)}
          className="w-full py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 group/btn"
        >
          {t.projects.viewDetails}
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects({ t, projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsFullScreen(false);
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
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            {t.projects.sectionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Explore my latest works and personal projects
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl custom-scrollbar"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 group">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium flex items-center gap-2">
                        <ImageIcon size={12} />
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}

                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                  
                  <button
                    onClick={() => setIsFullScreen(true)}
                    className="absolute top-4 left-4 p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-colors z-10 opacity-0 group-hover:opacity-100"
                    title="Fullscreen"
                  >
                    <Maximize2 size={20} />
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-black/70 transition-colors z-10"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 custom-scrollbar">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx
                            ? 'border-blue-500 opacity-100'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-6 md:p-8 space-y-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">{selectedProject.title}</h3>
                      <div className="flex gap-2">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            title="View Code"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {selectedProject.demo && (
                          <a
                            href={selectedProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-blue-500 font-medium mb-4">{selectedProject.role}</p>
                    <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-light space-y-4">
                      {selectedProject.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="whitespace-pre-line">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-blue-500" />
                        {t.projects.keyFeatures}
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400 text-sm font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                        <Tag className="w-4 h-4 text-blue-500" />
                        {t.projects.technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {(selectedProject.challenges || selectedProject.outcome) && (
                    <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                      {selectedProject.challenges && (
                        <div>
                          <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{t.projects.challenges}</h4>
                          <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light space-y-2">
                            {selectedProject.challenges.split('\n\n').map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      )}
                      {selectedProject.outcome && (
                        <div>
                          <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{t.projects.outcome}</h4>
                          <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-light space-y-2">
                            {selectedProject.outcome.split('\n\n').map((paragraph, index) => (
                              <p key={index}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Fullscreen Image Overlay */}
              <AnimatePresence>
                {isFullScreen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setIsFullScreen(false)}
                  >
                    <button
                      onClick={() => setIsFullScreen(false)}
                      className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors z-20"
                    >
                      <X size={24} />
                    </button>

                    {/* Navigation Arrows for Fullscreen */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm z-20"
                        >
                          <ChevronLeft size={32} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm z-20"
                        >
                          <ChevronRight size={32} />
                        </button>
                      </>
                    )}

                    <motion.img
                      key={`fs-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain select-none"
                      onClick={(e) => e.stopPropagation()}
                    />

                    {/* Image Counter for Fullscreen */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2">
                      <ImageIcon size={16} />
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
