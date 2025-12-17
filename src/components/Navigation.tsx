import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

const navItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About Me" },
  { to: "education", label: "Education" },
  { to: "achievements", label: "Achievements" },
  { to: "internships", label: "Internships" },
  { to: "projects", label: "Projects" },
  { to: "faq", label: "FAQ" },
  { to: "gallery", label: "Gallery" },
  { to: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="btn-primary flex items-center gap-2 text-xs"
          >
            <Rocket className="w-4 h-4" />
            ONLINE PORTFOLIO
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.to}
                onClick={() => scrollToSection(item.to)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <div className="w-24 xl:w-32 h-[1px] bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => scrollToSection(item.to)}
                  className="nav-link py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;