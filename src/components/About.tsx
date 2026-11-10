import { motion } from 'motion/react';
import { Code, CheckCircle2, Laptop, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code & Architecture",
      desc: "Writing maintainable, well-structured, and readable code with TypeScript and modern best practices."
    },
    {
      icon: Laptop,
      title: "Full-Stack Proficiency",
      desc: "Bridging modern React frontend interfaces with fast, resilient Node.js backends and databases."
    },
    {
      icon: Globe,
      title: "Cross-Platform Delivery",
      desc: "Deploying responsive web applications and cross-platform mobile apps for iOS and Android."
    },
    {
      icon: CheckCircle2,
      title: "Practical AI Solutions",
      desc: "Integrating generative AI and LLM APIs to build useful automated workflows and smart features."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 border-t border-slate-900/80"
    >
      <div className="flex flex-col items-start text-left gap-4 mb-12">
        <span className="text-xs font-mono font-medium tracking-wider text-primary-blue uppercase">
          About Me
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-white tracking-tight">
          Who I Am & What I Do
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        {/* Narrative Description */}
        <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            I am a full-stack developer passionate about building clean, efficient, and user-centric software. I specialize in the TypeScript ecosystem—building web frontends with React & Next.js, robust backends with Node.js & Express, and mobile applications with React Native.
          </p>
          <p>
            Whether I'm designing database schemas, architecting RESTful APIs, or optimizing client-side performance, my focus is always on creating maintainable systems that solve real problems.
          </p>
          <p>
            I also actively integrate generative AI capabilities—leveraging LLM APIs like Gemini and OpenAI to automate complex workflows, extract structured data, and deliver intuitive assistant experiences.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 text-xs sm:text-sm">
            <div>
              <span className="font-mono text-slate-500 uppercase block mb-1">Location</span>
              <span className="font-medium text-text-white">Lagos, Nigeria (Remote Worldwide)</span>
            </div>
            <div>
              <span className="font-mono text-slate-500 uppercase block mb-1">Email</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="font-medium text-primary-blue hover:underline">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl bg-surface-card border border-slate-800 flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-primary-blue/10 text-primary-blue mt-0.5">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm text-text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
