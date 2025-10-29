import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Use a small timeout to ensure the navigation completes before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If we're already on homepage, just scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-0 lg:px-8">
        <div className="flex items-center justify-between sm:px-6 h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
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
              onClick={() => handleNavigation("features")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation("how-it-works")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => navigate("/about")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation("faq")}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => handleNavigation("news-blogs")}
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
              onClick={() => handleNavigation("waitlist")}
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
          <div className="md:hidden bg-background px-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 py-6">
              <button 
                onClick={() => handleNavigation("features")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavigation("how-it-works")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => {
                  navigate("/about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation("faq")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavigation("news-blogs")}
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                News & Blogs
              </button>
              <Button 
                variant="default" 
                onClick={() => handleNavigation("waitlist")}
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
