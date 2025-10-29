import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "What is Savv8 and how does it work?",
    answer: "Savv8 is an AI-powered savings platform that personalizes offers, discounts, and rewards based on your lifestyle and interests. Our intelligent system learns from your preferences to automatically find and apply the best deals from verified brands, making saving money effortless."
  },
  {
    question: "Is Savv8 free to use?",
    answer: "Yes, Savv8 is completely free for users. We partner with brands to bring you exclusive offers and earn revenue through partnerships, so you get all the savings benefits at no cost to you."
  },
  {
    question: "How does Savv8 protect my personal data?",
    answer: "Your privacy and data security are our top priorities. We use industry-standard encryption and never sell your personal information to third parties. Our AI learns from anonymized patterns to improve your experience while keeping your individual data completely secure."
  },
  {
    question: "What types of deals and offers can I expect?",
    answer: "Savv8 offers a wide range of deals including student discounts, NHS worker benefits, corporate employee perks, cashback offers, exclusive brand partnerships, and seasonal promotions. Our AI ensures you only see offers relevant to your interests and lifestyle."
  },
  {
    question: "How do I know if a brand or offer is legitimate?",
    answer: "All brands and offers on Savv8 are thoroughly vetted and verified by our team. We only partner with legitimate, reputable companies and clearly display verification badges for all our brand partners."
  },
  {
    question: "Can I use Savv8 if I'm not in the UK?",
    answer: "Currently, Savv8 is focused on the UK market with UK-based brands and offers. However, we're planning to expand to other regions in the future. Join our waitlist to be notified when we launch in your area."
  },
  {
    question: "How do I get notified about new deals?",
    answer: "Once you join Savv8, you can customize your notification preferences to receive alerts about new deals via email, push notifications, or in-app notifications. You control the frequency and types of offers you want to hear about."
  },
  {
    question: "What makes Savv8 different from other coupon or cashback apps?",
    answer: "Unlike generic coupon apps, Savv8 uses advanced AI to personalize your experience completely. We don't just show you random deals – we learn what you actually need and want, then proactively find and apply the best offers for your specific situation and lifestyle."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Savv8 and how we're revolutionizing personal savings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We'd love to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@savv8.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-lg font-medium"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;