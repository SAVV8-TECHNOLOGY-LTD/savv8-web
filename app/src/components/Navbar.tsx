import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Search, Heart, User } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import savv8Logo from "@/assets/savv8_logo.png";

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

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    //{ label: "Home", path: "/" },
    //{ label: "Offers", path: "/offers" },
   // { label: "Categories", path: "/offers?tab=categories" },
   // { label: "Brands", path: "/offers?tab=brands" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-md" 
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
              <img src={savv8Logo} alt="Savv8" className="w-[150px] h-[350px]  object-contain" />
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors px-3 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? "text-black bg-[#c4ff61]" 
                    : "text-gray-700 hover:text-black hover:bg-[#eaffc7]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/*  <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#eaffc7]"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
           <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#eaffc7] relative"
            >
              <Heart className="w-5 h-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white border-0 w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                3
              </Badge>
            </Button> 
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#eaffc7]"
            >
              <User className="w-5 h-5 text-gray-600" />
            </Button>
            <Button className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold rounded-full px-6">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors rounded-lg mx-2 ${
                    location.pathname === item.path
                      ? "text-black bg-[#c4ff61]" 
                      : "text-gray-700 hover:text-black hover:bg-[#eaffc7]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-2 pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Saved Offers
                </Button>
                <Button
                  className="w-full bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
