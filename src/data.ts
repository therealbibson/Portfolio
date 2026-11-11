import { Project, SkillCategory, Service, TimelineItem } from './types';
import DigitalPearlsImg from './assets/images/digitalpearlsimg.png';
import SafeBiteImg from './assets/images/safebiteimg.png';
import HustlrImg from './assets/images/hustlrimg.png';
import SpendwiseApp from './assets/images/spendwiseapp.jpg';
import ReviewbotImg from './assets/images/reviewbotimg.png';

export const PERSONAL_INFO = {
  name: "Usman Abeeb",
  title: "Full-Stack Developer & Software Engineer",
  roles: ["Frontend Developer", "Backend Engineer", "Mobile Developer", "AI Integration"],
  bio: "I build responsive web applications, reliable backend systems, and cross-platform mobile apps. I focus on clean code, intuitive user experience, and practical AI implementations.",
  email: "uabeeb3@gmail.com",
  location: "Available for Remote & Contract roles",
  github: "https://github.com/therealbibson",
  linkedin: "https://linkedin.com/in/usman-abeeb-9a998a279?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "https://x.com/theRealBibson",
  experienceYears: 3,
  projectsCompleted: 15,
  resumeUrl: "#",
};

export const SERVICES: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Designing and building fast, responsive, and accessible web interfaces with clean architecture and modern UX patterns.",
    icon: "Layout",
    bullets: [
      "Modern React and Next.js applications",
      "Tailwind CSS for sleek, maintainable styling",
      "Interactive data visualizations and UI state management",
      "Responsive design across mobile, tablet, and desktop",
      "Performance optimization and core web vitals"
    ]
  },
  {
    id: "backend",
    title: "Backend & API Engineering",
    description: "Building scalable backend services, secure RESTful APIs, and data persistence layers that handle real-world traffic.",
    icon: "Server",
    bullets: [
      "Node.js and Express server architectures",
      "PostgreSQL, MongoDB, and relational schema design",
      "Authentication and authorization (JWT, OAuth, RBAC)",
      "Redis caching and performance optimization",
      "Containerization with Docker"
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with smooth native feel and offline-ready architectures.",
    icon: "Smartphone",
    bullets: [
      "Cross-platform iOS and Android apps with React Native & Expo",
      "Offline-first local storage using SQLite",
      "Hardware and sensor integrations (Camera, Biometrics, GPS)",
      "Clean UI component design and responsive mobile layouts"
    ]
  },
  {
    id: "ai",
    title: "AI & LLM Integration",
    description: "Incorporating modern generative AI capabilities into real applications to automate workflows and enhance user experiences.",
    icon: "Bot",
    bullets: [
      "Integration with Gemini, Claude, and OpenAI APIs",
      "Structured prompt engineering and schema validation",
      "RAG workflows and vector database querying",
      "Practical agentic workflows and automated assistance"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layers",
    description: "Building clean, interactive, and responsive web user interfaces.",
    items: [
      { name: "TypeScript / JavaScript", level: "Advanced", icon: "Code" },
      { name: "React / Next.js", level: "Advanced", icon: "Cpu" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Wind" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Sparkles" },
      { name: "State Management (Zustand / Redux)", level: "Proficient", icon: "Activity" }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "Database",
    description: "Architecting reliable server backends, APIs, and data stores.",
    items: [
      { name: "Node.js / Express.js", level: "Advanced", icon: "Terminal" },
      { name: "PostgreSQL", level: "Proficient", icon: "HardDrive" },
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "RESTful APIs", level: "Advanced", icon: "Shuffle" },
      { name: "Redis & Caching", level: "Proficient", icon: "Zap" },
      { name: "Docker", level: "Proficient", icon: "Cloud" }
    ]
  },
  {
    title: "Mobile",
    icon: "Smartphone",
    description: "Crafting cross-platform apps for mobile devices.",
    items: [
      { name: "React Native", level: "Proficient", icon: "Smartphone" },
      { name: "Expo Ecosystem", level: "Advanced", icon: "Zap" },
      { name: "SQLite (Local Storage)", level: "Proficient", icon: "Save" }
    ]
  },
  {
    title: "AI & Developer Tools",
    icon: "BrainCircuit",
    description: "Leveraging modern tooling and practical AI models.",
    items: [
      { name: "LLM APIs (Gemini, Claude, OpenAI)", level: "Advanced", icon: "Bot" },
      { name: "Prompt Engineering", level: "Advanced", icon: "Lightbulb" },
      { name: "Git & GitHub", level: "Advanced", icon: "Workflow" },
      { name: "Linux / Terminal", level: "Proficient", icon: "Terminal" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "Digital Pearls",
    title: "Digital Pearls - Technology Advisory",
    description: "A Precision Architecture for High-Stakes Technology.",
    category: "Website",
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    github: "https://github.com/therealbibson/Digital-Pearls",
    projectUrl: "https://digitalpearls.vercel.app/",
    image: DigitalPearlsImg,
    details: [
      "Engineered a visual node-based workflow builder connecting prompt templates to structured execution steps.",
      "Integrated Gemini API with structured JSON output enforcement and error validation.",
      "Built a real-time execution log viewer to monitor token usage and response latency."
    ]
  },
  {
    id: "Hustlr",
    title: "Hustlr",
    description: "Launch your online shop in 5 minutes. Get payments, manage orders, and deliver anywhere in Nigeria — all in one place.",
    category: "Webapp",
    techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/therealbibson/hustlr",
    projectUrl: "https://www.hustlr.shop/",
    image: HustlrImg,
    details: [
      "Implemented Redis-based rate limiting to prevent API abuse and handle high concurrent request volumes.",
      "Secured endpoints using JWT verification with automated token expiration and revocation lists.",
      "Containerized the service with Docker for easy deployment and consistent environments."
    ]
  },
  {
    id: "SafeBite",
    title: "SafeBite - Food Delivery App",
    description: "The fastest delivery in town, They focus on bringing your favorite flavors right to your doorstep.",
    category: "Webapp",
    techStack: ["React", "Node.js", "Tailwind CSS", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/therealbibson/SafeBites",
    projectUrl: "https://safe-bites-cyan.vercel.app/",
    image: SafeBiteImg,
    details: [
      "Built an offline-first SQLite database layer allowing full offline functionality without network dependencies.",
      "Created smooth, responsive touch interfaces and intuitive workout logging screens.",
      "Developed local analytics charts to visualize lifting progress and session consistency over time."
    ]
  },
  {
    id: "Spendwise",
    title: "Spendwise - MiniApp Wallet",
    description: "Track your expenses, set budgets, and gain insights into your spending habits with our intuitive finance management tool.",
    category: "Mobile",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Celo Builders"],
    github: "https://github.com/therealbibson/SpendWise-Miniapp",
    projectUrl: "https://spend-wise-miniapp.vercel.app/",
    image: SpendwiseApp,
    details: [
      "Engineered real-time audio oscillator controls with customizable frequency, detune, and filter envelopes.",
      "Rendered 60 FPS frequency visualizers using high-performance HTML5 Canvas draw loops.",
      "Built an intuitive dark interface with accessible slider controls and preset saving."
    ]
  },
  {
    id: "Reviewbot AI",
    title: "Reviewbot AI",
    description: "Evidence-based review system for Celo and AskBots - On-chain auditor for AI agents on Celo",
    category: "AI",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Celo Builders"],
    github: "https://github.com/therealbibson/ReviewBot.cole",
    projectUrl: "https://reviewbot-celo.onrender.com/",
    image: ReviewbotImg,
    details: [
      "Developed dynamic side-by-side prompt testing panels to compare output consistency across models.",
      "Implemented automated cost and latency estimates based on token counts.",
      "Rendered structured markdown and code output cleanly with syntax highlighting."
    ]
  },
  {
    id: "athena-analytics",
    title: "Athena Prompt Analytics Portal",
    description: "A centralized dashboard for teams to test, benchmark, and evaluate system prompts across various AI models.",
    category: "AI",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js"],
    github: "https://github.com/therealbibson",
    projectUrl: "https://github.com/therealbibson",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    details: [
      "Developed dynamic side-by-side prompt testing panels to compare output consistency across models.",
      "Implemented automated cost and latency estimates based on token counts.",
      "Rendered structured markdown and code output cleanly with syntax highlighting."
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "lead-dev",
    period: "2024 - Present",
    title: "Full-Stack Software Engineer",
    organization: "Tech Solutions & Engineering",
    description: "Architecting full-stack web applications, designing scalable REST APIs, and integrating modern AI capabilities into client-facing products.",
    type: "experience",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "LLM APIs"]
  },
  {
    id: "freelance-fullstack",
    period: "2022 - 2024",
    title: "Full-Stack & Mobile Developer",
    organization: "Freelance & Startup Projects",
    description: "Collaborated with clients to build responsive web applications, mobile apps with offline support, and backend API integrations.",
    type: "freelance",
    tech: ["React Native", "Expo", "Express.js", "Tailwind CSS", "MongoDB", "SQLite"]
  },
  {
    id: "senior-front",
    period: "2021 - 2022",
    title: "Frontend Developer",
    organization: "Digital Interface Studio",
    description: "Developed modern, accessible UI components, optimized web vitals, and implemented responsive layouts with modern JavaScript and React.",
    type: "experience",
    tech: ["React", "JavaScript", "CSS3 / Sass", "Tailwind CSS", "Git"]
  }
];

export const PROMPT_PLAYGROUND_TEMPLATES: any[] = [];
export const TESTIMONIALS: any[] = [];
