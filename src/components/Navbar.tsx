import { Menu } from "lucide-react";

import Container from "@/components/common/Container";
import { navigation } from "@/data/navigation";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-theme bg-background">
      <Container>
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* Mono Eye */}
            <span
                className="
                  mono-eye
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_12px_rgba(200,69,69,.8)]
                  animate-pulse
                "
            />

            <span className="text-lg font-bold uppercase tracking-[0.2em] text-main">
              HADSAPONG L.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                                    relative
                                    py-2
                                    text-sm
                                    font-medium
                                    uppercase
                                    tracking-wider
                                    text-secondary
                                    transition-colors
                                    duration-300
                                    hover:text-main

                                    after:absolute
                                    after:bottom-0
                                    after:left-0
                                    after:h-0.5
                                    after:w-0
                                    after:bg-primary
                                    after:transition-all
                                    after:duration-300

                                    hover:after:w-full
                                    animate-pulse
                                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center text-main md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
