import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Mail, Target, Heart, Zap, Users, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Bernard Ayamboro",
    role: "CEO & CTO",
    bio: "Technology visionary with a passion for AI and innovation. Bernard leads Savv8's technical strategy and product development.",
    linkedin: "https://www.linkedin.com/in/bernard-ayamboro/",
    email: "bernard.ayamboro@savv8.com",
  },
  {
    name: "Chloe Nunn",
    role: "CMO & COO",
    bio: "Strategic leader driving growth and partnerships. Focused on building meaningful connections between brands and consumers.",
    linkedin: "#",
    email: "chloe.nunn@savv8.com",
  },
];

const values = [
  {
    icon: Target,
    title: "Purpose-Driven Innovation",
    description: "We believe technology should serve people, not the other way around. Every feature we build aims to make savings more accessible and meaningful.",
  },
  {
    icon: Heart,
    title: "Customer-First Approach",
    description: "Your financial wellbeing is at the heart of everything we do. We prioritize transparency, privacy, and genuine value in every interaction.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "We harness AI to eliminate the friction from saving money, making smart financial decisions effortless and automatic.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description: "Savings should be accessible to everyone. We're building a platform that serves diverse communities and lifestyles with equal care.",
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-hero py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-primary-foreground/80 mb-4">
              <Users2 className="w-5 h-5" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Savv8
            </h1>
            
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              We're on a mission to make savings smarter and more accessible through AI-powered personalization.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Card className="border-border shadow-sm">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                We're building the future of personal finance by combining artificial intelligence with human-centered design. 
                Our platform learns from your lifestyle and preferences to deliver savings opportunities that actually matter to you.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by two innovators who believe that technology should make life easier, not more complicated, 
                Savv8 represents a new approach to financial wellness—one that's personal, intelligent, and accessible to everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our Vision
            </h3>
            <Card className="max-w-4xl mx-auto border-accent/20 shadow-sm">
              <CardContent className="p-8 sm:p-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To create a world where everyone has access to personalized, intelligent savings solutions 
                  that adapt to their unique lifestyle and financial goals. We envision a future where AI 
                  empowers individuals to make smarter financial decisions effortlessly, fostering financial 
                  wellness and security for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="border-border hover:shadow-lg transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent mb-4 flex items-center justify-center mx-auto shadow-md">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Founders
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate innovators behind Savv8's mission to revolutionize personal savings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={founder.name}
                className="border-border hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 rounded-full bg-gradient-accent mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {founder.name.charAt(0)}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${founder.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-accent/20 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of the savings revolution. Join our waitlist and be among the first to experience the future of personal finance.
              </p>
              <Link to="/#waitlist">
                <Button variant="default" size="lg">
                  Join the Waitlist
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;