
import React from 'react';
import { Project, Job, Skill, EducationItem, Testimonial, Article } from './types';
import { Github, Linkedin, Mail, Twitter, BookOpen } from 'lucide-react';

export const HERO_DATA = {
  name: "Katta Hari Charan",
  title: "Data Scientist & ML Engineer", // Fallback
  roles: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Data Analyst"
  ],
  tagline: "Turning raw data into actionable business insights through predictive modeling, deep learning, and intuitive visualization.",
  // NOTE: Place your 'resume.pdf' file in the 'public' folder of your project root.
  resumeLink: "/resume.pdf"
};

export const ABOUT_DATA = {
  bio: "Machine Learning & Deep Learning Engineer with 2 years’ experience designing predictive models for agriculture and real estate. Delivered 85% accuracy in regression tasks by integrating UAV, Sentinel, and ground data using advanced algorithms. Expert in feature engineering, model optimization, and data visualization to drive actionable, data-driven insights.",
  goals: "I am currently looking for opportunities to leverage my skills in Deep Learning and Generative AI to drive innovation in industry sectors. My goal is to build AI systems that are not only accurate but also ethical and explainable.",
  location: "Bengaluru, India",
  email: "hccharankatta@gmail.com",
  image: "https://picsum.photos/400/400?grayscale"
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Stock Price Prediction Using LSTM",
    description: "Built and trained an LSTM-based deep learning model in Python to predict stock prices using historical closing data, demonstrating strong understanding of time series forecasting.",
    impact: "Evaluated and visualized model accuracy, optimizing performance through normalization and time-step sequencing.",
    tags: ["Python", "LSTM", "Time Series", "Deep Learning"],
    category: "ML",
    imageUrl: "https://picsum.photos/600/400?random=1",
    repoUrl: "https://github.com/name/repo",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Synchronized Desktop Calendar",
    description: "Developed a desktop calendar with globally shared and synchronized calendars, allowing users to schedule meetings with other users.",
    impact: "Enabled seamless scheduling and synchronization across multiple users.",
    tags: ["C#", ".NET", "SQL", "XML"],
    category: "Software Development",
    imageUrl: "https://picsum.photos/600/400?random=2",
    repoUrl: "https://github.com/name/repo",
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
      "Developed and optimised machine learning and deep learning models for chlorophyll estimation, achieving up to 80% prediction accuracy.",
      "Performed in-depth Exploratory Data Analysis (EDA) on multispectral UAV imagery and in-situ chlorophyll measurements, uncovering key patterns, trends, and correlations to support accurate predictive modeling.",
      "Integrated UAV multispectral data with ground-based measurements to derive vegetation indices for precision agriculture applications.",
      "Producing data visualisations and writing research documentation to present actionable insights for crop health monitoring."
    ]
  },
  {
    id: 2,
    role: "Data Scientist Intern",
    company: "Aditi Software",
    period: "Oct 2023 - Dec 2023",
    description: [
      "Performed data preprocessing and exploratory data analysis (EDA) on the California housing dataset to identify key factors influencing property values.",
      "Built and evaluated multiple regression models, achieving a 92% R² score on test data.",
      "Engineered features such as median income, housing age, and ocean proximity to optimize model accuracy and improve prediction reliability."
    ]
  },

];

export const SKILLS: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  
  { name: "Pandas", category: "Data Analysis & Visualization" },
  { name: "NumPy", category: "Data Analysis & Visualization" },
  { name: "Matplotlib", category: "Data Analysis & Visualization" },
  { name: "Seaborn", category: "Data Analysis & Visualization" },

  
  { name: "LLMs (GPT, Llama)", category: "Generative AI & NLP" },
  { name: "Hugging Face", category: "Generative AI & NLP" },
  { name: "LangChain", category: "Generative AI & NLP" },
  { name: "RAG", category: "Generative AI & NLP" },
  { name: "BERT & GPT", category: "Generative AI & NLP" },
  { name: "NLTK", category: "Generative AI & NLP" },
  { name: "Spacy", category: "Generative AI & NLP" },
  { name: "GANs & VAEs", category: "Generative AI & NLP" },
  
  { name: "Keras", category: "Deep Learning Frameworks" },
  { name: "TensorFlow", category: "Deep Learning Frameworks" },
  { name: "PyTorch", category: "Deep Learning Frameworks" },
  
  { name: "Jupyter Notebook", category: "Development & Collaboration Tools" },
  { name: "Git", category: "Development & Collaboration Tools" },
  { name: "GitHub", category: "Development & Collaboration Tools" },
  { name: "Visual Studio Code", category: "Development & Collaboration Tools" },
  { name: "Google Colab", category: "Development & Collaboration Tools" },
];

export const EDUCATION: EducationItem[] = [
   {
    id: 1,
    degree: "BE in Computer Science",
    institution: "M.S. Engineering College",
    period: "Aug 2019 – June 2023",
    description: ""
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const ARTICLES: Article[] = [];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/haricharanbytes", icon: <Github size={20} /> },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { platform: "Email", url: `mailto:${ABOUT_DATA.email}`, icon: <Mail size={20} /> },
];
