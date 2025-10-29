import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import postImage from "@/assets/herosection.jpg" 

// This would typically come from an API or database
const blogPosts = [
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
    image: postImage,
    tags: ["AI", "Personal Finance", "Technology", "Innovation"]
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
    tags: ["Students", "Savings", "Discounts", "Budget"]
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
    image: postImage,
    tags: ["NHS", "Healthcare", "Benefits", "Discounts"]
  }
];

const relatedPosts = [
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
    image: postImage
  },
  {
    id: "6",
    title: "The Psychology of Saving: Why Personalization Matters", 
    category: "Psychology",
    readTime: "6 min read",
    image: postImage
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="default">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-primary-foreground/80 mb-6">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">{post.author}</p>
                  <p className="text-sm text-primary-foreground/80 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-64 sm:h-96 bg-gradient-accent/20 border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="border-border shadow-sm">
              <CardContent className="p-8 lg:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-accent/10 text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-ul:text-muted-foreground prose-li:text-muted-foreground
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                    prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <Separator className="my-12" />

                {/* Share Section */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-foreground font-medium">Share this article:</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4" />
                    Bookmark
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Author Info */}
            <Card className="border-border shadow-sm mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Author at Savv8</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about AI, innovation, and helping people save money through technology.
                </p>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16 rounded-lg bg-gradient-accent/20 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-tight mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{relatedPost.category}</span>
                            <span>•</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;