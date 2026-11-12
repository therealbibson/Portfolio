import { useState } from 'react';
import InteractiveBackground from './components/InteractiveBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div id="portfolio-app-root" className="relative min-h-screen bg-bg-primary text-text-white antialiased">
      <InteractiveBackground />
      <Header onOpenContact={handleOpenContact} onOpenResume={handleOpenResume} />
      <main className="relative z-10 w-full">
        <Hero onOpenContact={handleOpenContact} onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Services onOpenContact={handleOpenContact} />
        <Projects />
        {/* <Timeline /> */}
        <Contact />
      </main>
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
