import { Project, SkillCategory, Service, TimelineItem, Testimonial, PromptTemplate } from './types';

//

export const PERSONAL_INFO = {
  name: "Usman Abeeb",
  title: "Full-Stack Developer & Generative AI Engineer",
  subtitles: ["Frontend Architect", "Backend Systems Designer", "Mobile Specialist", "Prompt Engineer"],
  bio: "I build robust, production-ready server architectures, responsive client applications, and custom generative AI prompt & agent systems. Blending performance-first code with modern AI architectures.",
  experienceYears: 3,
  projectsCompleted: 13,
  clientRetention: "98%",
  recommendationCount: 5,
  resumeUrl: "#", // Click will trigger resume download modal/view
};


//


export const SERVICES: Service[] = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    description: "Building ultra-fast, responsive, and pixel-perfect layouts designed for interaction, high-density dashboard visualization, and 60 FPS animation states.",
    icon: "Layout",
    bullets: [
      "Custom React, Next.js and Vite builds",
      "High-performance HTML5 Canvas rendering",
      "Tailwind v4 optimization & responsive interfaces",
      "Robust state management (Zustand, Redux, Context)",
      "Strict keyboard accessibility and dynamic layouts"
    ]
  },
  {
    id: "backend",
    title: "Backend Core Systems",
    description: "Developing scalable backend systems, secure RESTful / RPC APIs, and real-time synchronization pipelines with multi-tier storage caching.",
    icon: "Server",
    bullets: [
      "Node.js, Express.js, & Fastify microservices",
      "PostgreSQL, Firestore, and MongoDB databases",
      "Redis caching & load balancing architectures",
      "JWT authorization, OAuth, and RBAC security",
      "Robust error logging, monitoring, & Dockerization"
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Engineering",
    description: "Creating highly integrated cross-platform mobile apps leveraging hardware-accelerated interfaces and secure client-side storage structures.",
    icon: "Smartphone",
    bullets: [
      "React Native & Expo cross-platform delivery",
      "Native bridge integrations & sensor usage (GPS, Biometrics)",
      "Local relational databases (SQLite, WatermelonDB)",
      "Seamless push token synchronization engines",
      "Optimized bundle size and application boot time"
    ]
  },
  {
    id: "ai",
    title: "Generative AI Solutions",
    description: "Integrating LLMs, building structured prompt frameworks, and designing adaptive multi-agent execution loops with RAG memory databases.",
    icon: "Bot",
    bullets: [
      "Advanced Prompt Engineering (Few-shot, Chain-of-Thought)",
      "Gemini, Claude, and OpenAI API integrations",
      "Agentic workflows with LangChain & LangGraph",
      "Vector database retrieval (Pinecone, Chroma, pgvector)",
      "Semantic validation of LLM outputs & JSON schema enforcement"
    ]
  }
];


//


export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "Layers",
    items: [
      { name: "TypeScript / JavaScript", percent: 96, level: "Expert", icon: "Code" },
      { name: "React 19 / Next.js", percent: 95, level: "Expert", icon: "Cpu" },
      { name: "Tailwind CSS (v3/v4)", percent: 98, level: "Expert", icon: "Wind" },
      { name: "HTML5 / Canvas API", percent: 90, level: "Expert", icon: "Sparkles" },
      { name: "Framer Motion / Animations", percent: 92, level: "Expert", icon: "Activity" }
    ]
  },
  {
    title: "Backend & Cloud Systems",
    icon: "Database",
    items: [
      { name: "Node.js / Express.js", percent: 94, level: "Expert", icon: "Terminal" },
      { name: "PostgreSQL & NoSQL", percent: 89, level: "Proficient", icon: "HardDrive" },
      { name: "RESTful & gRPC APIs", percent: 92, level: "Expert", icon: "Shuffle" },
      { name: "Docker & Cloud Run", percent: 85, level: "Proficient", icon: "Cloud" },
      { name: "Redis Caching / Security", percent: 88, level: "Proficient", icon: "ShieldCheck" }
    ]
  },
  {
    title: "Mobile Architecture",
    icon: "Smartphone",
    items: [
      { name: "React Native", percent: 88, level: "Proficient", icon: "Smartphone" },
      { name: "Expo Ecosystem", percent: 90, level: "Expert", icon: "Zap" },
      { name: "SQLite Offline Engine", percent: 84, level: "Proficient", icon: "Save" }
    ]
  },
  {
    title: "Generative AI & Prompting",
    icon: "BrainCircuit",
    items: [
      { name: "Prompt Engineering", percent: 98, level: "Expert", icon: "Lightbulb" },
      { name: "LLM Orchestration & APIs", percent: 95, level: "Expert", icon: "Workflow" },
      { name: "Agentic Loop Design", percent: 91, level: "Expert", icon: "Cpu" },
      { name: "RAG & Vector Embeddings", percent: 86, level: "Proficient", icon: "Compass" }
    ]
  }
];


//


export const PROJECTS: Project[] = [
  {
    id: "nexus-agent",
    title: "Nexus AI Agent Orchestrator",
    description: "An advanced multi-agentic workflow platform with runtime execution visualizer, semantic router, and vector search memory for specialized developer assistants.",
    category: "AI",
    techStack: ["React", "TypeScript", "Node.js", "Gemini API", "Tailwind CSS", "pgvector"],
    github: "https://github.com/example/nexus-agent-picker",
    demoUrl: "https://example.com/nexus",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    details: [
      "Engineered semantic node-based routing engine translating prompt templates to structured execution graphs",
      "Fully integrated multi-step context generation leveraging custom Gemini prompt structures with system-level instruction trees",
      "Dynamic browser dashboard utilizing SVG rendering to map runtime agent logic and prompt variable bindings",
      "Real-time validation framework parsing LLM JSON strings with exact feedback schema criteria"
    ]
  },
  {
    id: "nova-gateway",
    title: "NovaCloud Serverless Gateway",
    description: "High-performance API router resolving routing tables, rate limiting, token validations, and proxying requests securely with sub-millisecond overhead.",
    category: "Backend",
    techStack: ["Node.js", "Express.js", "Redis", "TypeScript", "Docker", "Prometheus"],
    github: "https://github.com/example/nova-gateway",
    demoUrl: "https://example.com/nova",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    details: [
      "Built resilient rate-limiting middleware powered by Redis token-bucket algorithm, sustaining up to 10k requests/min",
      "Configured secure JSON Web Token verification with automated public key rotation and IP blacklisting rules",
      "Established comprehensive diagnostic export capturing latency percentiles, error rates, and system resources",
      "Modular routing mechanism allowing dynamic runtime path additions without reboot cycle times"
    ]
  },
  {
    id: "hyperion-fitness",
    title: "Hyperion Smart Fitness Native App",
    description: "An offline-first cross-platform application utilizing mobile sensor bridges, SQLite relational structures, and an automated prompt-engineered workout compiler.",
    category: "Mobile",
    techStack: ["React Native", "Expo", "SQLite", "Framer Motion Mobile", "Lucide Icons"],
    github: "https://github.com/example/hyperion-mobile",
    demoUrl: "https://example.com/hyperion",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    details: [
      "Designed clean SQLite relational database utilizing direct SQL queries to cache complex structures with high reads",
      "Programmed customized React Native bridge hooks monitoring accelerometer and spatial position updates during active sessions",
      "Developed local workout recommendation algorithm that integrates with a web service to compiler prompts",
      "Constructed fluid spring-based lists and transitions maintaining smooth 60 FPS across low-tier mobile devices"
    ]
  },
  {
    id: "vapor-audio",
    title: "Vapor Canvas Audio Engine",
    description: "High-fidelity interactive visual synthesizer combining Web Audio audio analytical tools with custom HTML5 particle visualizers and motion states.",
    category: "Frontend",
    techStack: ["React", "HTML5 Canvas API", "Web Audio API", "Lucide Icons", "Framer Motion"],
    github: "https://github.com/example/vapor-canvas",
    demoUrl: "https://example.com/vapor",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    details: [
      "Implemented Fast Fourier Transform sound analysis in raw JS to process decibel heights across frequency bins",
      "Constructed custom web-workers allocating particle calculations outside main UI processing threads",
      "Created sleek glassmorphism dashboard overlay monitoring volume peaks, stereo width, and sample frequencies",
      "Optimized canvas draw pipelines with dynamic resolution scaling during heavy system activity"
    ]
  },
  {
    id: "athena-analytics",
    title: "Athena Prompt Intelligence Portal",
    description: "An enterprise analytics pipeline designed to screen, structure, and test prompt templates against various cloud LLM backends with latency profiling.",
    category: "AI",
    techStack: ["Next.js", "Generative AI", "Express.js", "D3.js", "Tailwind CSS"],
    github: "https://github.com/example/athena-analytics",
    demoUrl: "https://example.com/athena",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    details: [
      "Integrated automated Prompt engineering template compiler with strict variable injection schemas",
      "Engineered latency and tokens profile graphics illustrating cost-efficiency stats of different system prompts",
      "Programmed safe markdown rendering displaying parsed structured code responses directly inside web UI",
      "Added comparative side-by-side panel tracking alignment drift of output templates based on system prompt tweaks"
    ]
  }
];


//


export const TIMELINE: TimelineItem[] = [
  {
    id: "lead-dev",
    period: "2024 - Present",
    title: "Principal Web & Gen AI Architect",
    organization: "Apex Solutions Lab",
    description: "Directing engineering strategy for building full-stack enterprise applications and intelligent prompt-driven agent pipelines. Coordinating frontend architectures and secure server layers.",
    type: "experience",
    tech: ["React", "TypeScript", "Node.js", "Docker", "Gemini API", "PostgreSQL"]
  },
  {
    id: "freelance-fullstack",
    period: "2022 - 2024",
    title: "Independent Full-Stack Consultant",
    organization: "Global Development & Startups",
    description: "Assisted multiple fast-scaling startups in designing cross-platform mobile apps with local persistence and low-latency API routes. Delivered production-ready systems for over 15 clients.",
    type: "freelance",
    tech: ["React Native", "Express.js", "Redis", "Next.js", "Firebase", "SQLite"]
  },
  {
    id: "senior-front",
    period: "2020 - 2022",
    title: "Senior Software Engineer (Frontend)",
    organization: "Helix Interface Group",
    description: "Supervised layout component architecture, design system optimization, and visual canvas performance pipelines. Led team of 6 engineers to launch client responsive products.",
    type: "experience",
    tech: ["React", "Redux Toolkit", "Sass", "Web Audio API", "Jest", "WebSockets"]
  },
  {
    id: "ai-prompt-cert",
    period: "2023",
    title: "Advanced AI Agentic Systems Specialist",
    organization: "Cognitive Computing Alliance",
    description: "Validation credentials focused on multi-agent execution graphs, automated prompts engineering, few-shot contextual injection, and vector-backed knowledge retrievals.",
    type: "certification"
  }
];


//


export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Founder & CTO",
    company: "NeuralSprint AI",
    text: "Alex brought deep, specialized knowledge in both scalable React and advanced prompt design. The agent-orchestrator he engineered forms the bedrock of our active product loop. Highly professional and an exceptional communicator.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "VP of Product Development",
    company: "SyncStream Digital",
    text: "Alex possesses a rare hybrid ability: delivering pristine, animated web interfaces combined with solid Node server scaling, and robust API routing logic. Our startup's active retention grew by 40% post launch.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "t3",
    name: "Devon Kim",
    role: "Managing Director",
    company: "Veritas Ventures",
    text: "Working with Alex was incredibly smooth. He didn't just write robust, linted code; he active-coached us on prompt engineering structure strategies that slashed our monthly LLM spending by a clean third.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  }
];


//


export const PROMPT_PLAYGROUND_TEMPLATES: PromptTemplate[] = [
  {
    name: "Robust AI Agent Code Architect",
    systemPrompt: "You are an ultimate code architect AI. Analyze provided software requirements and respond exclusively in strict, clean JSON complying with structural templates. Enclose structural steps in <analysis> XML tags before emitting the final JSON blocks.",
    userPromptTemplate: "Design a high-security backend auth architecture for a {{language}} application using {{db}}. The user roles to support are: {{roles}}. Include precise endpoints and step-by-step token validation structures.",
    variables: [
      { name: "language", placeholder: "TypeScript/Node.js", defaultValue: "TypeScript/Express.js" },
      { name: "db", placeholder: "PostgreSQL with Drizzle", defaultValue: "PostgreSQL & Redis Cache" },
      { name: "roles", placeholder: "Admin, Editor, Guest", defaultValue: "Owner, Developer, Read-Only Observer" }
    ],
    outputResponse: `<analysis>
1. Checked authorization requirements.
2. Verified secure JSON Web Token parameters (256-bit ECC).
3. Drafted Express middleware scaffolding with token-bucket rate limiting.
4. Defined Redis table schemas for token revocation.
</analysis>
\`\`\`json
{
  "scaffolding": "Express + ts-node",
  "auth_mechanism": "Bearer Token Verification with secure HTTP-only cookie validation and SHA-256 signatures",
  "routes": {
    "POST /api/v1/auth/login": "User validation / JWT creation",
    "POST /api/v1/auth/revoke": "Invalidate token in active Redis cache table",
    "GET /api/v1/projects": "Endpoint guarded by role check: Developer"
  },
  "database_sync": {
    "client": "PG-Pool with strict schema constraints",
    "cache_layer": "Redis memory list with 15m expiration"
  }
}
\`\`\``
  },
  {
    name: "Structured Few-Shot Schema Extractor",
    systemPrompt: "You are an AI data classification parser. Read unstructured input text, isolate mentioned technologies, project milestones, and expertise domains. Group terms and output as an clean array of tag items.",
    userPromptTemplate: "Extract relevant technical components from the following project brief: '{{projectBrief}}'. Ensure the confidence metric exceeds {{confidenceThreshold}}.",
    variables: [
      { name: "projectBrief", placeholder: "e.g. mobile fitness track app on react native with sqlite...", defaultValue: "Designing a high-speed telemetry receiver that reads UDP streams, pushes them to a local SQLite database on mobile, and uses React Native Expo to display a real-time line visual graph." },
      { name: "confidenceThreshold", placeholder: "0.95", defaultValue: "0.98" }
    ],
    outputResponse: `\`\`\`json
{
  "confidence_rating": 0.99,
  "isolated_components": [
    { "name": "React Native", "category": "Frontend Framework" },
    { "name": "Expo Ecosystem", "category": "Mobile Tooling" },
    { "name": "SQLite", "category": "Local Persistence Engine" },
    { "name": "UDP Socket Networking", "category": "Network Architecture" },
    { "name": "Real-time Telemetry Visualization", "category": "UI Systems" }
  ]
}
\`\`\``
  },
  {
    name: "Structured Gemini Context Synthesizer",
    systemPrompt: "You are a prompt optimizer built for Gemini 1.5/2.0 API calls. Analyze raw conversational prompts, then add custom contextual framing, system role, and JSON formatting constraints.",
    userPromptTemplate: "Enhance the following prompt to prevent hallucinations and force structural markdown layout: '{{rawPrompt}}'. Ensure the tone matches a {{toneStyle}} demeanor.",
    variables: [
      { name: "rawPrompt", placeholder: "Write a summary of cloud database benefits...", defaultValue: "Explain cloud database architecture in simple terms, lists benefits." },
      { name: "toneStyle", placeholder: "formal, minimal, technical", defaultValue: "Highly structured and technically precise" }
    ],
    outputResponse: `### Optimized Contextual System Instructions
Role: Elite Cloud Storage Strategist
Directives: Avoid marketing jargon. Provide clear mathematical limits and structured trade-offs.

### Formatted Prompt Scaffolding
Analyze the architectural trade-offs of deploying distributed cloud databases (e.g., Firestore vs. relational Cloud SQL clusters). Focus on:
1. Transaction concurrency limits under ACID vs BASE models.
2. Latency profile impact when caching with MemoryStore/Redis.
3. Write-overhead scaling calculations.

Constraint: Respond using triple-backtick markdown blocks, starting with bullet-point structural highlights.`
  }
];
