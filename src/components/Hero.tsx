import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data';
import avatarImg from '../assets/images/portfolio_pic.png';

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
        staggerChildren: 0.05,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Professional portrait — 3:4 frame matching the photo (1086x1448), face
  // anchored at the top so it is never cropped. Static, thin stone border,
  // subtle shadow, no glow or floating.
  const renderAvatar = (isMobile = false) => (
    <div className="relative">
      <div
        className={`relative ${
          isMobile
            ? 'w-56 sm:w-64 aspect-[3/4]'
            : 'w-[300px] xl:w-[340px] aspect-[3/4]'
        } rounded-2xl overflow-hidden border border-stone-200 bg-surface-card p-1 shadow-sm`}
      >
        <div className="w-full h-full bg-surface-card rounded-xl overflow-hidden relative">
          <img
            src={avatarImg}
            alt={PERSONAL_INFO.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="overview"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 max-w-6xl mx-auto px-4 sm:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
        {/* Left Column (Main Intro on Desktop, Full Flow on Mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 text-left"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-stone-200 text-[11px] sm:text-xs font-mono text-text-secondary"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available for new projects & opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-text-white tracking-tight leading-[1.15]"
          >
            Hi, I'm <span className="text-primary-blue">{PERSONAL_INFO.name}</span>.
            <br />
            <span className="text-2xl sm:text-4xl lg:text-5xl text-stone-600 font-semibold">
              Full-Stack Developer & Software Engineer
            </span>
          </motion.h1>

          {/* Role Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-text-secondary"
          >
            {PERSONAL_INFO.roles.map((role) => (
              <span
                key={role}
                className="px-2.5 py-1 rounded-md bg-surface-card border border-stone-200 text-stone-600"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Mobile-Only Avatar (In-between Roles and Bio) */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden w-full flex justify-center py-4 sm:py-5"
          >
            {renderAvatar(true)}
          </motion.div>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-text-secondary font-sans max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1"
          >
            <button
              id="hero-view-projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0f3d3e] hover:bg-[#0a2e2f] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-stone-900/10"
            >
              View Projects
              <ArrowRight size={16} />
            </button>

            <div className="grid grid-cols-2 sm:flex gap-3">
              <button
                id="hero-download-resume"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-stone-600 hover:text-text-white bg-surface-card hover:bg-stone-100 border border-stone-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={16} />
                Resume
              </button>

              <button
                id="hero-contact-me"
                onClick={onOpenContact}
                className="px-5 py-3 rounded-lg text-sm font-semibold text-stone-600 hover:text-text-white bg-surface-card hover:bg-stone-100 border border-stone-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail size={16} />
                Contact
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-2 text-text-secondary text-sm"
          >
            <span className="text-xs font-mono text-stone-600">Find me on:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-stone-100 hover:text-primary-blue transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-stone-100 hover:text-primary-blue transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-stone-100 hover:text-primary-blue transition-colors"
              title="X (Twitter)"
            >
              <FaXTwitter size={17} />
            </a>
          </motion.div>
        </motion.div>

        {/* Desktop-Only Avatar Container */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {renderAvatar(false)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
