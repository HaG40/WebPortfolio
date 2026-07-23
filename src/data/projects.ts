import job1 from "@/assets/projects/featured/job1.png";
import job2 from "@/assets/projects/featured/job2.png";
import job3 from "@/assets/projects/featured/job3.png";
import job4 from "@/assets/projects/featured/job4.png";
import heartdisease from "@/assets/projects/additional/heart-disease.png";
import volunthai from "@/assets/projects/additional/volunthai.png";
import bufaq from "@/assets/projects/additional/bufaq.png";
import bufaqcode from "@/assets/projects/additional/bufaqbackend.png";
import mailsystem from "@/assets/projects/additional/mailsystem.png";

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

    image: heartdisease,

    github:
      "https://github.com/HaG40/Heart-Disease-Prediction-Model-with-Web-Application",
  },
  {
    title: "VolunThai",
    description:
      "Volunteer management web application with detailed admin panel.",

    technologies: ["React", "Express", "TypeScript", "PostgreSQL"],

    image: volunthai,

    github: "https://github.com/HaG40/CS319Project",
  },
  {
    title: "BuFAQ (Backend Only)",
    description:
      "AI FAQ chatbot powered for Bangkok University using model and LPU from GROQ API.",

    technologies: ["FastAPI", "Groq API", "Python"],

    image: bufaq,

    code: bufaqcode,
  },

  {
    title: "Mail System with Role-Based Rule (CS436)",

    description:
      "A secure web-based mail system featuring role-based authentication and authorization. Users are assigned different roles and permissions to control access to system features and email management.",

    technologies: ["ASP.NET", "C#", "Microsoft Azure", "Bootstrap"],

    image: mailsystem,

    github: "https://github.com/Hadsapong-Lee/FinalProject_CS436",
  },
];
