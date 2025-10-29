import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { privacyPolicyContent } from "@/constants/legalContent";

const PrivacyPolicy = () => {
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
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {privacyPolicyContent.title}
            </h1>
            
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Last updated: {privacyPolicyContent.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-sm">
            <CardContent className="p-8 sm:p-12">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-ul:text-muted-foreground prose-li:text-muted-foreground
                prose-strong:text-foreground prose-h3:text-foreground prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3">
                
                {privacyPolicyContent.sections.map((section, index) => (
                  <div key={section.id} className={index > 0 ? "mt-12" : ""}>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
                      {section.title}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                ))}
                
                <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Questions?</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, please don't hesitate to contact us.
                  </p>
                  <Link to="/contact-support">
                    <Button variant="outline">Contact Support</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;