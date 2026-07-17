import Container from "@/components/common/Container";

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-theme py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-3 text-sm text-secondary md:flex-row">
                    <p>© 2026 Hadsapong Lee. All rights reserved.</p>

                    <p>Built with React, TypeScript & Tailwind CSS</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;