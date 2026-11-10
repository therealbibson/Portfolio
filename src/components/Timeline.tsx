import { motion } from 'motion/react';
import { TIMELINE } from '../data';
import { Briefcase, Link2 } from 'lucide-react';

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-900/80"
    >
      <div className="flex flex-col items-start text-left gap-4 mb-12">
        <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
          Career History
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
          Experience & Journey
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          My professional background building software solutions for teams, clients, and startups.
        </p>
      </div>

      <div className="relative max-w-3xl text-left pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
        {TIMELINE.map((item, idx) => {
          const Icon = item.type === 'freelance' ? Link2 : Briefcase;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Dot marker on line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-blue" />

              <div className="bg-surface-card border border-slate-800 p-5 sm:p-6 rounded-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon size={15} className="text-primary-blue" />
                    <h3 className="font-display font-semibold text-base sm:text-lg text-text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-bg-primary px-2.5 py-1 rounded border border-slate-800">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-primary-blue mb-3">
                  {item.organization}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {item.tech && item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800/80">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg-primary text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
