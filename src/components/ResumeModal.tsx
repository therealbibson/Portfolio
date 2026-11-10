import { X, Printer, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE, SKILL_CATEGORIES, PROJECTS } from '../data';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-3xl bg-surface-card text-text-white rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-800 print:my-0 print:border-none print:shadow-none print:bg-white print:text-neutral-900 print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Web view only, hidden when printing) */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800 text-text-white print:hidden">
          <span className="font-display font-semibold text-xs sm:text-sm">
            Resume — {PERSONAL_INFO.name} (Single-Page Format)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-primary-blue hover:bg-blue-600 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              title="Save as 1-Page PDF or Print"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 1-Page Compact Document Canvas */}
        <div className="p-5 sm:p-7 overflow-y-auto max-h-[85vh] print:max-h-none print:overflow-visible flex flex-col gap-2.5 text-left text-xs sm:text-[12px] leading-tight font-sans print:p-0 print:text-[8.5pt] print:leading-snug">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-2 resume-section">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h1 className="font-display font-bold text-xl sm:text-2xl text-text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-medium text-xs text-primary-blue resume-sub-title">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap sm:justify-end gap-x-3 gap-y-0.5 text-[10.5px] sm:text-[11px] text-slate-300 print:text-neutral-700 font-mono pt-1 sm:pt-0">
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
                  <span>Lagos, Nigeria (Remote)</span>
                </span>
              </div>
            </div>

            {/* Brief Professional Summary */}
            <p className="mt-1.5 text-slate-300 print:text-neutral-700 text-[11px] sm:text-xs leading-relaxed">
              Full-Stack Developer with 3+ years of experience building responsive web frontends, scalable REST APIs, and cross-platform mobile apps. Proficient in TypeScript, React, Next.js, Node.js, and React Native with practical experience integrating LLM APIs into production applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-800 pb-0.5">
              Technical Skills
            </h2>
            <div className="space-y-0.5 text-[10.5px] sm:text-[11.5px]">
              <div>
                <span className="font-semibold text-text-white resume-role-title">Languages & Frontend: </span>
                <span className="text-slate-300 print:text-neutral-700">TypeScript, JavaScript, React, Next.js, Tailwind CSS, HTML5/CSS3, Zustand, Redux.</span>
              </div>
              <div>
                <span className="font-semibold text-text-white resume-role-title">Backend & Cloud: </span>
                <span className="text-slate-300 print:text-neutral-700">Node.js, Express.js, PostgreSQL, MongoDB, RESTful APIs, Redis, Docker.</span>
              </div>
              <div>
                <span className="font-semibold text-text-white resume-role-title">Mobile & Tools: </span>
                <span className="text-slate-300 print:text-neutral-700">React Native, Expo, SQLite, Git, Linux, LLM APIs (Gemini, Claude, OpenAI).</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-1.5 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-800 pb-0.5">
              Work Experience
            </h2>

            {/* Role 1 */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-text-white resume-role-title">
                  Full-Stack Software Engineer <span className="font-normal text-slate-400 print:text-neutral-600">— Tech Solutions & Engineering</span>
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-slate-400 print:text-neutral-600">2024 – Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 text-[10.5px] sm:text-[11px] space-y-0.5">
                <li>Architected full-stack web applications using React, TypeScript, and Node.js with PostgreSQL persistence.</li>
                <li>Designed secure RESTful APIs with JWT authentication, Redis caching, and integrated Gemini LLM workflows for automated data parsing.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-text-white resume-role-title">
                  Full-Stack & Mobile Developer <span className="font-normal text-slate-400 print:text-neutral-600">— Freelance & Startups</span>
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-slate-400 print:text-neutral-600">2022 – 2024</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 text-[10.5px] sm:text-[11px] space-y-0.5">
                <li>Built cross-platform iOS and Android mobile apps using React Native and Expo with offline-first SQLite synchronization.</li>
                <li>Engineered responsive client dashboards and integrated third-party payment and messaging APIs.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-text-white resume-role-title">
                  Frontend Developer <span className="font-normal text-slate-400 print:text-neutral-600">— Digital Interface Studio</span>
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-slate-400 print:text-neutral-600">2021 – 2022</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 print:text-neutral-700 text-[10.5px] sm:text-[11px] space-y-0.5">
                <li>Developed modular, accessible UI components and optimized Core Web Vitals to deliver sub-second page loads.</li>
              </ul>
            </div>
          </div>

          {/* All 5 Projects Section */}
          <div className="space-y-1 resume-section">
            <h2 className="font-display font-bold text-[10.5px] uppercase tracking-wider text-primary-blue border-b border-slate-800 pb-0.5">
              Featured Projects ({PROJECTS.length})
            </h2>

            <div className="space-y-1 text-[10.5px] sm:text-[11px]">
              {PROJECTS.map((project) => (
                <div key={project.id} className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold text-text-white resume-role-title">
                      {project.title} <span className="font-mono font-normal text-[9.5px] text-slate-400 print:text-neutral-600">| {project.techStack.join(', ')}</span>
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
