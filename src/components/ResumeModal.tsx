import { X, Printer, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, TIMELINE } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-3xl bg-surface-card text-text-white rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-700 print:my-0 print:border-none print:shadow-none print:bg-white print:text-neutral-900 print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Web view only, hidden when printing) */}
        <div className="flex items-center justify-between px-5 py-3 bg-surface-card border-b border-slate-700 text-text-white print:hidden">
          <span className="font-display font-semibold text-xs sm:text-sm">
            Resume — {PERSONAL_INFO.name} (Single-Page Format)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#4f739e] hover:bg-[#42607f] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Save as 1-Page PDF or Print"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-text-white hover:bg-white/5 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 1-Page Compact Document Canvas */}
        <div className="p-5 sm:p-7 overflow-y-auto max-h-[85vh] print:max-h-none print:overflow-visible print:h-auto flex flex-col gap-2.5 text-left text-xs sm:text-[12px] leading-tight font-sans print:p-0 print:gap-0 print:text-[8.5pt] print:leading-snug">
          
          {/* Header Block */}
          <div className="border-b border-slate-700 print:border-slate-300 pb-2 resume-section">
            {/* Name + title vs contact — resume-header-row for print stacking */}
            <div className="resume-header-row flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h1 className="font-display font-bold text-xl sm:text-2xl text-text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-medium text-xs text-primary-blue resume-sub-title">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Contact Links — resume-contact-row wraps on narrow print */}
              <div className="resume-contact-row flex flex-wrap gap-x-3 gap-y-0.5 text-[10.5px] sm:text-[11px] text-slate-300 print:text-neutral-700 font-mono pt-1 sm:pt-0">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:underline">
                  <Mail size={11} className="text-primary-blue" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <Github size={11} className="text-primary-blue" />
                  <span>github.com/therealbibson</span>
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                  <Linkedin size={11} className="text-primary-blue" />
                  <span>LinkedIn</span>
                </a>
                <span className="flex items-center gap-1">
                  <MapPin size={11} className="text-primary-blue" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
              </div>
            </div>

            {/* Brief Professional Summary */}
            <p className="mt-1.5 text-slate-300 print:text-neutral-700 text-[11px] sm:text-xs leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-700 pb-0.5">
              Technical Skills
            </h2>
            <div className="space-y-0.5 text-[10.5px] sm:text-[11.5px]">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.title}>
                  <span className="font-semibold text-text-white resume-role-title">{category.title}: </span>
                  <span className="text-slate-300 print:text-neutral-700">{category.items.map((item) => item.name).join(', ')}.</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-1.5 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-700 pb-0.5">
              Work Experience
            </h2>

            {TIMELINE.map((role) => (
              <div key={role.id} className="space-y-0.5">
                <div className="resume-job-row flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-semibold text-text-white resume-role-title">
                    {role.title} <span className="font-normal text-slate-300 print:text-neutral-600">— {role.organization}</span>
                  </span>
                  <span className="resume-date font-mono text-[9.5px] sm:text-[10px] text-slate-300 print:text-neutral-600 shrink-0">{role.period}</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 text-[10.5px] sm:text-[11px] space-y-0.5">
                  {(role.bullets ?? [role.description]).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* All Projects Section */}
          <div className="space-y-1 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-700 pb-0.5">
              Featured Projects ({PROJECTS.length})
            </h2>

            <div className="space-y-1 text-[10.5px] sm:text-[11px]">
              {PROJECTS.map((project) => (
                <div key={project.id} className="space-y-0.5">
                  <div>
                    <span className="font-semibold text-text-white resume-role-title">
                      {project.title}
                    </span>{' '}
                    <span className="resume-tech-tag font-mono font-normal text-[9.5px] text-slate-300 print:text-neutral-500">
                      | {project.techStack.join(', ')}
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-neutral-700">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
