export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "Java", "Go", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Express", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "Docker", "Linux"],
  },
  {
    title: "Software",
    skills: ["VS Code", "IntelliJ IDEA", "Postman", "Figma"],
  },
];
