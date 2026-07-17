export type FeaturedProject = {
  title: string;
  shortDescription: string;
  description: string;

  technologies: string[];

  features: string[];

  contributions: string[];

  images: string[];

  github?: string;
};

export type AdditionalProject = {
  title: string;
  description: string;

  technologies: string[];

  image: string;

  github?: string;
};

export const featuredProject: FeaturedProject = {
  title: "Job Recommendation System",

  shortDescription: "AI-powered job recommendation platform.",

  description:
    "A web application that recommends suitable jobs by analyzing user profiles and resumes using AI technologies.",

  technologies: [
    "React",
    "TypeScript",
    "Go",
    "Python",
    "PostgreSQL",
    "Groq API",
  ],

  features: [
    "Job Recommendation",
    "Resume Analyzer",
    "AI Chat Assistant",
    "Job Comparison",
  ],

  contributions: [
    "Designed full-stack architecture",
    "Developed REST APIs using Go",
    "Built responsive React frontend",
    "Integrated AI services",
  ],

  images: [
    "src/assets/projects/featured/job1.png",
    "src/assets/projects/featured/job2.png",
    "src/assets/projects/featured/job3.png",
    "src/assets/projects/featured/job4.png",
  ],

  github: "#",
};

export const additionalProjects: AdditionalProject[] = [
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model for heart disease prediction.",

    technologies: ["React", "Python", "Flask"],

    image: "src/assets/projects/heart-disease.png",

    github: "#",
  },
  {
    title: "VolunThai",
    description: "Volunteer management web application.",

    technologies: ["React", "Node.js", "PostgreSQL"],

    image: "src/assets/projects/volunthai.png",

    github: "#",
  },
  {
    title: "BuFAQ",
    description: "AI FAQ chatbot powered by GROQ API.",

    technologies: ["Express", "Groq API"],

    image: "src/assets/projects/bufaq.png",

    github: "#",
  },
];
