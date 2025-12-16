import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  HelpCircle,
  Bug,
  Lightbulb,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSupport = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "general",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const supportCategories = [
    { value: "general", label: "General Inquiry", icon: HelpCircle },
    { value: "technical", label: "Technical Issue", icon: Bug },
    { value: "account", label: "Account Help", icon: MessageSquare },
    { value: "offer", label: "Offer Question", icon: AlertCircle },
    { value: "feedback", label: "Feedback", icon: Lightbulb },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      detail: "support@savv8.com",
      description: "We'll respond within 24 hours",
      color: "from-[#b1ff2e] to-[#c4ff61]"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      detail: "Available 9am - 6pm GMT",
      description: "Chat with our team in real-time",
      color: "from-[#c4ff61] to-[#d7ff94]"
    },
    {
      icon: Phone,
      title: "Phone Support",
      detail: "+44 20 1234 5678",
      description: "Mon-Fri, 9am - 6pm GMT",
      color: "from-[#d7ff94] to-[#eaffc7]"
    }
  ];

  const faqs = [
    {
      question: "How do I redeem an offer?",
      answer: "Click on any offer to view details, then tap 'Get Deal' to reveal the promo code or be redirected to the brand's website."
    },
    {
      question: "Are the discounts really exclusive?",
      answer: "Yes! We partner directly with brands to bring you exclusive offers not available elsewhere."
    },
    {
      question: "How do I verify my eligibility?",
      answer: "Some offers require verification. You'll be prompted to upload relevant documentation (student ID, employment proof, etc.) when accessing exclusive offers."
    },
    {
      question: "Can I save offers for later?",
      answer: "Absolutely! Click the heart icon on any offer to save it to your favorites for easy access later."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaffc7] via-white to-[#d7ff94] py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-[#c4ff61]/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#b1ff2e] to-[#c4ff61] flex items-center justify-center">
              <MessageSquare className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you make the most of your savings. Get in touch with our support team.
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-[#c4ff61]/20 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">{method.title}</h3>
                <p className="text-[#b1ff2e] font-semibold mb-1">{method.detail}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c4ff61] flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="border-gray-300 focus-visible:ring-[#c4ff61]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="border-gray-300 focus-visible:ring-[#c4ff61]"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4ff61]"
                        required
                      >
                        {supportCategories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief description of your issue"
                        required
                        className="border-gray-300 focus-visible:ring-[#c4ff61]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please provide as much detail as possible..."
                        required
                        rows={6}
                        className="border-gray-300 focus-visible:ring-[#c4ff61] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* FAQs and Additional Info */}
          <div className="space-y-6">
            {/* FAQs */}
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-black mb-2 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-[#b1ff2e] flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm ml-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Can't find what you're looking for?{" "}
                    <a href="#contact-form" className="text-[#b1ff2e] hover:underline font-semibold">
                      Send us a message
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Office Info */}
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Visit Our Office</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#b1ff2e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Address</p>
                      <p className="text-sm text-gray-600">
                        Savv8 Ltd<br />
                        123 Tech Street<br />
                        London, EC1A 1BB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#b1ff2e] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Business Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                        Saturday: 10:00 AM - 4:00 PM GMT<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="border-[#c4ff61]/20 bg-gradient-to-br from-[#eaffc7] to-[#d7ff94]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-black mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#b1ff2e]" />
                  Quick Tips for Faster Support
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b1ff2e] font-bold">•</span>
                    Include relevant screenshots or error messages
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b1ff2e] font-bold">•</span>
                    Provide your account email for account-related issues
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b1ff2e] font-bold">•</span>
                    Mention the offer ID when asking about specific deals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b1ff2e] font-bold">•</span>
                    Check our FAQs before submitting a ticket
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="border-[#c4ff61]/20 bg-white">
            <CardContent className="p-8">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-[#b1ff2e]" />
              <h3 className="text-2xl font-bold text-black mb-2">
                Still Need Help?
              </h3>
              <p className="text-gray-700 mb-6">
                Our dedicated support team is always ready to assist you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Link to="/">
                  <Button variant="outline" className="border-[#c4ff61] hover:bg-[#c4ff61]/10">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
