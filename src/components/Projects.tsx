import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, X, Info } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Mobile' | 'AI'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Frontend' | 'Backend' | 'Mobile' | 'AI')[] = ['All', 'Frontend', 'Backend', 'Mobile', 'AI'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section
      id="projects"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      {/* Background Decorative - REMOVED */}

      {/* Header text */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-primary-blue">
              04 // THE PORTFOLIO
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
            Engineering Showcases
            <br />
            <span className="text-primary-blue font-extrabold">
              Of Specialized Code
            </span>
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1.5 bg-surface-card border border-slate-800 p-1.5 rounded-xl backdrop-blur-md self-start">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-project-${cat}`}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold font-display tracking-tight transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-primary-blue text-text-white shadow-md'
                  : 'text-text-secondary hover:text-text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              id={`project-card-view-${project.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-surface-card border border-slate-800 hover:border-accent-purple/30 transition-all duration-300 backdrop-blur-md overflow-hidden flex flex-col justify-between shadow-xl h-full"
            >
              {/* Card Media Wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary border-b border-slate-800 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                />

                <div className="absolute inset-0 bg-bg-primary/60 pointer-events-none" />

                {/* Tags on Card Corner */}
                <div className="absolute top-3 left-3 bg-surface-card border border-slate-800 px-2.5 py-1 rounded font-mono text-[9px] font-bold text-primary-blue">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow self-stretch">
                <div className="flex flex-col items-start text-left mb-6">
                  <h3 className="font-display font-bold text-lg text-text-white group-hover:text-primary-blue transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary font-sans mt-2.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills Footer */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold font-mono text-text-secondary bg-bg-primary px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Detail Flag */}
                  <div className="flex items-center justify-between text-xs font-semibold text-accent-purple pt-4 border-t border-slate-800 select-none">
                    <span className="flex items-center gap-1 hover:text-primary-blue transition-colors">
                      <Info size={13} /> Details & Engineering Challenge
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary group-hover:text-slate-300">
                      View details
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Engineering Challenge Details Modal Panel */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id="modal-backdrop-div"
            className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-bg-primary/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="model-container-box"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-surface-card border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-[200px] sm:h-[260px] bg-bg-primary">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-surface-card/60 pointer-events-none" />

                <button
                  id="modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-bg-primary border border-slate-800 text-slate-300 hover:text-text-white"
                >
                  <X size={16} />
                </button>

                <div className="absolute bottom-4 left-6 text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-blue/20 border border-primary-blue/30 font-mono text-[9px] font-bold text-primary-blue uppercase tracking-widest block w-max mb-1.5">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 sm:p-8 text-left max-h-[50vh] overflow-y-auto custom-scrollbar flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-text-secondary uppercase mb-2">
                    SCOPE OVERVIEW
                  </h4>
                  <p className="text-sm font-sans text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-text-secondary uppercase mb-3">
                    CORE ENGINEERING ACCOMPLISHMENTS
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm font-sans text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-text-secondary uppercase mb-2">
                    TECHNOLOGIES UTILISED
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-xs font-semibold font-mono text-purple-300 bg-purple-950/30 border border-purple-900/40 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer actions */}
              <div className="p-6 bg-slate-900/60 border-t border-slate-850 flex items-center justify-between">
                <a
                  id="modal-link-github"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-text-white transition-colors cursor-pointer"
                >
                  <Github size={15} /> Source Repository
                </a>

                <a
                  id="modal-link-live"
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-blue text-text-white text-xs font-semibold hover:opacity-90 transition-all cursor-pointer"
                >
                  Live Sandbox Code <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
