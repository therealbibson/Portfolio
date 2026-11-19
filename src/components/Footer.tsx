import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-bg-primary border-t border-stone-200 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-start gap-1">
            <a
              href="#overview"
              onClick={(e) => handleNavClick(e, '#overview')}
              className="group flex cursor-pointer items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f3d3e] font-display text-sm font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                UA
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-text-white transition-colors group-hover:text-primary-blue">
                UA<span className="text-primary-blue">.</span>
              </span>
            </a>
            <span className="text-xs text-stone-600 font-medium">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-5 text-xs text-stone-600">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-text-white transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-text-white transition-colors">Skills</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-text-white transition-colors">Services</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-text-white transition-colors">Projects</a>
            {/* Experience hidden for now — <a href="#timeline" onClick={(e) => handleNavClick(e, '#timeline')} className="hover:text-text-white transition-colors">Experience</a> */}
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-text-white transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-text-white transition-colors"
              title="X"
            >
              <FaXTwitter size={15} />
            </a>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-surface-card border border-stone-200 text-stone-600 hover:text-text-white transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <span>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
          <span>Built with React, TypeScript & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
