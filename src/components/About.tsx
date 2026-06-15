import { motion } from 'motion/react';
import { Award, CheckCircle, RefreshCcw, Star, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const stats = [
    {
      value: `${PERSONAL_INFO.experienceYears}+`,
      label: "Years Experience",
      info: "Commercial full-stack & mobile engineering",
      icon: Award,
      color: "bg-surface-card/60",
      iconColor: "text-primary-blue",
      accent: "shadow-blue-500/10"
    },
    {
      value: `${PERSONAL_INFO.projectsCompleted}+`,
      label: "Projects Completed",
      info: "Web products, APIs, and client-side systems",
      icon: CheckCircle,
      color: "bg-surface-card/60",
      iconColor: "text-accent-purple",
      accent: "shadow-purple-500/10"
    },
    {
      value: "40+",
      label: "Tech Core Repos",
      info: "Mastered frontend, backend, and LLM integrations",
      icon: Sparkles,
      color: "bg-surface-card/60",
      iconColor: "text-accent-purple",
      accent: "shadow-pink-500/10"
    },
    {
      value: PERSONAL_INFO.clientRetention,
      label: "Retention Rating",
      info: "Outstanding recommendations & client delivery",
      icon: RefreshCcw,
      color: "bg-surface-card/60",
      iconColor: "text-primary-blue",
      accent: "shadow-cyan-500/10"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="about"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Biography Texts */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-accent-purple">
              01 // THE STORY
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
            Designing Resurrected Digital Architectures
            <br />
            <span className="text-primary-blue font-extrabold">
              With Creative Rigor
            </span>
          </h2>

          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I am a specialized full-stack software developer who sits at the convergence of fast UI design and logical server coordination. For over half a decade, I have focused on constructing maintainable environments that bridge raw database performance with fluid state interactions.
            </p>
            <p>
              When the AI revolution started, I realized that simple code was no longer the boundary. I dove deep into **Generative AI Prompt Engineering** and structured LLM API orchestration. Today, I build systems that integrate LLM models as predictive logic blocks inside traditional Node and React infrastructures.
            </p>
            <p className="border-l-2 border-accent-purple pl-4 py-1.5 text-text-secondary italic">
              "The best engineering lives in high isolation, proper type contracts, and zero-compromise runtime responsiveness."
            </p>
          </div>

          {/* Social Proof Badges/Links */}
          <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs text-text-secondary font-mono uppercase block mb-1">PREFERRED LANGUAGE</span>
              <span className="text-sm font-semibold text-text-white">TypeScript (ESNext)</span>
            </div>
            <div>
              <span className="text-xs text-text-secondary font-mono uppercase block mb-1">LOCATION FOCUS</span>
              <span className="text-sm font-semibold text-text-white">Remote / Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Side: Staggered Stats Matrix Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                id={`about-stat-${i}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-6 rounded-xl bg-surface-card border border-slate-800 shadow-xl backdrop-blur-md flex flex-col items-start gap-4 hover:border-slate-700 transition-all duration-300 group"
              >
                {/* Visual Glow Circle behind icon */}
                <div className="w-12 h-12 rounded-xl bg-bg-primary flex items-center justify-center border border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <Icon className={`${stat.iconColor} relative z-10`} size={20} />
                </div>

                <div className="flex flex-col items-start text-left">
                  <span className="text-3xl font-extrabold text-text-white tracking-tight font-display block mb-1 group-hover:text-accent-purple transition-colors duration-200">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-slate-300 font-display block mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-text-secondary font-sans leading-tight">
                    {stat.info}
                  </span>
                </div>

                {/* Subtle border accent */}
                <div className="absolute right-4 top-4 opacity-5 pointer-events-none text-text-white font-mono text-2xl select-none font-extrabold group-hover:opacity-10 transition-opacity">
                  {`0${i + 1}`}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
