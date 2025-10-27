import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Bernard Ayamboro",
    role: "CEO & CTO",
    bio: "Technology visionary with a passion for AI and innovation. Bernard leads Savv8's technical strategy and product development.",
    linkedin: "#",
    email: "bernard@savv8.com",
  },
  {
    name: "Co-Founder",
    role: "CMO & COO",
    bio: "Strategic leader driving growth and partnerships. Focused on building meaningful connections between brands and consumers.",
    linkedin: "#",
    email: "team@savv8.com",
  },
];

const AboutUs = () => {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Savv8
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We're on a mission to make savings smarter and more accessible. Founded by two innovators combining 
            technology, creativity, and a vision for a better shopping experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={founder.name}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
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
                <p className="text-accent font-medium mb-4">
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
    </section>
  );
};

export default AboutUs;
