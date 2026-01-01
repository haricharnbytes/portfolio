import React from 'react';
import { Project, Job, Skill, EducationItem, Testimonial, Article } from './types';
import { Github, Linkedin, Mail, Twitter, BookOpen } from 'lucide-react';

export const HERO_DATA = {
  name: "Katta Hari Charan",
  title: "Data Scientist & ML Engineer",
  roles: [
    "Machine Learning Engineer",
    "AI Engineer",
  ],
  tagline: "Turning raw data into actionable business insights through predictive modeling, deep learning, and intuitive visualization.",
  resumeLink: "https://drive.google.com/uc?export=download&id=1zOHEnPEXColDiAzAjTtAnhdB8z13zZHS"
};

export const ABOUT_DATA = {
  bio: "Machine Learning & Deep Learning Engineer with 2 years’ experience designing predictive models for agriculture and real estate. Delivered 85% accuracy in regression tasks by integrating UAV, Sentinel, and ground data using advanced algorithms. Expert in feature engineering, model optimization, and data visualization to drive actionable, data-driven insights.",
  goals: "I am currently looking for opportunities to leverage my skills in Deep Learning and Generative AI to drive innovation in industry sectors. My goal is to build AI systems that are not only accurate but also ethical and explainable.",
  location: "Bengaluru, India",
  email: "hccharankatta@gmail.com"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Generative AI for Content Creation",
    description: "Developed an automated content creation pipeline using fine-tuned GPT models and StyleGAN. The system generates high-quality marketing copy and accompanying visual assets tailored to specific brand voices.",
    impact: "Reduced content production time by 60% and enhanced creative output consistency.",
    tags: ["OpenAI", "PyTorch", "FastAPI", "Stable Diffusion"],
    category: "Generative AI",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    repoUrl: "https://github.com/haricharnbytes",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Medical Image Diagnostic Pipeline",
    description: "Designed a CNN-based system to assist in diagnostics by classifying medical imagery. Utilized transfer learning and OpenCV for preprocessing pipelines.",
    impact: "Achieved 95% classification accuracy, streamlining diagnostic screening processes.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    category: "Deep Learning",
    iconName: "Brain",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    repoUrl: "https://github.com/haricharnbytes",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Predictive Real Estate Analytics",
    description: "Built demand forecasting and pricing models using historical time-series data and gradient boosting techniques.",
    impact: "Increased sales forecast accuracy by 18% for regional stakeholders.",
    tags: ["Scikit-Learn", "XGBoost", "Pandas", "Matplotlib"],
    category: "ML",
    iconName: "Home",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    repoUrl: "https://github.com/haricharnbytes",
    demoUrl: "#"
  }
];

export const JOBS: Job[] = [
  {
    id: 1,
    role: "Project Associate",
    company: "CSIR - Fourth Paradigm Institute",
    period: "Dec 2023 - Present",
    description: [
      "Developed and optimized deep learning models for chlorophyll estimation with 80% accuracy.",
      "Conducted extensive EDA on multispectral UAV imagery and in-situ data to drive predictive performance.",
      "Integrated multi-source sensor data for precision agriculture health monitoring applications."
    ]
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "Aditi Software",
    period: "Oct 2023 - Dec 2023",
    description: [
      "Built regression models for housing value prediction achieving a 92% R² score.",
      "Engineered complex features from geographical and socioeconomic datasets to optimize model bias."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", icon: "python", category: "Languages" },
  { name: "SQL", icon: "mysql", category: "Languages" },
  
  { name: "Pandas", icon: "pandas", category: "Data Analysis & Visualization" },
  { name: "NumPy", icon: "numpy", category: "Data Analysis & Visualization" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", category: "Data Analysis & Visualization" },
  
  
  { name: "Scikit-Learn", icon: "scikitlearn", category: "Machine Learning" },
  { name: "XGBoost", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/XGBoost_logo.svg", category: "Machine Learning" },
  
  { name: "OpenAI", icon: "https://cdn-icons-png.flaticon.com/512/18269/18269957.png", category: "Generative AI & NLP" },
  { name: "Hugging Face", icon: "huggingface", category: "Generative AI & NLP" },
  { name: "LangChain", icon: "langchain", category: "Generative AI & NLP" },
  { name: "Transformers", icon: "google", category: "Generative AI & NLP" },
  
  { name: "Keras", icon: "keras", category: "Deep Learning Frameworks" },
  { name: "TensorFlow", icon: "tensorflow", category: "Deep Learning Frameworks" },
  { name: "PyTorch", icon: "pytorch", category: "Deep Learning Frameworks" },
  
  { name: "Jupyter", icon: "jupyter", category: "Development & Collaboration Tools" },
  { name: "Git", icon: "git", category: "Development & Collaboration Tools" },
  { name: "GitHub", icon: "github", category: "Development & Collaboration Tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain.svg", category: "Development & Collaboration Tools" },
  { name: "Google Colab", icon: "googlecolab", category: "Development & Collaboration Tools" },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: "B.E in Computer Science and Engineering",
    institution: "M.S. Engineering College",
    period: "Aug 2019 – June 2023",
    description: "Specialized in AI and Machine Learning applications."
  }
];

export const TESTIMONIALS: Testimonial[] = [];
export const ARTICLES: Article[] = [];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/haricharnbytes", icon: <Github size={20} /> },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/hari-charan-katta-70b535232/", icon: <Linkedin size={20} /> },
  { platform: "Email", url: `mailto:${ABOUT_DATA.email}`, icon: <Mail size={20} /> },
];