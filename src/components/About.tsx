import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";

const About = () => {
    return (
        <Section id="about">
            <SectionTitle
                title="About Me"
                subtitle="A brief introduction about myself."
            />

            <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
                {/* Profile */}
                <Card className="overflow-hidden">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <img
                            src="src/assets/profile/profile.jpg"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </Card>

                {/* Content */}
                <div className="space-y-8">
                    <Card>
                        <h3 className="mb-4 text-xl font-bold text-main">
                            Introduction
                        </h3>

                        <p className="leading-8 text-secondary">
                            I'm a Computer Science student passionate about
                            software development, cloud computing, and building
                            practical web applications. I enjoy learning new
                            technologies and continuously improving my skills
                            through personal and academic projects.
                        </p>
                    </Card>

                    <Card>
                        <h3 className="mb-4 text-xl font-bold text-main">
                            Education
                        </h3>

                        <p className="text-secondary">
                            Bachelor of Computer Science
                        </p>

                        <p className="text-secondary">
                            Cloud Computing
                        </p>
                    </Card>

                    <Card>
                        <h3 className="mb-4 text-xl font-bold text-main">
                            Interests
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Web Development",
                                "Cloud Computing",
                                "Backend Development",
                                "Artificial Intelligence",
                                "UI/UX",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-md border border-theme px-3 py-2 text-sm text-main"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Section>
    );
};

export default About;