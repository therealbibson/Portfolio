import { X, Printer, Download, MapPin, Briefcase, Mail, Globe, Award } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE, SKILL_CATEGORIES } from '../data';

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
      className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-bg-primary/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-surface-card text-text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 print:my-0 print:rounded-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dynamic header control bar for web view */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-card border-b border-slate-800 text-text-white print:hidden">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-accent-purple animate-pulse" />
            <span className="font-display font-bold text-sm tracking-tight">Interactive Resume Matrix</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-bg-primary border border-slate-800 hover:border-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Printer size={13} /> Print / Export (PDF)
            </button>
            <button
              id="close-resume-btn"
              onClick={onClose}
              className="p-1.5 rounded-full bg-bg-primary border border-slate-800 text-text-secondary hover:text-text-white cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto max-h-[80vh] print:max-h-none print:overflow-visible flex flex-col gap-8 bg-surface-card select-text text-left">
          
          {/* Header block */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-slate-800 pb-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-text-white tracking-tight leading-none uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <span className="font-display font-bold text-sm tracking-wide text-accent-purple block uppercase mt-1">
                {PERSONAL_INFO.title}
              </span>
              <p className="text-xs sm:text-sm text-text-secondary font-sans max-w-md leading-relaxed mt-2">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-text-secondary font-sans sm:text-right">
              <span className="flex items-center sm:justify-end gap-1.5">
                <Mail size={12} className="text-accent-purple" /> uabeeb3@gmail.com
              </span>
              <span className="flex items-center sm:justify-end gap-1.5">
                <Globe size={12} className="text-accent-purple" /> alexsterling-dev.io
              </span>
              <span className="flex items-center sm:justify-end gap-1.5">
                <MapPin size={12} className="text-accent-purple" /> London, UK / Remote focus
              </span>
              <span className="flex items-center sm:justify-end gap-1.5 font-mono text-[10px] text-zinc-400 mt-1 uppercase">
                STATION ID: #7915-B3
              </span>
            </div>
          </div>

          {/* Staggered double column grids */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left side: Skills and Core credentials (md:col-span-4) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-xs text-text-secondary tracking-wider uppercase border-b border-slate-800 pb-2">
                  Technical Core Matrix
                </h3>
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title} className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-display font-bold text-text-white">{cat.title}</span>
                    <div className="flex flex-wrap gap-1">
                      {cat.items.map((skill) => (
                        <span key={skill.name} className="text-[9px] font-mono font-semibold bg-bg-primary text-text-secondary px-1.5 py-0.5 rounded border border-slate-800">
                          {skill.name} ({skill.percent}%)
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-xs text-text-secondary tracking-wider uppercase border-b border-slate-800 pb-2">
                  Operating Competences
                </h3>
                <ul className="space-y-1.5 text-xs text-text-secondary font-sans">
                  <li>• System-level prompt injections testing</li>
                  <li>• Thread parallelization & cluster loads</li>
                  <li>• Semantic JSON validations via schemas</li>
                  <li>• Zero-compromise web layout accessibility</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-xs text-text-secondary tracking-wider uppercase border-b border-slate-800 pb-2">
                  Certifications Gate
                </h3>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold text-text-white">Advanced AI Agent Specialist</span>
                  <span className="text-[10px] text-text-secondary">Alliance of Cognitive Computing (2023)</span>
                </div>
              </div>

            </div>

            {/* Right side: Experiences ledger (md:col-span-8) */}
            <div className="md:col-span-8 flex flex-col gap-6 border-l border-slate-800 pl-0 md:pl-6">
              <h3 className="font-display font-bold text-xs text-text-secondary tracking-wider uppercase border-b border-slate-800 pb-2">
                Professional Engineering Ledg
              </h3>

              <div className="flex flex-col gap-6">
                {TIMELINE.filter(item => item.type !== 'certification').map((job) => (
                  <div key={job.id} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <div className="flex flex-col">
                        <h4 className="font-display font-bold text-sm text-text-white">{job.title}</h4>
                        <span className="text-xs text-accent-purple font-semibold">{job.organization}</span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-primary border border-slate-800 text-text-secondary uppercase tracking-tight">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-xs text-text-secondary font-sans leading-relaxed">
                      {job.description}
                    </p>

                    {job.tech && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {job.tech.map(t => (
                          <span key={t} className="text-[9px] font-mono text-text-secondary bg-bg-primary border border-slate-800 px-1.5 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Footer of printable document */}
          <div className="border-t border-slate-800 pt-6 text-center text-[10px] text-text-secondary font-sans uppercase tracking-wider block print:hidden">
            Document generated at London HQ • Print is beautifully fitted for standard A4 layout.
          </div>
        </div>
      </div>
    </div>
  );
}
