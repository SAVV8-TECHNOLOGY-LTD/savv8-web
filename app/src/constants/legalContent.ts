export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const privacyPolicyContent: LegalPage = {
  title: "Privacy Policy",
  lastUpdated: "October 29, 2025",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      content: `
        <p>At Savv8 Technology Ltd ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our services.</p>
        <p>By using Savv8, you consent to the collection and use of your information as described in this Privacy Policy.</p>
      `
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: `
        <h3>Personal Information</h3>
        <ul>
          <li>Name and contact information (email address, phone number)</li>
          <li>User category information (student, NHS worker, etc.)</li>
          <li>Account credentials and profile information</li>
        </ul>
        <h3>Usage Information</h3>
        <ul>
          <li>How you interact with our platform</li>
          <li>Preferences and settings</li>
          <li>Device information and IP addresses</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
        <h3>Financial Information</h3>
        <ul>
          <li>Spending patterns and preferences (anonymized)</li>
          <li>Savings goals and targets</li>
          <li>Transaction history related to offers used through our platform</li>
        </ul>
      `
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      content: `
        <p>We use your information to:</p>
        <ul>
          <li>Provide personalized savings recommendations using AI</li>
          <li>Verify your eligibility for specific discounts and offers</li>
          <li>Improve our services and develop new features</li>
          <li>Communicate with you about updates, offers, and important information</li>
          <li>Ensure platform security and prevent fraud</li>
          <li>Comply with legal obligations and resolve disputes</li>
        </ul>
      `
    },
    {
      id: "ai-and-personalization",
      title: "AI and Personalization",
      content: `
        <p>Savv8 uses artificial intelligence to analyze your preferences and behavior to provide personalized savings opportunities. This includes:</p>
        <ul>
          <li>Machine learning algorithms that learn from your interactions</li>
          <li>Predictive analytics to suggest relevant offers</li>
          <li>Automated systems to apply the best available discounts</li>
        </ul>
        <p>All AI processing is designed to benefit you while maintaining your privacy and data security.</p>
      `
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      content: `
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Partner retailers and service providers</strong> to verify eligibility and apply discounts</li>
          <li><strong>Service providers</strong> who help us operate our platform (cloud hosting, analytics, customer support)</li>
          <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
        </ul>
        <p>We never sell your personal information to third parties for marketing purposes.</p>
      `
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `
        <p>We implement industry-standard security measures to protect your data:</p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security audits and penetration testing</li>
          <li>Access controls and employee training</li>
          <li>Secure cloud infrastructure with reputable providers</li>
        </ul>
      `
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: `
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate or incomplete data</li>
          <li>Delete your data (right to be forgotten)</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, contact us at privacy@savv8.com.</p>
      `
    },
    {
      id: "contact",
      title: "Contact Information",
      content: `
        <p>If you have questions about this Privacy Policy or our data practices, contact us:</p>
        <p><strong>Savv8 Technology Ltd</strong><br>
        Email: privacy@savv8.com<br>
        Address: [Company Address]<br>
        Data Protection Officer: dpo@savv8.com</p>
      `
    }
  ]
};

export const termsOfServiceContent: LegalPage = {
  title: "Terms of Service",
  lastUpdated: "October 29, 2025",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `
        <p>By accessing or using Savv8's services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.</p>
        <p>These Terms constitute a legally binding agreement between you and Savv8 Technology Ltd.</p>
      `
    },
    {
      id: "description-of-service",
      title: "Description of Service",
      content: `
        <p>Savv8 is an AI-powered savings platform that provides:</p>
        <ul>
          <li>Personalized discount and savings recommendations</li>
          <li>Automated application of available offers</li>
          <li>Category-specific benefits (student, NHS, corporate, etc.)</li>
          <li>Financial insights and savings tracking</li>
        </ul>
        <p>Our service is currently in development and features may change or be added over time.</p>
      `
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      content: `
        <p>As a user of Savv8, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Use the service only for lawful purposes</li>
          <li>Not attempt to circumvent security measures</li>
          <li>Not misrepresent your eligibility for specific discounts</li>
          <li>Comply with all applicable laws and regulations</li>
        </ul>
      `
    },
    {
      id: "eligibility-verification",
      title: "Eligibility Verification",
      content: `
        <p>Certain offers and discounts require verification of eligibility (e.g., student status, NHS employment). You agree that:</p>
        <ul>
          <li>We may verify your eligibility through third-party services</li>
          <li>Misrepresenting your eligibility may result in account termination</li>
          <li>Verification requirements may change based on partner requirements</li>
        </ul>
      `
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `
        <p>All content, features, and functionality of Savv8 are owned by Savv8 Technology Ltd and are protected by copyright, trademark, and other intellectual property laws.</p>
        <p>You may not reproduce, distribute, or create derivative works without our express written permission.</p>
      `
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content: `
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>Savv8 provides services "as is" without warranties</li>
          <li>We are not liable for indirect, incidental, or consequential damages</li>
          <li>Our total liability is limited to the amount you paid us in the preceding 12 months</li>
          <li>We are not responsible for the availability or terms of third-party offers</li>
        </ul>
      `
    },
    {
      id: "termination",
      title: "Termination",
      content: `
        <p>Either party may terminate this agreement at any time. We may suspend or terminate your account if you violate these Terms.</p>
        <p>Upon termination, your right to use the service ceases immediately, but these Terms continue to apply to any prior use.</p>
      `
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: `
        <p>These Terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of England and Wales.</p>
      `
    }
  ]
};

export const cookiePolicyContent: LegalPage = {
  title: "Cookie Policy",
  lastUpdated: "October 29, 2025",
  sections: [
    {
      id: "what-are-cookies",
      title: "What Are Cookies",
      content: `
        <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.</p>
      `
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We Use",
      content: `
        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
        <ul>
          <li>Authentication and security cookies</li>
          <li>Session management cookies</li>
          <li>Load balancing cookies</li>
        </ul>
        
        <h3>Performance Cookies</h3>
        <p>These cookies help us understand how visitors interact with our website.</p>
        <ul>
          <li>Google Analytics</li>
          <li>Page performance monitoring</li>
          <li>Error tracking</li>
        </ul>
        
        <h3>Functional Cookies</h3>
        <p>These cookies enable enhanced functionality and personalization.</p>
        <ul>
          <li>User preferences</li>
          <li>Language settings</li>
          <li>Personalization data</li>
        </ul>
        
        <h3>Marketing Cookies</h3>
        <p>These cookies track your activity to deliver relevant advertisements.</p>
        <ul>
          <li>Advertising platform cookies</li>
          <li>Social media integration</li>
          <li>Campaign tracking</li>
        </ul>
      `
    },
    {
      id: "managing-cookies",
      title: "Managing Cookies",
      content: `
        <p>You can control and manage cookies in several ways:</p>
        <ul>
          <li>Use our cookie consent banner when you first visit</li>
          <li>Update your preferences in your account settings</li>
          <li>Configure your browser settings to block or delete cookies</li>
          <li>Use browser extensions for cookie management</li>
        </ul>
        <p>Note that disabling certain cookies may affect the functionality of our service.</p>
      `
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      content: `
        <p>We use third-party services that may set their own cookies:</p>
        <ul>
          <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
          <li><strong>Partner retailers:</strong> For offer verification and tracking</li>
          <li><strong>Social media platforms:</strong> For social sharing features</li>
          <li><strong>Customer support tools:</strong> For chat and help functionality</li>
        </ul>
        <p>These third parties have their own privacy policies governing their use of cookies.</p>
      `
    },
    {
      id: "updates",
      title: "Updates to This Policy",
      content: `
        <p>We may update this Cookie Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.</p>
      `
    }
  ]
};

export const contactSupportContent = {
  title: "Contact Support",
  subtitle: "Get help with your Savv8 account and services",
  sections: [
    {
      id: "general-support",
      title: "General Support",
      description: "For general questions about Savv8 and how to use our platform",
      email: "support@savv8.com",
      expectedResponse: "Within 24 hours"
    },
    {
      id: "technical-issues",
      title: "Technical Issues",
      description: "Having trouble with the app or website? We're here to help",
      email: "tech@savv8.com",
      expectedResponse: "Within 12 hours"
    },
    {
      id: "account-issues",
      title: "Account & Billing",
      description: "Questions about your account, subscriptions, or billing",
      email: "accounts@savv8.com",
      expectedResponse: "Within 24 hours"
    },
    {
      id: "privacy-data",
      title: "Privacy & Data",
      description: "Data protection questions and privacy concerns",
      email: "privacy@savv8.com",
      expectedResponse: "Within 48 hours"
    },
    {
      id: "partnerships",
      title: "Business Partnerships",
      description: "Interested in partnering with Savv8 or corporate accounts",
      email: "partnerships@savv8.com",
      expectedResponse: "Within 3 business days"
    },
    {
      id: "press-media",
      title: "Press & Media",
      description: "Media inquiries and press requests",
      email: "press@savv8.com",
      expectedResponse: "Within 2 business days"
    }
  ],
  companyInfo: {
    name: "Savv8 Technology Ltd",
    address: "123 Innovation Street, London, E1 6AN",
    phone: "+44 20 1234 5678",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM GMT"
  },
  faq: [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions sent to your email."
    },
    {
      question: "How do I verify my student/NHS status?",
      answer: "During account setup, you'll be prompted to upload verification documents. We partner with trusted verification services to confirm your eligibility."
    },
    {
      question: "Why am I not seeing personalized offers?",
      answer: "Our AI needs time to learn your preferences. Continue using the platform and interacting with offers to improve personalization."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account from your account settings, or contact our support team at support@savv8.com."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level encryption and never store sensitive financial information. View our Privacy Policy for full details."
    }
  ]
};