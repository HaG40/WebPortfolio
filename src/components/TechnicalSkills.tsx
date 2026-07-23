import FadeIn from "@/components/common/FadeIn";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

const skills = {
    Languages: [        
        "Go",
        "Python",
        "Java",
        "TypeScript",
        "JavaScript",
        "SQL",
    ],

    Frontend: [
        "React",
        "Tailwind CSS",
        "Bootstrap CSS",
        "Vite",
    ],

    Backend: [
        "Go",
        "Gin",
        "Node.js",
        "Express",
        "FastAPI",
        "Rest API",
    ],

    Database: [
        "PostgreSQL",
        "MySQL",        
        "GORM",
        "Prisma",
    ],

    Software: [
        "VS Code",
        "Postman",
        "Git",
        "GitHub",
        "PGAdmin 4",
        "Docker",
    ],

    Other: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
    ],
};

const TechnicalSkills = () => {
    return (
        <Section id="skills">
            <SectionTitle
                title="Technical Skills"
                subtitle="Technologies and tools I frequently use."
            />

            <FadeIn>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {Object.entries(skills).map(([title, items]) => (
                        <Card
                            key={title}
                            className="transition-all duration-300 hover:-translate-y-1 hover:opacity-95"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <h3 className="text-xl font-bold text-main">
                                    {title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg border border-theme px-4 py-2 text-sm text-main transition hover:opacity-90"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
};

export default TechnicalSkills;