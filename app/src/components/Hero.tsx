import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-illustration.png";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6 animate-scale-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Stay Savvy. Save Smart.                                                                                                                                                                                                                                                                                                                                                                                                                                                   </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Smarter Savings,
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Just for You.
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Savv8 uses AI to personalize offers, discounts, and rewards based on your lifestyle and interests. 
              Get exclusive deals from verified brands, automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={scrollToWaitlist} className="group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered personalization technology" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
