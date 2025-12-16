import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingDown, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/herosection.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: TrendingDown, value: "50%+", label: "Average Savings" },
    { icon: Shield, value: "100+", label: "Verified Brands" },
    { icon: Zap, value: "AI", label: "Powered Matching" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Enhanced Animated background elements with brand colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-accent rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-5 py-2 mb-6 mt-20 animate-scale-in backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">
                AI-POWERED PERSONALIZED DISCOUNTS
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-6 leading-tight tracking-tight">
              Your Personal
              <span className="block text-gradient-teal mt-2">
                AI Savings Agent
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop wasting time hunting for deals. Let Savv8's intelligent AI discover and deliver personalized discounts from 100+ verified brands — automatically matched to your lifestyle and preferences.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToWaitlist}
                className="group shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/70 transition-all"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm hover:scale-105 transition-all"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/70 text-sm">
              <Shield className="w-4 h-4" />
              <span>100% Secure • GDPR Compliant • Free Forever</span>
            </div>
          </div>

          {/* Right content - Hero Image with enhanced styling */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
              
              <img
                src={heroImage}
                alt="Savv8 AI-powered discount platform interface"
                className="w-full h-auto rounded-2xl shadow-glow relative z-10 border border-primary-foreground/10"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-2xl" />
              
              {/* Floating card elements */}
              <div className="absolute top-8 -right-4 bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">You saved</div>
                    <div className="text-lg font-bold text-foreground">£47.50</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 -left-4 bg-card/90 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg animate-float hidden sm:block" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">New deals</div>
                    <div className="text-lg font-bold text-foreground">12 today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
