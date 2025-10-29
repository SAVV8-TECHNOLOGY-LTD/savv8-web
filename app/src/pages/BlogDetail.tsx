import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPostById, getRelatedPosts } from "@/constants/blogData"; 

const BlogDetail = () => {
  const { id } = useParams();
  const post = getPostById(id || "");
  const relatedPosts = getRelatedPosts(id || "", 3);

  if (!post) {
    return (
      <div className="flex items-center justify-center py-24">
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
    <div className="bg-background">
      {/* Featured Image */}
      <div className="relative  h-[310px] md:h-[450px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        
        {/* Header Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 pt-20 sm:pt-24">
            
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
                <span className="bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-white/90">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">{post.author}</p>
                    <p className="text-xs sm:text-sm text-white/80 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 order-1">
            <Card className="border-border shadow-sm">
              <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {post.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-accent/10 text-muted-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Content */}
                <div 
                  className="prose prose-sm sm:prose-base lg:prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold prose-headings:text-lg prose-headings:sm:text-xl prose-headings:lg:text-2xl
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-sm prose-p:sm:text-base
                    prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-li:text-sm prose-li:sm:text-base
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:p-3 prose-blockquote:sm:p-4 prose-blockquote:rounded-r-lg prose-blockquote:text-sm prose-blockquote:sm:text-base
                    prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                <Separator className="my-8 sm:my-12" />

                {/* Share Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <span className="text-foreground font-medium text-sm sm:text-base">Share this article:</span>
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
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Bookmark className="w-4 h-4" />
                    <span className="ml-2">Bookmark</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Author Info */}
            <Card className="border-border shadow-sm mb-6 sm:mb-8">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">About the Author</h3>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm sm:text-base">{post.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Author at Savv8</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Passionate about AI, innovation, and helping people save money through technology.
                </p>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Related Articles</h3>
                <div className="space-y-3 sm:space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="flex gap-2 sm:gap-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-accent/20 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-tight mb-1 sm:mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-1 sm:gap-2 text-xs text-muted-foreground">
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