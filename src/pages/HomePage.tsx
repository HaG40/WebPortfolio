import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalSkills from "@/components/TechnicalSkills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const HomePage = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <TechnicalSkills />
            <Certifications />
            <Contact />
        </>
    );
};

export default HomePage;