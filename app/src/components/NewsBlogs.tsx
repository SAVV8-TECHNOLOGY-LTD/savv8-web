import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedPost, getRegularPosts } from "@/constants/blogData";

const NewsBlogs = () => {
  const featuredPost = getFeaturedPost();
  const regularPosts = getRegularPosts();

  return (
    <section className="py-24 bg-muted/30" id="news-blogs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Newspaper className="w-4 h-4" />
            <span className="text-sm font-medium">Stay Updated</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest updates, tips, and insights from the world of smart savings and AI-powered finance.
          </p>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-16 animate-fade-in-up">
            <Link to={`/blog/${featuredPost.id}`}>
              <Card className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-accent opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                          <User className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{featuredPost.author}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {featuredPost.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card 
                className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-accent opacity-10 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-muted-foreground px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-accent">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-2xl mx-auto border-accent/20 shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay in the Loop
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest insights, tips, and updates on smart savings and AI-powered finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="default" className="px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsBlogs;