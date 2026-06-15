import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import DynamicIcon from './DynamicIcon';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number | null>(null); // Hover interaction highlights

  return (
    <section
      id="skills"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      <div className="flex flex-col items-start text-left gap-6 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-primary-blue">
            02 // THE DISCIPLINE
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
          Pioneering Core Engineering
          <br />
          <span className="text-primary-blue font-extrabold">
            Capabilities & Models
          </span>
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
          Deep skill sets with precise implementation depths. I refuse superficial checklists—each stack has been deployed, profiled, and optimized in active production workloads.
        </p>
      </div>

      {/* Grid of four main cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {SKILL_CATEGORIES.map((category, idx) => {
          const isHovered = activeTab === idx;

          return (
            <motion.div
              key={category.title}
              id={`skill-card-cate-${idx}`}
              onMouseEnter={() => setActiveTab(idx)}
              onMouseLeave={() => setActiveTab(null)}
              className={`relative p-6 sm:p-8 rounded-2xl bg-surface-card border transition-all duration-500 backdrop-blur-md flex flex-col gap-6 select-none ${
                isHovered
                  ? 'border-accent-purple/40 shadow-xl'
                  : 'border-slate-800/60 shadow-lg'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bg-primary flex items-center justify-center border border-slate-800 text-primary-blue group-hover:scale-105 transition-transform duration-300">
                    <DynamicIcon name={category.icon} className="text-accent-purple" size={18} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-text-secondary border border-slate-800/80 px-2 py-0.5 rounded uppercase">
                  ACTIVE_CORE_0{idx + 1}
                </span>
              </div>

              {/* Items Meter Fields */}
              <div className="flex flex-col gap-5">
                {category.items.map((skill, sIdx) => {
                  return (
                    <div key={skill.name} className="flex flex-col gap-1.5" id={`skill-item-${idx}-${sIdx}`}>
                      {/* Name and Level info */}
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 text-text-secondary font-sans font-medium">
                          <DynamicIcon name={skill.icon} className="text-text-secondary" size={13} />
                          {skill.name}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-accent-purple bg-accent-purple/10 border border-accent-purple/30 px-1.5 py-0.5 rounded">
                            {skill.level}
                          </span>
                          <span className="font-mono font-bold text-text-secondary text-xs">
                            {skill.percent}%
                          </span>
                        </div>
                      </div>

                      {/* Animated Gauge Rail */}
                      <div className="w-full h-1.5 rounded-full bg-bg-primary overflow-hidden relative border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: sIdx * 0.05 }}
                          className="h-full rounded-full bg-primary-blue relative overflow-hidden"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subdued watermark border at bottom */}
              <div className="absolute bottom-3 right-4 opacity-5 pointer-events-none font-mono text-[8px] text-white">
                NODE SECURITY SEAL // STACK_ID
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
