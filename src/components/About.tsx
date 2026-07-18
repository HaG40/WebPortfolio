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

                            <div className="mt-6 space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Location
                                    </span>

                                    <span className="text-main">
                                        Thailand
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Focus
                                    </span>

                                    <span className="text-main">
                                        Full-Stack
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-secondary">
                                        Cloud
                                    </span>

                                    <span className="text-main">
                                        AWS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Content */}
                    <div className="space-y-8">
                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Introduction
                            </h3>

                            <p className="leading-8 text-secondary">
                                I'm a Computer Science student passionate about
                                software development, cloud computing, and
                                building practical web applications. I enjoy
                                learning new technologies and continuously
                                improving my skills through personal and
                                academic projects.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Education
                            </h3>

                            <p className="text-secondary">
                                Bachelor of Computer Science
                            </p>

                            <p className="mt-2 text-secondary">
                                Bangkok University
                            </p>

                            <p className="mt-2 text-secondary">
                                Major in Cloud Computing
                            </p>
                        </Card>

                        <Card>
                            <h3 className="mb-5 text-xl font-bold text-main">
                                Interests
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Web Development",
                                    "Cloud Computing",
                                    "Backend Development",
                                    "Artificial Intelligence",
                                    "UI / UX",
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