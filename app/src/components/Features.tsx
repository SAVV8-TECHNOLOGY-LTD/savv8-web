import { Target, Users, Zap, Lock, Brain, Wallet, Bell, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Personalization",
    description: "Our smart algorithm learns your shopping habits and preferences to surface only the deals that matter to you — no noise, no spam.",
    gradient: "from-teal-500 to-cyan-500",
    badge: "Core Feature",
  },
  {
    icon: Target,
    title: "Role-Based Offers",
    description: "Student? NHS worker? Business professional? Get exclusive discounts tailored to your status with automatic verification.",
    gradient: "from-violet-500 to-purple-500",
    badge: "Exclusive",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "One-tap deal activation with automatic cashback tracking. Your savings are applied instantly — no codes, no hassle.",
    gradient: "from-orange-500 to-red-500",
    badge: "Seamless",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get alerted when your favorite brands drop new deals or when limited-time offers match your interests.",
    gradient: "from-pink-500 to-rose-500",
    badge: "Real-time",
  },
  {
    icon: Wallet,
    title: "Unified Rewards",
    description: "Track all your savings, cashback, and loyalty rewards in one place. See exactly how much you're saving every month.",
    gradient: "from-blue-500 to-indigo-500",
    badge: "Transparent",
  },
  {
    icon: TrendingUp,
    title: "Savings Analytics",
    description: "Get insights into your spending patterns and discover opportunities to save even more with personalized recommendations.",
    gradient: "from-emerald-500 to-green-500",
    badge: "Insights",
  },
  {
    icon: Users,
    title: "100+ Premium Brands",
    description: "Access verified deals from major retailers, restaurants, entertainment venues, and service providers across the UK.",
    gradient: "from-amber-500 to-yellow-500",
    badge: "Verified",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Your data is encrypted end-to-end. We never sell your information. GDPR compliant with full transparency.",
    gradient: "from-gray-600 to-gray-800",
    badge: "Protected",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4" variant="outline">
            Platform Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-gradient-teal">
              Save Smarter
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Savv8 combines cutting-edge AI technology with practical features to deliver a personalized discount experience like no other
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-border bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardContent className="p-6 relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl px-8 py-6 shadow-brand">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Join 1,000+ early adopters</p>
              <p className="text-xs text-muted-foreground">Already saving an average of £50/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
