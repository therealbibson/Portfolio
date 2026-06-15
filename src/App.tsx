import { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import AIExpertise from './components/AIExpertise';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';


export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth scroll helper for headers and buttons
  const handleOpenContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div id="portfolio-app-root" className="relative min-h-screen bg-bg-primary text-text-white selection:bg-accent-purple/40 selection:text-text-white antialiased">
      {/* 60 FPS HTML5 Canvas Cosmic particle field background */}
      <InteractiveBackground />

      {/* Glass navigation header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Core Layout Sections */}
      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <Hero onOpenContact={handleOpenContact} onOpenResume={handleOpenResume} />

        {/* BIOGRAPHIES STORY */}
        <About />

        {/* SKILLS CHRONICLE */}
        <Skills />

        {/* VALUE DELIVERABLES */}
        <Services onOpenContact={handleOpenContact} />

        {/* FEATURED PORTFOLIO */}
        <Projects />

        {/* TIMELINE ARCHIVE */}
        <Timeline />

        {/* AI PLAYGROUND PORTAL */}
        <AIExpertise />

        {/* TESTIMONIAL CAROUSEL */}
        <Testimonials />

        {/* TRANSMISSION DISPATCH CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL PORTAL: PRINT & DIGITAL RESUME CARD */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
