import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Savv8
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection("news-blogs")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              News
            </button>
            <Button 
              variant={isScrolled ? "default" : "hero"} 
              onClick={() => scrollToSection("waitlist")}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 py-6">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection("news-blogs")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                News & Blogs
              </button>
              <Button 
                variant="default" 
                onClick={() => scrollToSection("waitlist")}
                className="w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
