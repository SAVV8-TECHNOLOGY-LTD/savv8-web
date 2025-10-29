import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, User, Briefcase, CheckCircle2 } from "lucide-react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.userType) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // TODO: Replace with actual API endpoint
    console.log("Waitlist submission:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-hero" id="waitlist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto border-accent/20 shadow-glow animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Welcome to Savv8!
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                You're officially on the waitlist. We'll notify you as soon as we launch.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSubmitted(false)}
              >
                Submit Another
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-hero" id="waitlist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Be among the first to experience smarter savings with Savv8
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-accent/20 shadow-glow animate-fade-in-up">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              {/* User Type Field */}
              <div className="space-y-2">
                <Label htmlFor="userType" className="text-foreground flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  I am a...
                </Label>
                <Select value={formData.userType} onValueChange={(value) => setFormData({ ...formData, userType: value })}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select your category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General User</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="nhs">NHS/Blue light Worker</SelectItem>
                    <SelectItem value="corporate">Corporate Employee</SelectItem>
                    <SelectItem value="business">Business/Partner</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Join the Waitlist
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By joining, you agree to receive updates from Savv8. 
                Your data is secure and private.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
