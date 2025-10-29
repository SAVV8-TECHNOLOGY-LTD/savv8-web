import { 
  BlogPost, 
  RelatedPost,
  blogPosts,
  relatedPosts,
  getFeaturedPost,
  getRegularPosts,
  getPostById,
  getPostsByCategory,
  getRelatedPosts
} from "@/constants/blogData";
import { ApiResponse, PaginatedResponse, QueryOptions, IDataSource } from "./types";

export interface BlogFilters {
  category?: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
  dateFrom?: string;
  dateTo?: string;
  [key: string]: string | string[] | boolean | undefined;
}

export interface BlogQueryOptions extends Omit<QueryOptions, 'filters'> {
  filters?: BlogFilters;
}

class BlogDataSource implements IDataSource {
  name = "BlogDataSource";
  isConnected = true;

  async connect(): Promise<void> {
    // Simulate connection - in real DB implementation, this would establish connection
    this.isConnected = true;
  }

  async disconnect(): Promise<void> {
    this.isConnected = false;
  }

  async healthCheck(): Promise<boolean> {
    return this.isConnected && blogPosts.length > 0;
  }

  // Get all blog posts with pagination and filtering
  async getAllPosts(options: BlogQueryOptions = {}): Promise<PaginatedResponse<BlogPost>> {
    try {
      let filteredPosts = [...blogPosts];

      // Apply filters
      if (options.filters) {
        const { category, author, tags, featured, dateFrom, dateTo } = options.filters;

        if (category) {
          filteredPosts = filteredPosts.filter(post => 
            post.category.toLowerCase() === category.toLowerCase()
          );
        }

        if (author) {
          filteredPosts = filteredPosts.filter(post => 
            post.author.toLowerCase().includes(author.toLowerCase())
          );
        }

        if (tags && tags.length > 0) {
          filteredPosts = filteredPosts.filter(post => 
            post.tags?.some(tag => tags.includes(tag))
          );
        }

        if (featured !== undefined) {
          filteredPosts = filteredPosts.filter(post => post.featured === featured);
        }

        if (dateFrom) {
          filteredPosts = filteredPosts.filter(post => 
            new Date(post.date) >= new Date(dateFrom)
          );
        }

        if (dateTo) {
          filteredPosts = filteredPosts.filter(post => 
            new Date(post.date) <= new Date(dateTo)
          );
        }
      }

      // Apply sorting
      if (options.sortBy) {
        filteredPosts.sort((a, b) => {
          let aValue: string | number | Date;
          let bValue: string | number | Date;

          switch (options.sortBy) {
            case 'date':
              aValue = new Date(a.date);
              bValue = new Date(b.date);
              break;
            case 'title':
              aValue = a.title.toLowerCase();
              bValue = b.title.toLowerCase();
              break;
            case 'author':
              aValue = a.author.toLowerCase();
              bValue = b.author.toLowerCase();
              break;
            case 'category':
              aValue = a.category.toLowerCase();
              bValue = b.category.toLowerCase();
              break;
            default:
              aValue = a.title.toLowerCase();
              bValue = b.title.toLowerCase();
          }

          if (aValue < bValue) return options.sortOrder === 'desc' ? 1 : -1;
          if (aValue > bValue) return options.sortOrder === 'desc' ? -1 : 1;
          return 0;
        });
      }

      // Apply pagination
      const page = options.page || 1;
      const limit = options.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

      return {
        data: paginatedPosts,
        pagination: {
          page,
          limit,
          total: filteredPosts.length,
          totalPages: Math.ceil(filteredPosts.length / limit)
        },
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch blog posts: ${error}`);
    }
  }

  // Get featured post
  async getFeaturedPost(): Promise<ApiResponse<BlogPost | null>> {
    try {
      const featuredPost = getFeaturedPost();
      return {
        data: featuredPost || null,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch featured post: ${error}`);
    }
  }

  // Get regular posts (non-featured)
  async getRegularPosts(options: BlogQueryOptions = {}): Promise<PaginatedResponse<BlogPost>> {
    try {
      const regularPosts = getRegularPosts();
      
      // Use the getAllPosts method but filter out featured posts
      const allPostsResponse = await this.getAllPosts({
        ...options,
        filters: { ...options.filters, featured: false }
      });

      return allPostsResponse;
    } catch (error) {
      throw new Error(`Failed to fetch regular posts: ${error}`);
    }
  }

  // Get post by ID
  async getPostById(id: string): Promise<ApiResponse<BlogPost | null>> {
    try {
      const post = getPostById(id);
      return {
        data: post || null,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch post with ID ${id}: ${error}`);
    }
  }

  // Get posts by category
  async getPostsByCategory(category: string, options: QueryOptions = {}): Promise<PaginatedResponse<BlogPost>> {
    try {
      return await this.getAllPosts({
        ...options,
        filters: { category }
      });
    } catch (error) {
      throw new Error(`Failed to fetch posts for category ${category}: ${error}`);
    }
  }

  // Get related posts
  async getRelatedPosts(currentPostId: string, count: number = 3): Promise<ApiResponse<RelatedPost[]>> {
    try {
      const related = getRelatedPosts(currentPostId, count);
      return {
        data: related,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch related posts: ${error}`);
    }
  }

  // Get all categories
  async getCategories(): Promise<ApiResponse<string[]>> {
    try {
      const categories = [...new Set(blogPosts.map(post => post.category))];
      return {
        data: categories,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch categories: ${error}`);
    }
  }

  // Get all authors
  async getAuthors(): Promise<ApiResponse<string[]>> {
    try {
      const authors = [...new Set(blogPosts.map(post => post.author))];
      return {
        data: authors,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch authors: ${error}`);
    }
  }

  // Get all tags
  async getTags(): Promise<ApiResponse<string[]>> {
    try {
      const allTags = blogPosts.flatMap(post => post.tags || []);
      const uniqueTags = [...new Set(allTags)];
      return {
        data: uniqueTags,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch tags: ${error}`);
    }
  }

  // Search posts
  async searchPosts(query: string, options: QueryOptions = {}): Promise<PaginatedResponse<BlogPost>> {
    try {
      const searchTerms = query.toLowerCase().split(' ');
      
      const searchResults = blogPosts.filter(post => {
        const searchableText = `
          ${post.title} 
          ${post.excerpt} 
          ${post.content || ''} 
          ${post.author} 
          ${post.category}
          ${post.tags?.join(' ') || ''}
        `.toLowerCase();

        return searchTerms.every(term => searchableText.includes(term));
      });

      // Apply pagination to search results
      const page = options.page || 1;
      const limit = options.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedResults = searchResults.slice(startIndex, endIndex);

      return {
        data: paginatedResults,
        pagination: {
          page,
          limit,
          total: searchResults.length,
          totalPages: Math.ceil(searchResults.length / limit)
        },
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to search posts: ${error}`);
    }
  }
}

// Export singleton instance
export const blogDataSource = new BlogDataSource();