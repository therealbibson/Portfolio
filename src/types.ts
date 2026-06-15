export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'AI';
  techStack: string[];
  github: string;
  demoUrl: string;
  image: string;
  details: string[];
}

export interface Skill {
  name: string;
  percent: number;
  level: string; // e.g., "Expert", "Proficient"
  icon: string; // lucide icon name
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: Skill[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'experience' | 'freelance' | 'milestone' | 'certification';
  tech?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface PromptTemplate {
  name: string;
  systemPrompt: string;
  userPromptTemplate: string;
  variables: { name: string; placeholder: string; defaultValue: string; options?: string[] }[];
  outputResponse: string;
}
