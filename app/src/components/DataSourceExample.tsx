import React from 'react';
import { 
  useBlogPosts, 
  useFeaturedPost, 
  useBrandsForCarousel,
  useUserCategories,
  useDataSourceHealth 
} from '@/hooks/useDataSource';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DataSourceExample: React.FC = () => {
  // Example usage of different data source hooks
  const { data: featuredPost, isLoading: featuredLoading } = useFeaturedPost();
  const { data: blogPosts, isLoading: postsLoading } = useBlogPosts({ 
    page: 1, 
    limit: 3 
  });
  const { data: brands, isLoading: brandsLoading } = useBrandsForCarousel();
  const { data: categories, isLoading: categoriesLoading } = useUserCategories();
  const { data: health, isLoading: healthLoading } = useDataSourceHealth();

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Data Source Example</h1>
      
      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle>System Health</CardTitle>
        </CardHeader>
        <CardContent>
          {healthLoading ? (
            <Skeleton className="h-4 w-full" />
          ) : health?.success ? (
            <div className="space-y-2">
              <Badge variant="outline" className="bg-green-50 text-green-700">
                All Systems Operational
              </Badge>
              <div className="text-sm text-muted-foreground">
                {health.data?.map(ds => (
                  <div key={ds.name} className="flex justify-between">
                    <span>{ds.name}</span>
                    <Badge variant={ds.healthy ? "default" : "destructive"}>
                      {ds.healthy ? "Healthy" : "Unhealthy"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Alert>
              <AlertDescription>
                Some data sources are experiencing issues
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Featured Blog Post */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          {featuredLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : featuredPost?.data ? (
            <div>
              <h3 className="font-semibold">{featuredPost.data.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {featuredPost.data.excerpt}
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">{featuredPost.data.category}</Badge>
                <Badge variant="outline">{featuredPost.data.readTime}</Badge>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No featured post available</p>
          )}
        </CardContent>
      </Card>

      {/* Recent Blog Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {postsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))}
            </div>
          ) : blogPosts?.data ? (
            <div className="space-y-3">
              {blogPosts.data.map(post => (
                <div key={post.id} className="border-b pb-2 last:border-b-0">
                  <h4 className="font-medium text-sm">{post.title}</h4>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      by {post.author}
                    </span>
                  </div>
                </div>
              ))}
              <div className="text-xs text-muted-foreground mt-2">
                Showing {blogPosts.data.length} of {blogPosts.pagination.total} posts
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No blog posts available</p>
          )}
        </CardContent>
      </Card>

      {/* Partner Brands */}
      <Card>
        <CardHeader>
          <CardTitle>Partner Brands</CardTitle>
        </CardHeader>
        <CardContent>
          {brandsLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          ) : brands?.data ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {brands.data.slice(0, 8).map(brand => (
                  <div key={brand.id} className="text-center p-2 border rounded">
                    <div className="text-sm font-medium">{brand.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {brand.category}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                {brands.data.length} partner brands available
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No brands available</p>
          )}
        </CardContent>
      </Card>

      {/* User Categories */}
      <Card>
        <CardHeader>
          <CardTitle>User Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {categoriesLoading ? (
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-6 w-32" />
              ))}
            </div>
          ) : categories?.data ? (
            <div className="flex flex-wrap gap-2">
              {categories.data.map(category => (
                <Badge key={category.value} variant="outline">
                  {category.label}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No categories available</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DataSourceExample;