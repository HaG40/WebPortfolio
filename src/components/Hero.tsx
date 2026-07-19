import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import FadeIn from "@/components/common/FadeIn";
import { FaPhoneAlt, FaEye } from "react-icons/fa";

const Hero = () => {
    return (
        <Section id="home">
            <FadeIn>
                <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_0.9fr]">
                    <div>
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                            Computer Science • Bangkok University
                        </p>

                        <h1 className="text-main text-5xl font-black uppercase leading-none md:text-6xl xl:text-7xl">
                            HADSAPONG
                            <br />
                            LEE
                        </h1>

                        <div className="mt-6 h-0.5 w-28 rounded-full bg-primary" />

                        <p className="mt-8 max-w-2xl text-base leading-8 text-secondary md:text-lg">
                            Interest
                            in Backend Development, System Analysis, and System Design
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button href="#projects">
                                <FaEye className="mr-2" />
                                View Projects
                            </Button>

                            <Button
                                href="#contact"
                                className="bg-surface border border-theme text-main hover:bg-surface-hover"
                            >
                                <FaPhoneAlt className="mr-2" />
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    {/* Right */}
                    <Card>
                        <h2 className="mb-8 text-xl font-bold uppercase tracking-[0.25em] text-main">
                            System Status
                        </h2>

                        <div className="space-y-5">
                            {[
                                ["Status", "🟢 Online"],
                                ["Education", "Computer Science"],
                                ["Focus", "Backend Development"],
                                ["Main Tools", "Go, Postman, PostgreSQL"],
                                ["Location", "Bangkok, Thailand"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex items-center justify-between border-b border-theme pb-3"
                                >
                                    <span className="text-secondary">
                                        {label}
                                    </span>

                                    <span className="font-medium text-main">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </FadeIn>
        </Section>
    );
};

export default Hero;