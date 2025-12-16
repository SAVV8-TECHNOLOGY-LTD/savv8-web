import { Smartphone, Code, Rocket, Clock, CheckCircle, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AppInDevelopment = () => {
  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const developmentPhases = [
    {
      phase: "Phase 1",
      title: "AI Engine & Core Features",
      status: "completed",
      description: "Smart savings algorithm and user profiling system",
      completion: 100
    },
    {
      phase: "Phase 2", 
      title: "Partner Integration",
      status: "in-progress",
      description: "Connecting with major retailers and service providers",
      completion: 75
    },
    {
      phase: "Phase 3",
      title: "Mobile App Development",
      status: "in-progress", 
      description: "iOS and Android native applications",
      completion: 60
    },
    {
      phase: "Phase 4",
      title: "Beta Testing & Refinement",
      status: "in-progress",
      description: "User testing and feature optimization",
      completion: 25
    }
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-Powered Personalization",
      description: "Smart algorithms that learn your preferences"
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Native Mobile Apps", 
      description: "iOS and Android apps for seamless experience"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Real-time Deal Detection",
      description: "Instant notifications for relevant savings"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Code className="w-4 h-4" />
            <span className="text-sm font-medium">In Development</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We're Building Something Amazing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team is hard at work creating the future of AI-powered savings. Get an exclusive look at our development progress and what's coming next.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Development Progress */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Development Roadmap
              </h3>
              <p className="text-muted-foreground">
                Track our progress as we build the most intelligent savings platform ever created.
              </p>
            </div>

            {developmentPhases.map((phase, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {phase.status === 'completed' ? (
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                      ) : phase.status === 'in-progress' ? (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary animate-pulse" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Rocket className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-foreground">{phase.title}</h4>
                        <Badge variant={
                          phase.status === 'completed' ? 'default' :
                          phase.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {phase.status === 'completed' ? 'Complete' :
                           phase.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {phase.description}
                      </p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                          style={{ width: `${phase.completion}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {phase.completion}% complete
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Side - App Preview & Features */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-80 sm:w-64 sm:h-96 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-4 sm:p-6 border-4 border-background shadow-2xl">
                  <div className="w-full h-full bg-background rounded-2xl p-3 sm:p-4 flex flex-col">
                    <div className="w-full h-4 sm:h-6 bg-muted rounded-full mb-3 sm:mb-4"></div>
                    <div className="space-y-2 sm:space-y-3 flex-1">
                      <div className="h-3 sm:h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-3 sm:h-4 bg-primary/20 rounded w-full"></div>
                      <div className="h-3 sm:h-4 bg-muted rounded w-1/2"></div>
                      <div className="space-y-2 mt-4 sm:mt-6">
                        <div className="h-8 sm:h-12 bg-accent/20 rounded-lg"></div>
                        <div className="h-8 sm:h-12 bg-primary/20 rounded-lg"></div>
                        <div className="h-8 sm:h-12 bg-muted/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="h-8 sm:h-10 bg-gradient-primary rounded-lg mt-3 sm:mt-4 flex items-center justify-center">
                      <span className="text-xs text-white font-medium">Savv8 AI</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                App mockup - Design in progress
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-base sm:text-lg">
                What's Coming to the App
              </h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-background border border-border">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-1 text-sm sm:text-base">{feature.title}</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-6 sm:p-8">
              <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4">
                Be Among the First to Experience Savv8
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Join our waitlist to get early access to the beta app and exclusive development updates.
              </p>
              <div className="flex flex-col gap-3 sm:gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-lg transition-all w-full sm:w-auto"
                  onClick={handleScrollToWaitlist}
                >
                  Join Beta Waitlist
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={handleScrollToWaitlist}
                >
                  Get Development Updates
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Expected beta launch: Q1 2026 • Full release: Q2 2026
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppInDevelopment;