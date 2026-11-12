import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export default function Header({ onOpenContact, onOpenResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-bg-primary/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between relative">
        {/* Brand Name — Left */}
        <a
          href="#overview"
          onClick={(e) => handleNavClick(e, '#overview')}
          className="group cursor-pointer py-1 shrink-0"
        >
          <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-primary-blue transition-colors">
            {PERSONAL_INFO.name}<span className="text-primary-blue">.</span>
          </span>
        </a>

        {/* Desktop Navigation — Centered absolutely */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side — Read the CV + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden md:flex px-3.5 py-1.5 rounded-lg bg-primary-blue hover:bg-blue-600 text-xs font-semibold text-white transition-colors cursor-pointer items-center gap-1.5 shrink-0"
          >
            <FileText size={13} />
            Read the CV
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-card/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 flex flex-col gap-3 text-left animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-200 hover:text-primary-blue py-1.5 transition-colors border-b border-slate-850/60"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="mt-3 w-full py-2.5 rounded-lg bg-primary-blue hover:bg-blue-600 text-xs font-semibold text-white text-center cursor-pointer flex items-center justify-center gap-2"
          >
            <FileText size={14} />
            Read the CV
          </button>
        </div>
      )}
    </header>
  );
}
