import { motion } from "framer-motion";
import { Link } from "wouter";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Skillset", href: "/#skills" },
    { name: "Contact", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Check if we are on the home page
    if (window.location.pathname !== '/') {
        // If not on home page, let the default link behavior happen (navigate to /#section)
        return;
    }
    
    e.preventDefault();
    const elementId = id.replace('/', ''); // remove leading slash if present
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(elementId);
    }
  };

  useEffect(() => {
    // Only run intersection observer on home page
    if (window.location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 } 
    );

    links.forEach((link) => {
      const elementId = link.href.replace('/', '');
      const element = document.querySelector(elementId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [window.location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container-width flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="text-xl font-bold font-heading tracking-tight hover:text-primary/80 transition-colors cursor-pointer" onClick={(e) => scrollToSection(e as any, "#home")}>
            DH<span className="text-primary/40">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === link.href.replace('/','') ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {activeSection === link.href.replace('/','') && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DuaneHorten"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/duane-horton-8ab528234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-full"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 transition-all" />
              ) : (
                <Moon className="h-5 w-5 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
