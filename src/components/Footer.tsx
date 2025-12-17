import { Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-space-deep border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={() => scrollToSection("home")} className="text-primary text-lg mb-4 font-bold">
              HAMZA SWADIQ
            </button>
            <p className="text-muted-foreground text-sm">
              Aerospace Engineering Student | Future ISRO Scientist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-foreground mb-4 font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-primary text-sm transition-colors text-left">About</button>
              <button onClick={() => scrollToSection("projects")} className="text-muted-foreground hover:text-primary text-sm transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection("education")} className="text-muted-foreground hover:text-primary text-sm transition-colors text-left">Education</button>
              <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-primary text-sm transition-colors text-left">Contact</button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-foreground mb-4 font-semibold">Contact</h4>
            <div className="space-y-2">
              <a href="mailto:hamzaswadiq007@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                <Mail className="w-4 h-4" />
                hamzaswadiq007@gmail.com
              </a>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Kodinji, Malappuram, Kerala, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Hamza Swadiq.pk — All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;