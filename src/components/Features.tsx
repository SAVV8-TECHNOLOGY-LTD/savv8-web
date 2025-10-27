import { Target, Users, Zap, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Target,
    title: "Personalized Deals",
    description: "AI curates offers specifically for you based on your interests, lifestyle, and preferences.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Exclusive Partner Discounts",
    description: "Access verified deals from trusted brands across retail, food, entertainment, and more.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Automatic Cashback",
    description: "Earn rewards effortlessly with automatic affiliate savings and voucher applications.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your data stays yours. We prioritize security and transparency in everything we do.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose Savv8?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we're revolutionizing the way you save money
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
