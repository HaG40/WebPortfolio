import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import { navigation } from "@/data/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-theme bg-background">
            <Container>
                <div className="flex h-18 items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="flex items-center gap-3"
                        onClick={() => setOpen(false)}
                    >
                        <span
                            className="
                                mono-eye
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-primary
                                shadow-[0_0_12px_rgba(200,69,69,.8)]
                            "
                        />

                        <span className="text-lg font-bold uppercase tracking-[0.2em] text-main">
                            HADSAPONG L.
                        </span>
                    </a>

                    {/* Desktop */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="relative py-2 text-sm font-medium uppercase tracking-wider text-secondary transition hover:text-main after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-main md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <nav className="border-t border-theme py-4 md:hidden">
                        <div className="flex flex-col">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-4 py-3 text-secondary transition hover:bg-surface hover:text-main"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    );
};

export default Navbar;