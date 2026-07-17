import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

const skills = {
    Languages: [
        "TypeScript",
        "JavaScript",
        "Go",
        "Python",
        "SQL",
    ],

    Frontend: [
        "React",
        "Tailwind CSS",
        "Vite",
    ],

    Backend: [
        "Go",
        "Node.js",
        "Express",
        "REST API",
    ],

    Database: [
        "PostgreSQL",
        "Prisma",
        "GORM",
    ],

    Cloud: [
        "AWS",
        "Docker",
        "Git",
        "GitHub",
    ],
};

const TechnicalSkills = () => {
    return (
        <Section id="skills">
            <SectionTitle
                title="Technical Skills"
                subtitle="Technologies and tools I frequently use."
            />

            <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(skills).map(([title, items]) => (
                    <Card key={title}>
                        <h3 className="mb-5 text-xl font-bold text-main">
                            {title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-md border border-theme px-3 py-2 text-sm text-main"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default TechnicalSkills;