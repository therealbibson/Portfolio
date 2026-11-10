import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-900/80"
    >
      <div className="flex flex-col items-start text-left gap-4 mb-12">
        <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
          Technical Skills
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
          Tools, Languages & Frameworks
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          Technologies and tools I use to develop robust, production-grade applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {SKILL_CATEGORIES.map((category, idx) => {
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-surface-card border border-slate-800 flex flex-col gap-5 hover:border-slate-700 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-primary flex items-center justify-center border border-slate-800 text-primary-blue">
                  <DynamicIcon name={category.icon} size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-text-white">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-primary/80 border border-slate-800 text-xs text-slate-200 hover:border-primary-blue/40 transition-colors"
                  >
                    {skill.icon && (
                      <DynamicIcon name={skill.icon} size={13} className="text-primary-blue" />
                    )}
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        ({skill.level})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
