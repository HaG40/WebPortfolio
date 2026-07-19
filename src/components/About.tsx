import FadeIn from "@/components/common/FadeIn";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import profile from "@/assets/profile/profile.jpg";

const About = () => {
    return (
        <Section id="about">
            <FadeIn>
                <SectionTitle
                    title="About Me"
                    subtitle="A brief introduction about myself."
                />

                <div className="grid items-start gap-12 lg:grid-cols-[340px_1fr]">
                    {/* Profile */}
                    <Card className="overflow-hidden">
                        <img
                            src={profile}
                            alt="Profile"
                            className="aspect-square w-full object-cover"
                        />

                        <div className="mt-6 border-t border-theme pt-6">
                            <h3 className="text-2xl font-bold text-main">
                                Hadsapong Lee
                            </h3>

                            <p className="mt-2 text-secondary">
                                Computer Science Student
                            </p>

                            <div className="mt-6 space-y-5">

                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Focus
                                    </span>

                                    <span className="text-main">
                                        Backend
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Date of Birth
                                    </span>

                                    <span className="text-main">
                                        4 Oct. 2003 
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Language Spoken
                                    </span>

                                    <span className="text-main">
                                        Thai, English
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Content */}
                    <div className="space-y-5">
                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Introduction
                            </h3>

                            <p className="leading-8 text-secondary">
                                I'm a Computer Science student passionate about Backend Development and cloud computing.
                                 I love designing system logic and building practical web applications using tools like 
                                 Go, GIN, and SQL. My ultimate career goal is to become a System Analyst, 
                                 and I am always looking for opportunities to challenge my skills with real-world, 
                                 industry-level projects.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Education
                            </h3>

                            <p className="text-secondary">
                                Bangkok University
                            </p>

                            <p className="mt-2 text-secondary">
                                School of Information Technology and Innovation
                            </p>

                            <p className="mt-2 text-secondary">
                                Major in Computer Science
                            </p>
                        </Card>

                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Interests
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {[
                                    
                                    
                                    "Backend Development",
                                    "System Analysis",
                                    "System Design",                            
                                    "Artificial Intelligence",
                                    "Cloud Computing",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg border border-theme px-4 py-2 text-sm text-main transition hover:opacity-90"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </FadeIn>
        </Section>
    );
};

export default About;