import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      // Delivered via Brevo through the /api/send-message serverless
      // function, so the Brevo API key never reaches the browser.
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Delivery service unavailable');
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus('error');
      setErrorMessage(`Could not deliver automatically. You can email me directly at ${PERSONAL_INFO.email}.`);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-stone-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
        {/* Left Column: Direct info */}
        <div className="lg:col-span-5 flex flex-col items-start gap-5">
          <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
            Get In Touch
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
            Let's Work Together
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Have a project in mind, want to discuss an open role, or just want to say hi? Feel free to reach out via email or send a message using the form.
          </p>

          <div className="w-full space-y-3 pt-3 border-t border-stone-200">
            {/* Direct Email Link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-card border border-stone-200 hover:border-primary-blue/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-md bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-stone-600 block">Direct Email</span>
                <span className="text-sm font-semibold text-text-white">{PERSONAL_INFO.email}</span>
              </div>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <span className="text-xs font-mono text-stone-600 block mb-3">Connect on Social</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-card border border-stone-200 text-stone-600 hover:text-text-white hover:border-stone-300 transition-colors"
                title="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-card border border-stone-200 text-stone-600 hover:text-text-white hover:border-stone-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-card border border-stone-200 text-stone-600 hover:text-text-white hover:border-stone-300 transition-colors"
                title="X (Twitter)"
              >
                <FaXTwitter size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Working Form */}
        <div className="lg:col-span-7 bg-surface-card border border-stone-200 p-6 sm:p-8 rounded-xl shadow-lg">
          <h3 className="font-display font-semibold text-lg text-text-white mb-2">
            Send a Message
          </h3>
          <p className="text-xs text-stone-600 mb-6">
            Fill out the form below to deliver a message straight to my inbox.
          </p>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1.5">
                  Your Name <span className="text-primary-blue">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-bg-primary border border-stone-200 focus:border-primary-blue focus:outline-none text-xs text-text-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1.5">
                  Your Email <span className="text-primary-blue">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-bg-primary border border-stone-200 focus:border-primary-blue focus:outline-none text-xs text-text-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Project inquiry / Opportunity"
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-primary border border-stone-200 focus:border-primary-blue focus:outline-none text-xs text-text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5">
                Message <span className="text-primary-blue">*</span>
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell me about your project, timeline, or idea..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-bg-primary border border-stone-200 focus:border-primary-blue focus:outline-none text-xs text-text-white transition-colors resize-none"
              />
            </div>

            {/* Status alerts */}
            {status === 'success' && (
              <div className="p-3.5 rounded-lg bg-emerald-600/10 border border-emerald-600/30 text-emerald-700 text-xs flex items-center gap-2">
                <CheckCircle2 size={16} className="flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-3.5 rounded-lg bg-rose-600/10 border border-rose-600/30 text-rose-700 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle size={16} className="text-rose-600 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`}
                  className="px-3 py-1 rounded bg-rose-600/20 hover:bg-rose-600/30 text-rose-700 font-semibold text-[11px] transition-colors whitespace-nowrap self-end sm:self-auto"
                >
                  Send via Email App &rarr;
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0f3d3e] hover:bg-[#0a2e2f] disabled:opacity-50 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Send size={14} />
              {status === 'sending' ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
