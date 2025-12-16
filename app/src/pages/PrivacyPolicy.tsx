import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail, AlertCircle } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaffc7] via-white to-[#d7ff94] py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4 hover:bg-[#c4ff61]/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b1ff2e] to-[#c4ff61] flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mt-2">Last updated: December 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-[#c4ff61]/20">
          <CardContent className="p-6">
            <p className="text-gray-700">
              At Savv8, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
            </p>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    1. Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Personal Information</p>
                  <p>We may collect personal information that you provide to us, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and email address</li>
                    <li>Phone number (optional)</li>
                    <li>Date of birth (for age verification)</li>
                    <li>Profile information and preferences</li>
                    <li>Saved offers and browsing history</li>
                    <li>Communication preferences</li>
                  </ul>

                  <p className="font-semibold mt-6">Verification Information</p>
                  <p>For certain exclusive offers, we may collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Student status verification</li>
                    <li>Employment verification (for specific professional discounts)</li>
                    <li>Documentation to verify eligibility</li>
                  </ul>

                  <p className="font-semibold mt-6">Automatically Collected Information</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device information (type, operating system, browser)</li>
                    <li>IP address and location data</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and tracking technologies</li>
                    <li>Log files and interaction data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    2. How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, operate, and maintain the Service</li>
                    <li>Personalize your experience and deliver targeted offers</li>
                    <li>Process transactions and send related notifications</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Analyze usage patterns to improve our Service</li>
                    <li>Detect, prevent, and address technical issues</li>
                    <li>Comply with legal obligations</li>
                    <li>Verify eligibility for specific offers</li>
                    <li>Send push notifications about new deals and offers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    3. How We Share Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>We may share your information in the following situations:</p>
                  
                  <p className="font-semibold">With Partner Brands</p>
                  <p>
                    When you redeem an offer, we may share necessary information with the partner brand to facilitate the discount. This is done in accordance with each brand's privacy policy.
                  </p>

                  <p className="font-semibold mt-4">Service Providers</p>
                  <p>We may share your data with third-party service providers who perform services on our behalf, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Analytics providers (e.g., Google Analytics)</li>
                    <li>Email marketing services</li>
                    <li>Cloud hosting providers</li>
                    <li>Payment processors</li>
                    <li>Customer support tools</li>
                  </ul>

                  <p className="font-semibold mt-4">Legal Compliance</p>
                  <p>We may disclose your information when required by law or to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Comply with legal process</li>
                    <li>Enforce our Terms of Service</li>
                    <li>Protect the rights, property, or safety of Savv8 or others</li>
                    <li>Prevent fraud or security issues</li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3 mt-6">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-semibold mb-1">We Never Sell Your Data</p>
                      <p>
                        We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    4. Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p className="font-semibold">Security Measures Include:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure socket layer (SSL) technology</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    5. Your Privacy Rights
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal data</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at privacy@savv8.com. We will respond to your request within 30 days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>We use cookies and similar tracking technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our Service</li>
                    <li>Personalize content and advertisements</li>
                    <li>Analyze trends and user behavior</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of the Service.
                  </p>
                  <p className="mt-4">
                    For more information, please see our <Link to="/cookie-policy" className="text-[#b1ff2e] hover:underline">Cookie Policy</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 7 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  7. Children's Privacy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 8 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  8. International Data Transfers
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those of your country.
                  </p>
                  <p>
                    We ensure appropriate safeguards are in place to protect your personal data in accordance with this Privacy Policy and applicable laws.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 9 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  9. Data Retention
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                  </p>
                  <p>
                    When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 10 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the Service after changes are posted constitutes your acceptance of the revised Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    11. Contact Us
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> privacy@savv8.com</li>
                    <li><strong>Data Protection Officer:</strong> dpo@savv8.com</li>
                    <li><strong>Address:</strong> Savv8 Ltd, London, United Kingdom</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Card className="border-[#c4ff61]/20 bg-gradient-to-br from-[#eaffc7] to-[#d7ff94]">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 mx-auto mb-4 text-[#b1ff2e]" />
              <h3 className="text-2xl font-bold text-black mb-2">
                Your Privacy is Protected
              </h3>
              <p className="text-gray-700 mb-6">
                We're committed to keeping your data safe and respecting your privacy rights.
              </p>
              <Link to="/">
                <Button className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold">
                  Return to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
