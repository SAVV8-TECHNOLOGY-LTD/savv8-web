import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Cookie, Settings, AlertCircle, Shield, ToggleLeft } from "lucide-react";

const CookiePolicy = () => {
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
              <Cookie className="w-8 h-8 text-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Cookie Policy
              </h1>
              <p className="text-gray-600 mt-2">Last updated: December 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-[#c4ff61]/20">
          <CardContent className="p-6">
            <p className="text-gray-700">
              This Cookie Policy explains how Savv8 ("we", "us", or "our") uses cookies and similar technologies when you visit our website and mobile application. This policy provides information about what cookies are, the cookies we use, and how you can control them.
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
                  <Cookie className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    1. What Are Cookies?
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                  </p>
                  <p>
                    Cookies can be "persistent" or "session" cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
                    <li><strong>Persistent cookies:</strong> Remain on your device for a set period or until you delete them</li>
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
                  <Settings className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    2. Types of Cookies We Use
                  </h2>
                </div>
                <div className="space-y-6 text-gray-700">
                  {/* Essential Cookies */}
                  <div className="border-l-4 border-[#c4ff61] pl-4">
                    <h3 className="font-semibold text-lg text-black mb-2">Essential Cookies</h3>
                    <p className="mb-2">These cookies are necessary for the website to function properly.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Authentication and security</li>
                      <li>Session management</li>
                      <li>Load balancing</li>
                      <li>Form submission</li>
                    </ul>
                    <p className="text-sm mt-2 italic">These cookies cannot be disabled.</p>
                  </div>

                  {/* Performance Cookies */}
                  <div className="border-l-4 border-[#d7ff94] pl-4">
                    <h3 className="font-semibold text-lg text-black mb-2">Performance & Analytics Cookies</h3>
                    <p className="mb-2">These cookies help us understand how visitors interact with our website.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Google Analytics - tracks user behavior and website performance</li>
                      <li>Hotjar - heatmaps and session recordings</li>
                      <li>Page view tracking</li>
                      <li>Error reporting</li>
                    </ul>
                  </div>

                  {/* Functionality Cookies */}
                  <div className="border-l-4 border-[#b1ff2e] pl-4">
                    <h3 className="font-semibold text-lg text-black mb-2">Functionality Cookies</h3>
                    <p className="mb-2">These cookies enable enhanced functionality and personalization.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Remember your preferences (language, region)</li>
                      <li>Saved offers and favorites</li>
                      <li>Personalized content</li>
                      <li>User interface customization</li>
                    </ul>
                  </div>

                  {/* Targeting Cookies */}
                  <div className="border-l-4 border-[#eaffc7] pl-4">
                    <h3 className="font-semibold text-lg text-black mb-2">Targeting & Advertising Cookies</h3>
                    <p className="mb-2">These cookies track your browsing to show you relevant advertisements.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Facebook Pixel - retargeting campaigns</li>
                      <li>Google Ads - display advertising</li>
                      <li>Partner brand tracking pixels</li>
                      <li>Personalized offer recommendations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 3 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  3. Third-Party Cookies
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We use several third-party services that may set cookies on your device:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Google Analytics</h4>
                      <p className="text-sm">Website analytics and user behavior tracking</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Facebook Pixel</h4>
                      <p className="text-sm">Advertising and retargeting campaigns</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Google Ads</h4>
                      <p className="text-sm">Display advertising and conversion tracking</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold mb-2">Hotjar</h4>
                      <p className="text-sm">Heatmaps and user experience analysis</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    These third parties may use cookies to collect information about your online activities across different websites. Please refer to their privacy policies for more information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <ToggleLeft className="w-6 h-6 text-[#b1ff2e]" />
                  <h2 className="text-2xl font-bold text-black">
                    4. How to Control Cookies
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Browser Settings</p>
                  <p>
                    Most web browsers allow you to control cookies through their settings. You can typically find cookie controls in the "Options" or "Preferences" menu of your browser.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 mt-4">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Important Note</p>
                      <p>
                        Blocking or deleting cookies may affect your ability to use certain features of our Service. Essential cookies cannot be disabled as they are necessary for the Service to function.
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold mt-6">Browser-Specific Instructions</p>
                  <div className="space-y-2 ml-4">
                    <p><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</p>
                    <p><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</p>
                    <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
                    <p><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</p>
                  </div>

                  <p className="font-semibold mt-6">Cookie Preference Center</p>
                  <p>
                    You can also manage your cookie preferences through our Cookie Preference Center, which appears when you first visit our website. You can access it at any time by clicking the "Cookie Settings" link in the footer.
                  </p>

                  <p className="font-semibold mt-6">Opt-Out of Third-Party Cookies</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#b1ff2e] hover:underline" target="_blank" rel="noopener noreferrer">Opt-out browser add-on</a></li>
                    <li>Facebook: <a href="https://www.facebook.com/help/568137493302217" className="text-[#b1ff2e] hover:underline" target="_blank" rel="noopener noreferrer">Ad preferences</a></li>
                    <li>Google Ads: <a href="https://adssettings.google.com" className="text-[#b1ff2e] hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  5. Mobile Application
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our mobile application may use similar technologies to cookies, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Local storage and cache</li>
                    <li>Device identifiers (advertising ID)</li>
                    <li>Analytics SDKs</li>
                    <li>Push notification tokens</li>
                  </ul>
                  <p className="mt-4">
                    You can control these through your device settings:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>iOS:</strong> Settings → Privacy → Tracking</li>
                    <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 6 */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  6. Do Not Track Signals
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals, and we do not respond to DNT signals at this time.
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
                  7. Updates to This Cookie Policy
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of any significant changes by posting the updated policy on our website with a new "Last updated" date.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section>
            <Card className="border-[#c4ff61]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">
                  8. Contact Us
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions about our use of cookies, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> privacy@savv8.com</li>
                    <li><strong>Address:</strong> Savv8 Ltd, London, United Kingdom</li>
                  </ul>
                  <p className="mt-4">
                    For more information about how we handle your data, please see our <Link to="/privacy-policy" className="text-[#b1ff2e] hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Cookie Table */}
        <div className="mt-8">
          <Card className="border-[#c4ff61]/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                Detailed Cookie List
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#eaffc7]">
                    <tr>
                      <th className="p-3 text-left font-semibold">Cookie Name</th>
                      <th className="p-3 text-left font-semibold">Type</th>
                      <th className="p-3 text-left font-semibold">Duration</th>
                      <th className="p-3 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-mono text-xs">savv8_session</td>
                      <td className="p-3">Essential</td>
                      <td className="p-3">Session</td>
                      <td className="p-3">Maintains user session</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">savv8_auth</td>
                      <td className="p-3">Essential</td>
                      <td className="p-3">30 days</td>
                      <td className="p-3">Authentication token</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">_ga</td>
                      <td className="p-3">Analytics</td>
                      <td className="p-3">2 years</td>
                      <td className="p-3">Google Analytics - user identification</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">_gid</td>
                      <td className="p-3">Analytics</td>
                      <td className="p-3">24 hours</td>
                      <td className="p-3">Google Analytics - session tracking</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">_fbp</td>
                      <td className="p-3">Advertising</td>
                      <td className="p-3">3 months</td>
                      <td className="p-3">Facebook Pixel - tracking</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">savv8_prefs</td>
                      <td className="p-3">Functionality</td>
                      <td className="p-3">1 year</td>
                      <td className="p-3">User preferences and settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Card className="border-[#c4ff61]/20 bg-gradient-to-br from-[#eaffc7] to-[#d7ff94]">
            <CardContent className="p-8">
              <Cookie className="w-12 h-12 mx-auto mb-4 text-[#b1ff2e]" />
              <h3 className="text-2xl font-bold text-black mb-2">
                Cookie Transparency
              </h3>
              <p className="text-gray-700 mb-6">
                We believe in being transparent about how we use cookies to improve your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#c4ff61] hover:bg-[#b1ff2e] text-black font-semibold">
                  Manage Cookie Preferences
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

export default CookiePolicy;
