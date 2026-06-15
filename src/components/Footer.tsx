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
    <footer
      id="portfolio-footer"
      className="relative bg-bg-primary border-t border-slate-900/80 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-slate-900/60 pb-10">
          
          {/* Logo and tag */}
          <div className="flex flex-col items-start gap-1">
            <a href="#overview" onClick={(e) => handleNavClick(e, '#overview')} className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded bg-primary-blue flex items-center justify-center font-mono font-extrabold text-text-white text-xs group-hover:rotate-6 transition-transform">
                UA
              </div>
              <span className="font-display font-bold text-text-white text-sm tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <span className="text-[10px] font-mono text-text-secondary tracking-wider">
              PRECISION CODE // AUTOMATED ORCHESTRATION
            </span>
          </div>

          {/* Quick link list */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-text-secondary font-sans">
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-text-white transition-colors">About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-text-white transition-colors">Skills</a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-text-white transition-colors">Services</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-text-white transition-colors">Projects</a>
            <a href="#timeline" onClick={(e) => handleNavClick(e, '#timeline')} className="hover:text-text-white transition-colors">Timeline</a>
          </div>

          {/* Sibling Socials and Back to top */}
          <div className="flex items-center gap-5">
            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a href="https://github.com/therealbibson" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white transition-all hover:scale-105">
                <Github size={15} />
              </a>
              <a href="https://linkedin.com/in/usman-abeeb-9a998a279?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white transition-all hover:scale-105">
                <Linkedin size={15} />
              </a>
              <a href="https://x.com/theRealBibson" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-white transition-all hover:scale-105">
                <FaXTwitter size={15} />
              </a>
            </div>

            {/* Back to top bullet */}
            <button
              id="scroll-to-top-btn"
              onClick={handleScrollToTop}
              className="p-2 rounded bg-bg-primary border border-slate-800 group-hover:bg-surface-card text-text-secondary hover:text-text-white hover:border-slate-700 transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[10px] text-text-secondary">
          <span>
            &copy; {currentYear} {PERSONAL_INFO.name}. ALL RIGHTS SECURED.
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block animate-pulse" />
            STATION STATUS: EXCELLENT INGRESS (PORT 3000)
          </span>
        </div>

      </div>
    </footer>
  );
}
