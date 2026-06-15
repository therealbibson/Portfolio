import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, Terminal, Check, AlertCircle } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStage, setFormStage] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStage('sending');
    setTerminalLogs(["INITIALIZING SECURE UPLINK..."]);

    try {
      const addLog = (msg: string) => setTerminalLogs(prev => [...prev, msg]);
      
      setTimeout(() => addLog("PACKETING PROMPT DATA..."), 400);
      setTimeout(() => addLog("ESTABLISHING SMTP GATEWAY..."), 800);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject || 'New Project Protocol',
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.status === 200) {
        addLog("ENCRYPTION HANDSHAKE OK.");
        addLog("TRANSMISSION DELIVERED // REGISTRY COMPLETED!");
        
        setTimeout(() => {
          setFormStage('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
      } else {
        throw new Error("STATION REJECTED PACKETS");
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      setTerminalLogs(prev => [...prev, "CRITICAL ERROR: UPLINK FAILED", "STATION STATUS: OFFLINE"]);
      setTimeout(() => setFormStage('error'), 1000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 max-w-7xl mx-auto px-6 overflow-hidden border-t border-slate-900/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
        {/* Left Column: Details & Social Links */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-6 justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-slate-800">
            <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-primary-blue">
              08 // CONNECTIVITY
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight leading-tight">
            Initiate Project
            <br />
            <span className="text-primary-blue font-extrabold">
              Scaffolding Brief
            </span>
          </h2>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md">
            Interested in launching a scalable web platform, designing premium prompt validation systems, or contracting remote engineering services? Dispatch an transmission.
          </p>

          <div className="flex flex-col gap-4 w-full max-w-sm pt-4 border-t border-slate-800">
            {/* Email card */}
            <a
              id="contact-gateway-email"
              href="mailto:uabeeb3@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-primary border border-slate-800 hover:border-primary-blue/30 hover:bg-surface-card/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-blue/10 border border-primary-blue/40 flex items-center justify-center text-primary-blue font-bold group-hover:scale-105 transition-all">
                <Mail size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-text-secondary">EMAIL TRANSMISSION</span>
                <span className="text-sm font-semibold text-text-white">uabeeb3@gmail.com</span>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              id="contact-gateway-linkedin"
              href="https://linkedin.com/in/usman-abeeb-9a998a279"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-primary border border-slate-800 hover:border-accent-purple/30 hover:bg-surface-card/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/40 flex items-center justify-center text-accent-purple font-bold group-hover:scale-105 transition-all">
                <Linkedin size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-text-secondary">PROFESSIONAL NETWORK</span>
                <span className="text-sm font-semibold text-text-white">linkedin.com/in/usman-abeeb</span>
              </div>
            </a>

            {/* X card */}
            <a
              id="contact-gateway-x"
              href="https://x.com/theRealBibson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-bg-primary border border-slate-800 hover:border-text-white/30 hover:bg-surface-card/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-text-white font-bold group-hover:scale-105 transition-all">
                <FaXTwitter size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-text-secondary">SOCIAL PLATFORM</span>
                <span className="text-sm font-semibold text-text-white">x.com/theRealBibson</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form panel */}
        <div className="lg:col-span-7" id="contact-form-stage">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-slate-800 backdrop-blur-md shadow-xl">
            <AnimatePresence mode="wait">
              {formStage === 'idle' && (
                <motion.form
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5 text-left"
                >
                  <span className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest block mb-1">
                    TRANSMISSION DISPATCH BOARD
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-semibold text-text-secondary uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-bg-primary border border-slate-800 focus:border-primary-blue/40 rounded-lg p-3 text-xs sm:text-sm text-text-white font-sans focus:outline-none focus:ring-1 focus:ring-primary-blue/10 placeholder-slate-700 transition-all duration-200"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-semibold text-text-secondary uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. marcus@neural.io"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-bg-primary border border-slate-800 focus:border-primary-blue/40 rounded-lg p-3 text-xs sm:text-sm text-text-white font-sans focus:outline-none focus:ring-1 focus:ring-primary-blue/10 placeholder-slate-700 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-semibold text-text-secondary uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Next-Generation RAG Scaffolding Contract"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="bg-bg-primary border border-slate-800 focus:border-primary-blue/40 rounded-lg p-3 text-xs sm:text-sm text-text-white font-sans focus:outline-none focus:ring-1 focus:ring-primary-blue/10 placeholder-slate-700 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-semibold text-text-secondary uppercase tracking-wider">
                      Requirements Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Specify deliverables scope, stack, timeline expectations..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-bg-primary border border-slate-800 focus:border-primary-blue/40 rounded-lg p-3 text-xs sm:text-sm text-text-white font-sans focus:outline-none focus:ring-1 focus:ring-primary-blue/10 placeholder-slate-700 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto self-start mt-2 px-6 py-3.5 rounded-xl bg-primary-blue hover:opacity-90 text-text-white text-xs sm:text-sm font-bold shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={14} /> Send Project Scaffolding Brief
                  </button>
                </motion.form>
              )}

              {formStage === 'sending' && (
                <motion.div
                  key="sending-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 py-12 items-center text-center justify-center"
                >
                  <Terminal size={40} className="text-accent-purple animate-spin" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-mono text-sm font-bold text-text-white uppercase tracking-wider">
                      Securing API Dispatch Packets
                    </h3>
                    <p className="text-xs text-text-secondary font-sans">
                      Pushing details through secure web transport hooks...
                    </p>
                  </div>

                  <div className="w-full max-w-md p-4 rounded-xl bg-bg-primary border border-slate-800 text-left font-mono text-[10px] overflow-hidden flex flex-col gap-1.5 text-text-secondary">
                    {terminalLogs.map((log, lIdx) => (
                      <div key={lIdx} className="flex gap-2">
                        <span className="text-accent-purple">&gt;&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {formStage === 'success' && (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 py-12 items-center text-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-500/50 flex items-center justify-center text-emerald-400 animate-bounce">
                    <Check size={28} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-text-white">
                      Transmission Processed!
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary max-w-md font-sans">
                      Your proposal metadata has compiled successfully. Abeeb will decode this brief, inspect the milestones scope, and reply via secure channel within 24 hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormStage('idle')}
                    className="px-5 py-2.5 rounded-lg bg-bg-primary border border-slate-800 text-text-secondary hover:text-text-white text-xs font-semibold hover:border-slate-700 transition-all cursor-pointer"
                  >
                    Build Another Proposal
                  </button>
                </motion.div>
              )}

              {formStage === 'error' && (
                <motion.div
                  key="error-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6 py-12 items-center text-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-500/50 flex items-center justify-center text-red-400">
                    <AlertCircle size={28} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-text-white">
                      Transmission Failed
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary max-w-md font-sans">
                      The secure channel could not be established. Please verify your connection or reach out directly via email.
                    </p>
                  </div>

                  <button
                    onClick={() => setFormStage('idle')}
                    className="px-5 py-2.5 rounded-lg bg-bg-primary border border-slate-800 text-text-secondary hover:text-text-white text-xs font-semibold hover:border-slate-700 transition-all cursor-pointer"
                  >
                    Re-attempt Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
