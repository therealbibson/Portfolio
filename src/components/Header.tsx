import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, MessageSquare } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background glassy effect
      setScrolled(window.scrollY > 20);

      // Simple scroll progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'AI Playground', href: '#ai-playground' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Scroll Indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary-blue transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Animated Brand Logo */}
        <motion.a
          id="nav-logo"
          href="#overview"
          onClick={(e) => handleNavClick(e, '#overview')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-primary-blue flex items-center justify-center font-mono font-bold text-text-white shadow-md group-hover:rotate-6 transition-transform duration-300">
            UA
          </div>
          <span className="font-display font-bold tracking-tight text-text-white group-hover:text-primary-blue transition-colors duration-200">
            {PERSONAL_INFO.name}
            <span className="text-accent-purple font-mono text-xs block -mt-1 font-normal tracking-widest">
              AI & FULL-STACK
            </span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-card border border-slate-800 px-2 py-1.5 rounded-full backdrop-blur-sm">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              id={`nav-item-${index}`}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-3.5 py-1.5 text-xs font-medium font-sans text-text-secondary hover:text-text-white rounded-full transition-colors duration-200 hover:bg-slate-800"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Action Button & Social Links */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              id="social-github"
              href="https://github.com/therealbibson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-white transition-colors duration-200 hover:scale-105"
            >
              <Github size={18} />
            </a>
            <a
              id="social-linkedin"
              href="https://linkedin.com/in/usman-abeeb-9a998a279?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-white transition-colors duration-200 hover:scale-105"
            >
              <Linkedin size={18} />
            </a>
            <a
              id="social-x"
              href="https://x.com/theRealBibson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-white transition-colors duration-200 hover:scale-105"
            >
              <FaXTwitter size={18} />
            </a>
          </div>

          <motion.button
            id="nav-hire-btn"
            onClick={onOpenContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-text-white bg-primary-blue hover:opacity-90 transition-all duration-300 flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <MessageSquare size={14} />
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            id="mobile-nav-hire-btn"
            onClick={onOpenContact}
            className="p-1.5 rounded-lg text-xs font-semibold text-text-white bg-primary-blue flex items-center justify-center hover:opacity-90"
          >
            <MessageSquare size={13} />
          </button>
          <button
            id="mobile-menu-burger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-200 p-1 hover:text-text-white focus:outline-none focus:ring-1 focus:ring-slate-800 rounded"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-primary/95 backdrop-blur-lg border-b border-slate-800/80 w-full overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-text-secondary hover:text-text-white py-1 block border-b border-slate-900/40"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 items-center justify-between pt-4 mt-2 border-t border-slate-800/40">
                <span className="text-xs text-text-secondary font-mono">SOCIAL CHANNELS</span>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white">
                    <Github size={18} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white">
                    <FaXTwitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
