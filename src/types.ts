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
  level?: string; // e.g., "Advanced", "Proficient"
  icon?: string;  // lucide icon name
  percent?: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description?: string;
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
  type: 'experience' | 'freelance' | 'education' | 'certification';
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
