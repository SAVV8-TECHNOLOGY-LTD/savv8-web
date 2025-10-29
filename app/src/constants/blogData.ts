import postImage from "@/assets/herosection.jpg";
import ai_image from "@/assets/hero-ai-illustration.png";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags?: string[];
  featured?: boolean;
}

export interface RelatedPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI-Powered Personal Finance",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we save money and make financial decisions. From personalized recommendations to automated savings...",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is transforming every aspect of our lives, and personal finance is no exception. As we move into 2025, AI-powered financial tools are becoming more sophisticated, offering unprecedented levels of personalization and automation in how we manage our money.</p>
      
      <h2>The Current Landscape</h2>
      <p>Traditional financial apps have largely followed a one-size-fits-all approach. They provide generic advice and standard tools that may not align with individual spending patterns, income levels, or financial goals. This is where AI makes a revolutionary difference.</p>
      
      <h2>How AI Changes Everything</h2>
      <p>At Savv8, we've harnessed the power of machine learning algorithms to create truly personalized savings experiences. Our AI analyzes your spending patterns, lifestyle choices, and preferences to deliver offers and recommendations that are uniquely tailored to you.</p>
      
      <blockquote>
      <p>"The future of personal finance isn't about having more options – it's about having the right options at the right time." - Bernard Ayamboro, CEO of Savv8</p>
      </blockquote>
      
      <h2>Key Benefits of AI-Powered Finance</h2>
      <ul>
        <li><strong>Predictive Analytics:</strong> AI can predict your future spending needs and suggest savings strategies accordingly.</li>
        <li><strong>Real-time Optimization:</strong> Algorithms continuously learn from your behavior to improve recommendations.</li>
        <li><strong>Automated Decision Making:</strong> Smart systems can automatically apply discounts and find better deals without user intervention.</li>
        <li><strong>Risk Assessment:</strong> AI helps identify potential financial risks and suggests preventive measures.</li>
      </ul>
      
      <h2>The Savv8 Approach</h2>
      <p>Our platform goes beyond simple discount aggregation. We use advanced AI to understand your lifestyle, preferences, and financial goals. Whether you're a student looking for educational discounts, an NHS worker seeking healthcare benefits, or a professional optimizing corporate perks, our AI ensures you see only the most relevant opportunities.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of AI in personal finance is incredibly promising. We're moving towards a world where your financial assistant will be proactive, predictive, and perfectly aligned with your personal goals. At Savv8, we're excited to be at the forefront of this transformation.</p>
      
      <h2>Conclusion</h2>
      <p>As AI technology continues to evolve, the possibilities for personal finance innovation are limitless. The key is ensuring that these powerful tools remain accessible, transparent, and truly beneficial for everyday users. That's the vision we're working towards at Savv8.</p>
    `,
    author: "Bernard Ayamboro",
    date: "October 25, 2025",
    category: "Technology",
    readTime: "5 min read",
    image: ai_image,
    tags: ["AI", "Personal Finance", "Technology", "Innovation"],
    featured: true
  },
  {
    id: "2",
    title: "Student Savings Guide: Making Every Pound Count",
    excerpt: "Essential tips and strategies for students to maximize their savings while studying. Learn about exclusive student discounts and smart spending habits...",
    content: `
      <h2>Introduction</h2>
      <p>Being a student means making every pound stretch as far as possible. With tuition fees, accommodation costs, and living expenses, financial management becomes crucial for academic success and personal wellbeing.</p>
      
      <h2>Understanding Student Discounts</h2>
      <p>Student discounts are one of the most underutilized resources available to university students. From technology and textbooks to food and entertainment, there are savings opportunities everywhere.</p>
      
      <h2>Essential Saving Strategies</h2>
      <ul>
        <li><strong>Budget Tracking:</strong> Use apps to monitor your spending patterns</li>
        <li><strong>Meal Planning:</strong> Reduce food costs with strategic shopping and cooking</li>
        <li><strong>Textbook Alternatives:</strong> Explore digital options, library resources, and second-hand books</li>
        <li><strong>Transportation:</strong> Take advantage of student travel cards and bike schemes</li>
      </ul>
      
      <h2>Technology and Software Savings</h2>
      <p>Many software companies offer significant discounts for students. From productivity suites to creative software, these savings can add up to hundreds of pounds per year.</p>
      
      <h2>The Savv8 Student Experience</h2>
      <p>Our AI specifically learns student spending patterns and preferences, ensuring you never miss out on relevant discounts. Whether it's for study materials, food delivery, or entertainment, Savv8 helps students save smarter.</p>
    `,
    author: "Chloe Nunn",
    date: "October 22, 2025",
    category: "Savings Tips",
    readTime: "7 min read",
    image: postImage,
    tags: ["Students", "Savings", "Discounts", "Budget"],
    featured: false
  },
  {
    id: "3",
    title: "NHS Workers: Exclusive Benefits You Might Be Missing",
    excerpt: "A comprehensive guide to all the special discounts and benefits available to NHS workers. From retail savings to wellness programs...",
    content: `
      <h2>Recognizing Our Healthcare Heroes</h2>
      <p>NHS workers deserve recognition for their incredible service, especially after the challenges of recent years. Many companies offer exclusive benefits and discounts as a way to show appreciation.</p>
      
      <h2>Types of NHS Benefits Available</h2>
      <ul>
        <li><strong>Retail Discounts:</strong> Many major retailers offer NHS-specific savings</li>
        <li><strong>Wellness Programs:</strong> Health and fitness discounts for healthcare workers</li>
        <li><strong>Technology Savings:</strong> Special rates on devices and software</li>
        <li><strong>Travel Benefits:</strong> Reduced rates for holidays and transportation</li>
      </ul>
      
      <h2>How to Access These Benefits</h2>
      <p>The key is proper verification and knowing where to look. Many NHS workers miss out simply because they're unaware of available programs or find the verification process too complex.</p>
      
      <h2>Savv8's NHS Worker Support</h2>
      <p>Our platform automatically identifies and verifies NHS workers, presenting them with a curated selection of relevant benefits and discounts. No more searching through countless websites or complex verification processes.</p>
    `,
    author: "Savv8 Team",
    date: "October 20, 2025",
    category: "Benefits",
    readTime: "6 min read",
    image: ai_image,
    tags: ["NHS", "Healthcare", "Benefits", "Discounts"],
    featured: false
  },
  {
    id: "4",
    title: "Corporate Partnerships: How Savv8 is Changing Employee Benefits",
    excerpt: "Learn how companies are partnering with Savv8 to provide better employee benefits and savings opportunities. The future of workplace perks...",
    content: `
      <h2>Transforming Employee Benefits</h2>
      <p>The workplace benefits landscape is evolving rapidly. Companies are looking beyond traditional benefits packages to provide real value to their employees through innovative partnerships and personalized savings opportunities.</p>
      
      <h2>The Partnership Advantage</h2>
      <p>When companies partner with Savv8, they're not just offering another discount program. They're providing their employees with AI-powered personalization that learns and adapts to individual preferences and needs.</p>
      
      <h2>Real-World Impact</h2>
      <p>Our corporate partners have seen significant improvements in employee satisfaction and engagement. When employees can save money on the things they actually care about, it creates a more meaningful benefit experience.</p>
      
      <h2>Getting Started</h2>
      <p>Companies interested in partnering with Savv8 can start with a simple integration that provides immediate value to their workforce while gathering insights for future improvements.</p>
    `,
    author: "Bernard Ayamboro",
    date: "October 18, 2025",
    category: "Business",
    readTime: "4 min read",
    image: postImage,
    tags: ["Business", "Partnerships", "Employee Benefits", "Corporate"],
    featured: false
  },
  {
    id: "5",
    title: "Smart Shopping: 10 AI Tips for Better Deals",
    excerpt: "Discover how artificial intelligence can help you find better deals and save money on everyday purchases. Expert tips from the Savv8 team...",
    content: `
      <h2>The AI Shopping Revolution</h2>
      <p>Artificial intelligence is changing how we shop and save money. From price predictions to personalized recommendations, AI tools are making it easier than ever to find the best deals.</p>
      
      <h2>Top 10 AI Shopping Tips</h2>
      <ol>
        <li><strong>Price Tracking:</strong> Use AI to monitor price changes and predict the best time to buy</li>
        <li><strong>Personalized Recommendations:</strong> Let algorithms learn your preferences for better suggestions</li>
        <li><strong>Smart Comparison:</strong> AI can compare not just prices but quality and value</li>
        <li><strong>Timing Optimization:</strong> Algorithms can predict seasonal sales and optimal purchase timing</li>
        <li><strong>Cashback Maximization:</strong> AI can automatically apply the best cashback offers</li>
        <li><strong>Bundle Detection:</strong> Smart systems can identify when bundling saves money</li>
        <li><strong>Quality Assessment:</strong> AI reviews can help assess product quality beyond ratings</li>
        <li><strong>Alternative Suggestions:</strong> Get recommendations for similar but cheaper products</li>
        <li><strong>Loyalty Optimization:</strong> Maximize rewards across multiple loyalty programs</li>
        <li><strong>Future Planning:</strong> AI can help plan purchases for maximum savings</li>
      </ol>
      
      <h2>The Savv8 Advantage</h2>
      <p>At Savv8, we've integrated all these AI capabilities into a single platform that learns from your behavior and preferences to deliver personalized savings opportunities that matter to you.</p>
    `,
    author: "Chloe Nunn",
    date: "October 15, 2025",
    category: "Tips & Tricks",
    readTime: "8 min read",
    image: ai_image,
    tags: ["AI", "Shopping", "Tips", "Deals", "Technology"],
    featured: false
  },
  {
    id: "6",
    title: "The Psychology of Saving: Why Personalization Matters",
    excerpt: "Understanding the behavioral science behind effective saving strategies and how personalized approaches lead to better financial outcomes...",
    content: `
      <h2>The Science of Saving</h2>
      <p>Saving money isn't just about mathematics—it's about psychology. Understanding the behavioral factors that influence our spending and saving decisions is crucial for developing effective financial strategies.</p>
      
      <h2>The Personalization Factor</h2>
      <p>Generic financial advice rarely works because everyone's relationship with money is different. What motivates one person to save might have the opposite effect on another.</p>
      
      <h2>Behavioral Insights</h2>
      <ul>
        <li><strong>Loss Aversion:</strong> People feel the pain of losing money more than the pleasure of gaining it</li>
        <li><strong>Present Bias:</strong> We tend to overvalue immediate rewards vs. future benefits</li>
        <li><strong>Choice Overload:</strong> Too many options can lead to decision paralysis</li>
        <li><strong>Social Proof:</strong> We're influenced by what others are doing</li>
      </ul>
      
      <h2>Applying Psychology to Savings</h2>
      <p>By understanding these psychological principles, we can design savings strategies that work with human nature rather than against it. This is where AI-powered personalization becomes powerful.</p>
      
      <h2>The Savv8 Approach</h2>
      <p>Our platform uses behavioral science principles to present savings opportunities in ways that resonate with each individual user's psychological profile and preferences.</p>
    `,
    author: "Savv8 Team",
    date: "October 12, 2025",
    category: "Psychology",
    readTime: "6 min read",
    image: postImage,
    tags: ["Psychology", "Behavioral Science", "Savings", "Personalization"],
    featured: false
  }
];

export const relatedPosts: RelatedPost[] = [
  {
    id: "4",
    title: "Corporate Partnerships: How Savv8 is Changing Employee Benefits",
    category: "Business",
    readTime: "4 min read",
    image: postImage
  },
  {
    id: "5", 
    title: "Smart Shopping: 10 AI Tips for Better Deals",
    category: "Tips & Tricks",
    readTime: "8 min read", 
    image: ai_image
  },
  {
    id: "6",
    title: "The Psychology of Saving: Why Personalization Matters", 
    category: "Psychology",
    readTime: "6 min read",
    image: postImage
  }
];

// Helper functions
export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find(post => post.featured);
};

export const getRegularPosts = (): BlogPost[] => {
  return blogPosts.filter(post => !post.featured);
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getRelatedPosts = (currentPostId: string, count: number = 3): RelatedPost[] => {
  return relatedPosts.filter(post => post.id !== currentPostId).slice(0, count);
};