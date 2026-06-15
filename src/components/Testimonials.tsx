import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000); // 7 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      {/* Background Decorative - REMOVED */}

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-accent-purple">
            07 // CLIENT ADVOCACY
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
          What My Collaborators Say
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-xl">
          Verifications of technical rigor and successful engineering deliverables from startups, founders, and VP architects.
        </p>
      </div>

      {/* Card Carousel stage */}
      <div className="relative max-w-3xl mx-auto px-1">
        <div className="relative min-h-[300px] sm:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="p-8 sm:p-10 rounded-2xl bg-surface-card border border-slate-800 shadow-xl backdrop-blur-md flex flex-col items-start text-left gap-6 relative"
            >
              {/* Giant icon Quote overlay */}
              <div className="absolute top-6 right-8 text-indigo-500/10 pointer-events-none">
                <Quote size={80} />
              </div>

              {/* Rating Star gauge */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} size={14} className="fill-accent-purple text-accent-purple" />
                ))}
              </div>

              {/* Core testimonial comment */}
              <p className="text-sm sm:text-base leading-relaxed text-text-secondary font-sans italic z-10">
                "{item.text}"
              </p>

              {/* Account details footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800 w-full z-10">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-800">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                </div>

                {/* Typography metadata */}
                <div className="flex flex-col">
                  <span className="font-sans font-bold text-sm text-text-white">
                    {item.name}
                  </span>
                  <span className="font-sans text-xs text-text-secondary">
                    {item.role}, <strong className="text-text-white font-normal">{item.company}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls - arrows and dots indicators */}
        <div className="flex items-center justify-between mt-8">
          {/* Indicators */}
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                id={`carousel-indicator-${idx}`}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === idx ? 'bg-accent-purple w-6' : 'bg-surface-card border border-slate-800 hover:bg-bg-primary'
                }`}
              />
            ))}
          </div>

          {/* Sibling Arrows */}
          <div className="flex gap-2">
            <button
              id="slider-btn-prev"
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-surface-card border border-slate-800 text-text-secondary hover:text-text-white transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              id="slider-btn-next"
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-surface-card border border-slate-800 text-text-secondary hover:text-text-white transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
