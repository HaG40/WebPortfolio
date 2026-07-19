import job1 from "@/assets/projects/featured/job1.png";
import job2 from "@/assets/projects/featured/job2.png";
import job3 from "@/assets/projects/featured/job3.png";
import job4 from "@/assets/projects/featured/job4.png";

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
  code?: string;
};

export const featuredProject: FeaturedProject = {
  title: "JobScraper.TH",

  shortDescription:
    "AI-powered job recommendation platform integrated with your resume and evaluates your compatibility with each job description.",

  description:
    "A web application that recommends suitable jobs by analyzing user profiles and resumes using AI technologies. It also evaluates your resume's compatibility with each job description to provide personalized recommendations. The system utilizes web scraping to gather real-time job listings from external sources, ensuring that users receive the most up-to-date opportunities.",

  technologies: [
    "React",
    "JavaScript",
    "Go",
    "Python",
    "PostgreSQL",
    "Groq API",
  ],

  features: [
    "Job Recommendation",
    "Job Search",
    "Real-time Job Listings",
    "AI-Powered Resume Analysis and Compatibility Evaluation",
  ],

  contributions: [
    "Designed full-stack architecture",
    "Developed REST APIs and database models using Go",
    "Developed user interface with React frontend",
    "Integrated AI services with Groq API",
  ],

  images: [job1, job2, job3, job4],

  github: "https://github.com/HaG40/JOB.SCRAPER-Website",
};

export const additionalProjects: AdditionalProject[] = [
  {
    title: "Heart Disease Prediction",
    description:
      "Machine learning model (Random Forest) for heart disease prediction.",

    technologies: ["Streamlit", "Scikit-Learn", "Pandas", "NumPy", "Python"],

    image: "src/assets/projects/heart-disease.png",

    github:
      "https://github.com/HaG40/Heart-Disease-Prediction-Model-with-Web-Application",
  },
  {
    title: "VolunThai",
    description:
      "Volunteer management web application with detailed admin panel.",

    technologies: ["React", "Express", "TypeScript", "PostgreSQL"],

    image: "src/assets/projects/volunthai.png",

    github: "https://github.com/HaG40/CS319Project",
  },
  {
    title: "BuFAQ (Backend Only)",
    description:
      "AI FAQ chatbot powered for Bangkok University using model and LPU from GROQ API.",

    technologies: ["FastAPI", "Groq API", "Python"],

    image: "src/assets/projects/bufaq.png",

    code: "src/assets/projects/bufaqbackend.png",
  },
];
