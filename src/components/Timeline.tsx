import { motion } from 'motion/react';
import { TIMELINE } from '../data';
import { Award, Briefcase, GraduationCap, Link2 } from 'lucide-react';

export default function Timeline() {
  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="timeline"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      <div className="flex flex-col items-start text-left gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-accent-purple">
            05 // THE HISTORY
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
          Experience Engineering &
          <br />
          <span className="text-primary-blue font-extrabold">
            Active Milestones
          </span>
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
          Tracking primary development achievements, corporate lead products, open-source operations, and prompt certification gates.
        </p>
      </div>

      {/* Main timeline column */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 py-2">
        {/* Continuous dynamic vertical line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={lineVariants}
          className="absolute left-[13px] sm:left-[17px] top-4 w-[2px] bg-primary-blue origin-top -z-10"
        />

        {/* Timeline Items list */}
        <div className="flex flex-col gap-12 text-left">
          {TIMELINE.map((item, idx) => {
            const isCert = item.type === 'certification';
            const Icon = isCert ? GraduationCap : item.type === 'freelance' ? Link2 : Briefcase;

            return (
              <div key={item.id} className="relative group" id={`timeline-row-${idx}`}>
                {/* Node marker wrapper */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={nodeVariants}
                  className={`absolute -left-[24px] sm:-left-[28px] top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border z-10 ${
                    isCert
                      ? 'bg-bg-primary border-accent-purple text-accent-purple'
                      : 'bg-bg-primary border-primary-blue text-primary-blue'
                  } group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon size={13} className="sm:size-14" />
                </motion.div>

                {/* Info Display Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={cardVariants}
                  className="pl-6 sm:pl-8 flex flex-col items-start gap-3"
                >
                  {/* Period badge and Tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-surface-card border border-slate-800 text-text-secondary">
                      {item.period}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-text-secondary">
                      {item.type}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="flex flex-col">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-text-white tracking-tight group-hover:text-primary-blue transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-sans font-medium text-sm text-text-secondary">
                      {item.organization}
                    </span>
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-text-secondary font-sans leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  {/* Associated Tech Tags */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tech.map((tool) => (
                        <span
                          key={tool}
                          className="text-[9px] font-mono font-semibold text-text-secondary bg-bg-primary px-2 py-0.5 rounded border border-slate-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
