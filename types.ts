
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: 'ML' | 'Visualization' | 'Data Engineering' | 'Analysis' | 'Software Development';
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
  impact?: string;
}

export interface Job {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Data Analysis & Visualization' | 'Machine Learning' | 'Generative AI & NLP' | 'Deep Learning Frameworks' | 'Development & Collaboration Tools';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
  url: string;
  tags: string[];
}
