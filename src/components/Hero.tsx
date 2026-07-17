import Section from "@/components/common/Section";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";

const Hero = () => {
    return (
        <Section id="home">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                {/* Left */}
                <div>
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
                        Computer Science • Cloud Computing
                    </p>

                    <h1 className="mb-6 text-5xl font-bold uppercase leading-none text-main md:text-6xl xl:text-7xl">
                        HADSAPONG
                        <br />
                        LEE
                    </h1>

                    <p className="mb-8 max-w-2xl leading-8 text-secondary">
                        Passionate Computer Science student with interests in
                        Full-Stack Web Development, Cloud Computing, and
                        Software Engineering. I enjoy building modern,
                        responsive, and practical applications to solve
                        real-world problems.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button href="#projects">
                            View Projects
                        </Button>

                        <Button href="#contact">
                            Contact Me
                        </Button>
                    </div>
                </div>

                {/* Right */}
                <Card>
                    <h2 className="mb-6 text-xl font-bold uppercase tracking-wider text-main">
                        System Status
                    </h2>

                    <div className="space-y-4 text-secondary">
                        <div className="flex justify-between">
                            <span>Status</span>
                            <span className="text-main">Online</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Education</span>
                            <span className="text-main">
                                Computer Science
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Focus</span>
                            <span className="text-main">
                                Full-Stack Development
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>Cloud</span>
                            <span className="text-main">AWS</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Location</span>
                            <span className="text-main">Thailand</span>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    );
};

export default Hero;