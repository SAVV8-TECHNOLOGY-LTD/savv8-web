import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "NHS Nurse",
    location: "Manchester",
    rating: 5,
    text: "Savv8's AI really understands my schedule and budget. It finds NHS discounts I never knew existed and saves me hours of searching.",
    category: "Healthcare Worker"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "University Student",
    location: "Edinburgh",
    rating: 5,
    text: "As a student, every penny counts. Savv8 has helped me save over £200 this term on textbooks, food, and entertainment.",
    category: "Student"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Marketing Manager",
    location: "London",
    rating: 5,
    text: "The personalization is incredible. It knows I'm into sustainable brands and always finds eco-friendly options with great deals.",
    category: "Professional"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Teacher",
    location: "Birmingham",
    rating: 5,
    text: "Savv8 makes budgeting effortless. The teacher discounts it finds help me stretch my salary further for classroom supplies.",
    category: "Educator"
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Small Business Owner",
    location: "Bristol",
    rating: 5,
    text: "Running a business means watching every expense. Savv8 helps me find better deals on everything from office supplies to team lunches.",
    category: "Business Owner"
  },
  {
    id: 6,
    name: "Alex Morgan",
    role: "Freelance Designer",
    location: "Leeds",
    rating: 5,
    text: "The AI learns my workflow and suggests deals on design software and equipment right when I need them. It's like having a personal finance assistant.",
    category: "Freelancer"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">User Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Beta Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from early users who are already experiencing smarter savings with Savv8.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mt-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of satisfied users who are saving smarter with Savv8
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">2,500+</div>
              <div className="text-sm text-muted-foreground">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">£1.2M</div>
              <div className="text-sm text-muted-foreground">Total Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;