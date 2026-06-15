import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Layers, Server, Smartphone, BrainCircuit, Bot } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

// Dynamic image path resolved from tool output
const AVATAR_PATH = "/src/assets/images/portfolio_pic.jpg";

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenContact, onOpenResume }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        {/* Left Typography Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Tag Capsule */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800 backdrop-blur-md shadow-lg"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-text-secondary">
              AVAILABLE FOR ELITE Freelancing & CONTRACTS
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl text-text-white tracking-tight leading-tight"
          >
            Building Scalable
            <br />
            Digital Experiences with
            <br />
            <span className="text-primary-blue font-extrabold shadow-sm">
              Code & AI Precision
            </span>
          </motion.h1>

          {/* Subheading: Multi-role pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-3 py-1 font-mono text-xs sm:text-sm text-text-secondary"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-primary-blue/20 text-primary-blue">
              <Layers size={13} /> Frontend
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-primary-blue/20 text-primary-blue">
              <Server size={13} /> Backend
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-accent-purple/20 text-accent-purple">
              <Smartphone size={13} /> Mobile
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-surface-card border border-accent-purple/20 text-accent-purple">
              <Bot size={13} /> Generative AI
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-text-secondary font-sans max-w-xl leading-relaxed"
          >
            I am <strong className="text-text-white">{PERSONAL_INFO.name}</strong>, a robust software engineer delivering fast React interfaces, secure Express API backends, highly interactive mobile application caches, and custom multi-agentic prompts structured for high production alignment.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            {/* View Projects */}
            <button
              id="hero-view-projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-text-white bg-primary-blue hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 border border-blue-400/20 hover:scale-[1.02] cursor-pointer shadow-md"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            {/* Resume and Hire */}
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                id="hero-download-resume"
                onClick={onOpenResume}
                className="flex-1 sm:flex-none px-5 py-3.5 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-white bg-surface-card hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              >
                <Download size={16} />
                Resume
              </button>

              <button
                id="hero-hire-me"
                onClick={onOpenContact}
                className="flex-1 sm:flex-none px-5 py-3.5 rounded-lg text-sm font-semibold text-text-secondary hover:text-text-white bg-surface-card hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              >
                <Mail size={16} />
                Hire Me
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Interactive Tech Ornament */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-12 lg:py-0">
          {/* Infinite Orbital Ring */}
          <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-blue-500/10 -z-10 rotate-12 scale-x-125" />
          <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-purple-500/10 -z-10 -rotate-12 scale-y-125" />

          {/* Avatar Perspective Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.3 }}
            className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-2xl overflow-hidden p-[1px] bg-slate-800 shadow-2xl group"
          >
            <div className="w-full h-full bg-surface-card rounded-2xl overflow-hidden relative">
              {/* Main Avatar Image */}
              <img
                src={AVATAR_PATH}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none grayscale-[15%] group-hover:grayscale-0"
              />

              {/* Diagonal Neon Light Sweeps - REMOVED */}

              {/* Floating Hologram Overlays */}
              <div className="absolute top-3 left-3 bg-surface-card border border-slate-800 px-2 py-1 rounded font-mono text-[9px] text-primary-blue flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
                SYSTEM_LIVE
              </div>

              <div className="absolute bottom-3 right-3 bg-surface-card border border-slate-800 px-2 py-1 rounded font-mono text-[9px] text-accent-purple">
                L_NODE: #5379
              </div>
            </div>
          </motion.div>

          {/* Floating Orbiting Bubbles (Fulfill "Floating technology icons") */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute top-10 -left-6 bg-surface-card border border-slate-800 p-2.5 rounded-xl shadow-lg"
          >
            <span className="text-xl">⚛️</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 -right-4 bg-surface-card border border-slate-800 p-2.5 rounded-xl shadow-lg"
          >
            <span className="text-xl">🤖</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 -right-8 bg-surface-card border border-slate-800 p-2.5 rounded-xl shadow-lg font-mono text-xs text-primary-blue"
          >
            {"{ TS }"}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
