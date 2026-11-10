import { motion } from 'motion/react';
import { SERVICES } from '../data';
import DynamicIcon from './DynamicIcon';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-900/80"
    >
      <div className="flex flex-col items-start text-left gap-4 mb-12">
        <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
          What I Offer
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
          Services & Capabilities
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
          End-to-end development services to help you build reliable, performant, and scalable applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {SERVICES.map((service, i) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 sm:p-7 rounded-xl bg-surface-card border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-bg-primary flex items-center justify-center border border-slate-800 text-primary-blue mb-4">
                  <DynamicIcon name={service.icon} size={20} />
                </div>

                <h3 className="font-display font-semibold text-lg text-text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-1.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                onClick={onOpenContact}
                className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-semibold text-primary-blue hover:text-blue-400 cursor-pointer transition-colors"
              >
                <span>Discuss a project</span>
                <ArrowRight size={13} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
