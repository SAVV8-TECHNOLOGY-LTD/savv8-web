import { UserCheck, Brain, Gift } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    number: "01",
    title: "Create Your Profile",
    description: "Tell us a bit about you — student, NHS/Bluelight hero, corporate hustler, or just deal-hunter — and we’ll do the rest.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Let AI Do Its Magic",
    description: "Savv8 learns your likes and lifestyle to handpick deals that actually make sense for you.",
  },
  {
    icon: Gift,
    number: "03",
    title: "Start Saving Instantly",
    description: "Scroll your personalised feed, grab exclusive offers, and instant rewards — all in one place.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock smarter savings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-violet-500 to-accent opacity-30" style={{ top: "6rem" }} />

          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative">
                {/* Step number badge */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-accent to-violet-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
