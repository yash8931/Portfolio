import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";
import headerLogo from "../../assets/company/headerLogo.png";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Achievements", to: "/#achievements" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <Container>
        <nav className="flex h-17 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <img
              src={headerLogo}
              alt="Yashendra Singh"
              className="h-10 w-13 rounded-xl"
            />

            <span className="hidden text-sm font-bold text-slate-900 sm:block">
              Yashendra Singh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="relative text-xs font-semibold text-slate-600 transition-colors hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-slate-700 transition hover:bg-slate-50"
            >
              ☾
            </button>

            <Button href="#resume" className="rounded-lg px-4 py-2.5 text-xs">
              Resume
              <span aria-hidden="true">↓</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-indigo-600"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                href="#resume"
                onClick={closeMenu}
                className="mt-2 w-full"
              >
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
