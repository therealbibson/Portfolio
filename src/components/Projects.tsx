import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, X } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Website' | 'Webapp' | 'Mobile' | 'AI'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Website' | 'Webapp' | 'Mobile' | 'AI')[] = ['All', 'Website', 'Webapp', 'Mobile', 'AI'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-900/80"
    >
      {/* Header and Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
        <div className="flex flex-col items-start gap-4">
          <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
            Featured Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
            Recent Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A selection of web applications, APIs, mobile apps, and tools I have built.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1 bg-surface-card border border-slate-800 p-1 rounded-lg self-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-primary-blue text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="group rounded-xl bg-surface-card border border-slate-800 hover:border-slate-700 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-bg-primary cursor-pointer border-b border-slate-800/80"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 px-2.5 py-0.5 rounded text-[11px] font-mono text-primary-blue">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display font-semibold text-lg text-text-white hover:text-primary-blue cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-bg-primary border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between text-xs font-medium">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      View details &rarr;
                    </button>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-blue transition-colors flex items-center gap-1"
                        title="GitHub Repository"
                      >
                        <Github size={15} />
                        <span>Code</span>
                      </a>
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-primary-blue transition-colors flex items-center gap-1"
                          title="Project URL"
                        >
                          <ExternalLink size={15} />
                          <span>Project</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-surface-card border border-slate-800 rounded-xl overflow-hidden shadow-2xl text-left"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-primary-blue uppercase">
                    {selectedProject.category} Project
                  </span>
                  <h3 className="font-display font-bold text-xl text-text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.details && selectedProject.details.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Key Highlights</h4>
                    <ul className="space-y-2">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-bg-primary border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-bg-primary hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                  >
                    <Github size={14} />
                    View on GitHub
                  </a>
                  {selectedProject.projectUrl && (
                    <a
                      href={selectedProject.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-primary-blue hover:bg-blue-600 text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
