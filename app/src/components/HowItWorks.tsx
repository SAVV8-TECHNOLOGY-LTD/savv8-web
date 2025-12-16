import { UserCheck, Brain, Gift, Sparkles, ShoppingBag, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Quick 2-Minute Setup",
    description: "Create your profile in seconds. Tell us if you're a student, NHS/Bluelight hero, corporate professional, or everyday saver. Optional verification unlocks exclusive offers.",
    features: ["One-time setup", "Secure verification", "No credit card needed"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Learns Your Style",
    description: "Our intelligent algorithm analyzes your preferences, shopping habits, and lifestyle to curate a personalized deal feed that gets smarter over time.",
    features: ["Machine learning", "Privacy-first", "Always improving"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Gift,
    number: "03",
    title: "Save Automatically",
    description: "Browse your custom feed, activate deals with one tap, and watch your savings grow. Cashback and rewards are tracked automatically — no manual work required.",
    features: ["One-tap activation", "Auto cashback", "Real-time tracking"],
    color: "from-orange-500 to-red-500",
  },
];

const benefits = [
  { icon: Sparkles, text: "No coupon codes to remember" },
  { icon: ShoppingBag, text: "Works with 100+ brands" },
  { icon: Award, text: "Average £50/month savings" },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden" id="how-it-works">
      {/* Decorative elements with brand colors */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4" variant="outline">
            Simple Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Start Saving in
            <span className="block text-gradient-teal">
              3 Easy Steps
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started with Savv8 is incredibly simple. No complex setup, no learning curve — just instant savings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" style={{ top: "4rem" }} />
          
          {/* Connection dots */}
          <div className="hidden md:flex absolute top-24 left-0 right-0 justify-between px-[calc(16.666%-1rem)]" style={{ top: "4rem" }}>
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-accent animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>

          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card border-2 border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-300 relative group h-full">
                {/* Step number badge */}
                <div className={`absolute -top-6 left-8 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-4 border-t border-border/50">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-1 h-12 bg-gradient-to-b ${step.color} opacity-50`} />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits bar */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 animate-fade-in-up shadow-accent-glow" style={{ animationDelay: "0.5s" }}>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-md flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-muted-foreground mb-2">
            Ready to transform how you save?
          </p>
          <button
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="text-accent font-semibold hover:underline inline-flex items-center gap-2 group"
          >
            Join the waitlist now
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
