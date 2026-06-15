import { motion } from 'motion/react';
import { SERVICES } from '../data';
import DynamicIcon from './DynamicIcon';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      {/* Decorative backdrop elements - REMOVED */}

      <div className="flex flex-col items-start text-left gap-6 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-accent-purple">
            03 // THE SPECIALIZATION
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
          What Value I Deliver
          <br />
          <span className="text-accent-purple font-extrabold">
            To High-Growth Projects
          </span>
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl">
          Combining strict low-level system designs, modern reactive codebases, and custom neural-model scaffolding for reliable delivery.
        </p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {SERVICES.map((service, i) => {
          return (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-surface-card border border-slate-800 hover:border-primary-blue/35 transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col items-start text-left group overflow-hidden"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-bg-primary flex items-center justify-center border border-slate-800 text-primary-blue relative z-10 group-hover:bg-primary-blue group-hover:text-text-white transition-all duration-300">
                <DynamicIcon name={service.icon} size={20} className="relative z-10" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-xl text-text-white tracking-tight mt-6 group-hover:text-primary-blue transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary font-sans mt-3 leading-relaxed">
                {service.description}
              </p>

              {/* Deliverable Checkbullets */}
              <ul className="mt-6 space-y-2.5 w-full border-t border-slate-850/60 pt-6">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-1.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Inline Action Call to Trigger Chat Modal */}
              <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-primary-blue group-hover:text-accent-purple transition-colors duration-200 uppercase tracking-wider select-none cursor-pointer" onClick={onOpenContact}>
                Discuss this solution
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Background index label */}
              <div className="absolute right-6 top-6 opacity-5 pointer-events-none font-mono text-3xl font-extrabold select-none text-text-white group-hover:opacity-10 transition-opacity">
                {`0${i + 1}`}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
