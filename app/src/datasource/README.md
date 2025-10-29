# Savv8 Data Source Layer

A comprehensive data source layer that acts as an interface between the Savv8 web application and data storage. Currently connects to the constants folder but designed to easily migrate to a real database.

## Overview

This data source layer provides:
- **Consistent API**: All data access follows the same patterns
- **Type Safety**: Full TypeScript support with comprehensive interfaces
- **React Integration**: Custom hooks for seamless component integration
- **Caching**: Built-in caching with TanStack Query
- **Error Handling**: Robust error handling and loading states
- **Future-Proof**: Easy migration path to real database

## Architecture

```
src/
├── datasource/
│   ├── types.ts                    # Common types and interfaces
│   ├── blogDataSource.ts          # Blog post data operations
│   ├── userCategoryDataSource.ts  # User category operations
│   ├── legalDataSource.ts         # Legal content operations
│   ├── brandDataSource.ts         # Brand/partner operations
│   └── index.ts                   # Main data manager
├── hooks/
│   └── useDataSource.ts           # React hooks for data access
└── constants/                     # Current data storage
    ├── blogData.ts
    ├── userCategories.ts
    ├── legalContent.ts
    └── brandData.ts
```

## Data Sources

### 1. Blog Data Source
Manages blog posts, categories, authors, and related content.

**Available Methods:**
- `getAllPosts(options)` - Get paginated blog posts with filtering
- `getFeaturedPost()` - Get the featured blog post
- `getPostById(id)` - Get specific blog post
- `getPostsByCategory(category)` - Get posts by category
- `getRelatedPosts(postId, count)` - Get related posts
- `searchPosts(query)` - Search blog content
- `getCategories()` - Get all blog categories
- `getAuthors()` - Get all authors
- `getTags()` - Get all tags

### 2. User Category Data Source
Manages user categories and eligibility types.

**Available Methods:**
- `getAllCategories(filters)` - Get all user categories
- `getCategoryByValue(value)` - Get specific category
- `getPublicServiceCategories()` - Get public service categories
- `getBusinessCategories()` - Get business categories
- `getCategoriesForSelect()` - Get formatted for dropdowns
- `validateCategory(value)` - Validate category exists

### 3. Legal Data Source
Manages legal pages and contact support content.

**Available Methods:**
- `getPrivacyPolicy()` - Get privacy policy content
- `getTermsOfService()` - Get terms of service
- `getCookiePolicy()` - Get cookie policy
- `getContactSupport()` - Get contact support information
- `getLegalPage(type)` - Get any legal page by type
- `searchLegalContent(query)` - Search across legal content
- `getFAQ(searchTerm)` - Get FAQ items

### 4. Brand Data Source
Manages partner brands and statistics.

**Available Methods:**
- `getAllBrands(options)` - Get paginated brands with filtering
- `getBrandsByCategory(category)` - Get brands by category
- `getRandomBrands(count)` - Get random brands
- `getBrandByName(name)` - Get specific brand
- `getBrandsForCarousel()` - Get brands for homepage carousel
- `searchBrands(query)` - Search brands
- `getBrandStats()` - Get brand statistics

## React Hooks

### Blog Hooks
```tsx
import { useBlogPosts, useFeaturedPost, useBlogPost } from '@/hooks/useDataSource';

// Get paginated blog posts
const { data, isLoading, error } = useBlogPosts({ 
  page: 1, 
  limit: 10,
  filters: { category: 'Technology' }
});

// Get featured post
const { data: featuredPost } = useFeaturedPost();

// Get specific post
const { data: post } = useBlogPost('post-id');
```

### Brand Hooks
```tsx
import { useBrandsForCarousel, useBrandStats } from '@/hooks/useDataSource';

// Get brands for homepage carousel
const { data: brands, isLoading } = useBrandsForCarousel();

// Get brand statistics
const { data: stats } = useBrandStats();
```

### User Category Hooks
```tsx
import { useUserCategories, useCategoriesForSelect } from '@/hooks/useDataSource';

// Get all categories
const { data: categories } = useUserCategories();

// Get categories formatted for select dropdown
const { data: selectOptions } = useCategoriesForSelect();
```

### Legal Hooks
```tsx
import { usePrivacyPolicy, useContactSupport } from '@/hooks/useDataSource';

// Get legal content
const { data: privacyPolicy } = usePrivacyPolicy();
const { data: contactInfo } = useContactSupport();
```

## Usage Examples

### Basic Component Usage
```tsx
import React from 'react';
import { useBlogPosts, useBrandsForCarousel } from '@/hooks/useDataSource';

const ExampleComponent = () => {
  const { data: posts, isLoading: postsLoading } = useBlogPosts({ limit: 5 });
  const { data: brands, isLoading: brandsLoading } = useBrandsForCarousel();

  if (postsLoading || brandsLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Recent Posts</h2>
      {posts?.data.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </article>
      ))}

      <h2>Partner Brands</h2>
      {brands?.data.map(brand => (
        <div key={brand.id}>{brand.name}</div>
      ))}
    </div>
  );
};
```

### Search Functionality
```tsx
import { useBlogSearch } from '@/hooks/useDataSource';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const { data: results, isLoading } = useBlogSearch(query, { limit: 10 });

  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search blog posts..."
      />
      {isLoading && <div>Searching...</div>}
      {results?.data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
```

### Form Integration
```tsx
import { useCategoriesForSelect } from '@/hooks/useDataSource';

const UserForm = () => {
  const { data: categories } = useCategoriesForSelect();

  return (
    <form>
      <select>
        {categories?.data.map(category => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </form>
  );
};
```

## Direct Data Source Access

For advanced use cases, you can access data sources directly:

```tsx
import dataManager from '@/datasource';

// Direct access
const blogPosts = await dataManager.blog.getAllPosts({ limit: 10 });
const brands = await dataManager.brands.getBrandsForCarousel();

// Health check
const health = await dataManager.healthCheck();
console.log('System health:', health.success);
```

## Migration to Real Database

When ready to migrate to a real database:

1. **Update Data Sources**: Replace the internal logic in each data source class
2. **Keep Interfaces**: All interfaces remain the same
3. **Update Connection**: Modify the `connect()` and `disconnect()` methods
4. **Add Authentication**: Implement authentication in the data manager
5. **Update Validation**: Add server-side validation

The React hooks and component code remain unchanged!

## Error Handling

All data sources include comprehensive error handling:

```tsx
const { data, isLoading, error } = useBlogPosts();

if (error) {
  return <div>Error loading posts: {error.message}</div>;
}

if (isLoading) {
  return <div>Loading...</div>;
}

// Handle data
```

## Caching Strategy

Data is cached using TanStack Query with smart cache times:

- **Blog posts**: 5-10 minutes
- **User categories**: 30 minutes
- **Legal content**: 1 hour
- **Brand data**: 15 minutes
- **Search results**: 2-5 minutes

## System Health Monitoring

Monitor data source health:

```tsx
import { useDataSourceHealth } from '@/hooks/useDataSource';

const SystemStatus = () => {
  const { data: health } = useDataSourceHealth();
  
  return (
    <div>
      Status: {health?.success ? 'All systems operational' : 'Issues detected'}
      {health?.data.map(source => (
        <div key={source.name}>
          {source.name}: {source.healthy ? '✅' : '❌'}
        </div>
      ))}
    </div>
  );
};
```

## Best Practices

1. **Use React Hooks**: Always use the provided hooks instead of direct data source access
2. **Handle Loading States**: Always handle `isLoading` and `error` states
3. **Cache Efficiently**: Use appropriate cache times for your use case
4. **Type Safety**: Always use the provided TypeScript types
5. **Error Boundaries**: Implement error boundaries for better UX

## Future Enhancements

- [ ] Real-time updates with WebSocket integration
- [ ] Optimistic updates for better UX
- [ ] Background sync capabilities
- [ ] Offline support with service workers
- [ ] Advanced caching strategies
- [ ] Performance monitoring and analytics