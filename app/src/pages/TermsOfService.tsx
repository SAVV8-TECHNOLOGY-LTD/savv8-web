import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, AlertCircle, Shield, Scale } from "lucide-react";

const TermsOfService = () => {
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
              <Scale className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Terms of Service
              </h1>
              <p className="text-gray-600 mt-2">Last updated: December 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mb-8 border-[#c4ff61]/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#b1ff2e]" />
              Quick Navigation
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                "Acceptance of Terms",
                "User Accounts",
                "Use of Service",
                "Discount Offers",
                "Prohibited Activities",
                "Intellectual Property",
                "Limitation of Liability",
                "Changes to Terms",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-gray-600 hover:text-[#b1ff2e] transition-colors"
                >
                  {index + 1}. {item}
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section id="acceptance-of-terms">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    By accessing and using Savv8 ("Service", "Platform", "we", "us", or "our"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our Service.
                  </p>
                  <p>
                    These terms apply to all visitors, users, and others who access or use the Service, including but not limited to users who browse, subscribe, or contribute content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="user-accounts">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  2. User Accounts
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Account Creation</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You must be at least 13 years old to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                    <li>You are responsible for all activities under your account</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                  </ul>
                  <p className="font-semibold mt-6">Account Termination</p>
                  <p>
                    We reserve the right to suspend or terminate your account at any time for violations of these terms, fraudulent activity, or any other reason we deem appropriate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3 */}
          <section id="use-of-service">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  3. Use of Service
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the Service in any way that violates applicable laws or regulations</li>
                    <li>Impersonate or attempt to impersonate Savv8, a Savv8 employee, another user, or any other person or entity</li>
                    <li>Engage in any conduct that restricts or inhibits anyone's use of the Service</li>
                    <li>Use any robot, spider, or other automatic device to access the Service</li>
                    <li>Introduce viruses, trojans, or other malicious code</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4 */}
          <section id="discount-offers">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  4. Discount Offers
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Important Notice</p>
                      <p>
                        Savv8 aggregates discount offers from various brands and retailers. We are not responsible for the accuracy, availability, or terms of third-party offers.
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">Offer Terms</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All offers are subject to the terms and conditions of the respective brands</li>
                    <li>Offers may expire without notice</li>
                    <li>Discounts and promotions may vary by location and eligibility</li>
                    <li>We do not guarantee the availability of any specific offer</li>
                    <li>Verification may be required for certain offers</li>
                  </ul>
                  <p className="font-semibold mt-6">No Warranties</p>
                  <p>
                    Savv8 provides the Service "as is" and makes no warranties regarding the accuracy, completeness, or reliability of discount information. Users should verify all offer details with the respective brands before making purchases.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="prohibited-activities">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  5. Prohibited Activities
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>Users are expressly prohibited from:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Attempting to fraudulently redeem offers multiple times</li>
                    <li>Creating multiple accounts to abuse offers</li>
                    <li>Sharing, selling, or transferring offers designated for personal use</li>
                    <li>Using automated tools to scrape or collect data from the Service</li>
                    <li>Reverse engineering or decompiling any part of the Service</li>
                    <li>Interfering with or disrupting the Service or servers</li>
                    <li>Uploading malicious code or content</li>
                    <li>Violating intellectual property rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6 */}
          <section id="intellectual-property">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  6. Intellectual Property
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The Service and its original content, features, and functionality are owned by Savv8 and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className="font-semibold mt-4">Trademarks</p>
                  <p>
                    Savv8 and all related logos are trademarks of Savv8. All brand names and logos displayed on the Service are the property of their respective owners.
                  </p>
                  <p className="font-semibold mt-4">User Content</p>
                  <p>
                    By submitting content to the Service, you grant Savv8 a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with the Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 7 */}
          <section id="limitation-of-liability">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  7. Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Disclaimer</p>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAVV8 SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                  </p>
                  <p className="mt-4">
                    Our total liability to you for all claims arising from or relating to the Service shall not exceed the amount you paid to us, if any, in the twelve (12) months prior to the claim.
                  </p>
                  <p className="font-semibold mt-6">Third-Party Links</p>
                  <p>
                    The Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="changes-to-terms">
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  8. Changes to Terms
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  </p>
                  <p>
                    By continuing to access or use our Service after revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you must stop using the Service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Sections */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  9. Governing Law
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  10. Contact Us
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li>Email: legal@savv8.com</li>
                    <li>Address: Savv8 Ltd, London, United Kingdom</li>
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
                Your Trust Matters
              </h3>
              <p className="text-gray-700 mb-6">
                We're committed to providing a safe and transparent platform for discovering amazing deals.
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

export default TermsOfService;
