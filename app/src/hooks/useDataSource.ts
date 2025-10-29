import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import dataManager from '@/datasource';
import type { 
  BlogQueryOptions, 
  BrandQueryOptions, 
  UserCategoryFilters,
  LegalPageType
} from '@/datasource';

// Blog hooks
export const useBlogPosts = (options: BlogQueryOptions = {}) => {
  return useQuery({
    queryKey: ['blog', 'posts', options],
    queryFn: () => dataManager.blog.getAllPosts(options),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useFeaturedPost = () => {
  return useQuery({
    queryKey: ['blog', 'featured'],
    queryFn: () => dataManager.blog.getFeaturedPost(),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useBlogPost = (id: string) => {
  return useQuery({
    queryKey: ['blog', 'post', id],
    queryFn: () => dataManager.blog.getPostById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });
};

export const useRelatedPosts = (currentPostId: string, count: number = 3) => {
  return useQuery({
    queryKey: ['blog', 'related', currentPostId, count],
    queryFn: () => dataManager.blog.getRelatedPosts(currentPostId, count),
    enabled: !!currentPostId,
    staleTime: 15 * 60 * 1000,
  });
};

export const useBlogCategories = () => {
  return useQuery({
    queryKey: ['blog', 'categories'],
    queryFn: () => dataManager.blog.getCategories(),
    staleTime: 30 * 60 * 1000, // 30 minutes
  });
};

export const useBlogSearch = (query: string, options: BlogQueryOptions = {}) => {
  return useQuery({
    queryKey: ['blog', 'search', query, options],
    queryFn: () => dataManager.blog.searchPosts(query, options),
    enabled: query.length > 2, // Only search with 3+ characters
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// User Category hooks
export const useUserCategories = (filters?: UserCategoryFilters) => {
  return useQuery({
    queryKey: ['userCategories', 'all', filters],
    queryFn: () => dataManager.userCategories.getAllCategories(filters),
    staleTime: 30 * 60 * 1000,
  });
};

export const useUserCategory = (value: string) => {
  return useQuery({
    queryKey: ['userCategories', 'category', value],
    queryFn: () => dataManager.userCategories.getCategoryByValue(value),
    enabled: !!value,
    staleTime: 30 * 60 * 1000,
  });
};

export const usePublicServiceCategories = () => {
  return useQuery({
    queryKey: ['userCategories', 'publicService'],
    queryFn: () => dataManager.userCategories.getPublicServiceCategories(),
    staleTime: 30 * 60 * 1000,
  });
};

export const useBusinessCategories = () => {
  return useQuery({
    queryKey: ['userCategories', 'business'],
    queryFn: () => dataManager.userCategories.getBusinessCategories(),
    staleTime: 30 * 60 * 1000,
  });
};

export const useCategoriesForSelect = () => {
  return useQuery({
    queryKey: ['userCategories', 'select'],
    queryFn: () => dataManager.userCategories.getCategoriesForSelect(),
    staleTime: 30 * 60 * 1000,
  });
};

// Legal hooks
export const useLegalPage = (pageType: LegalPageType) => {
  return useQuery({
    queryKey: ['legal', pageType],
    queryFn: () => dataManager.legal.getLegalPage(pageType),
    staleTime: 60 * 60 * 1000, // 1 hour - legal content doesn't change often
  });
};

export const usePrivacyPolicy = () => {
  return useQuery({
    queryKey: ['legal', 'privacyPolicy'],
    queryFn: () => dataManager.legal.getPrivacyPolicy(),
    staleTime: 60 * 60 * 1000,
  });
};

export const useTermsOfService = () => {
  return useQuery({
    queryKey: ['legal', 'termsOfService'],
    queryFn: () => dataManager.legal.getTermsOfService(),
    staleTime: 60 * 60 * 1000,
  });
};

export const useCookiePolicy = () => {
  return useQuery({
    queryKey: ['legal', 'cookiePolicy'],
    queryFn: () => dataManager.legal.getCookiePolicy(),
    staleTime: 60 * 60 * 1000,
  });
};

export const useContactSupport = () => {
  return useQuery({
    queryKey: ['legal', 'contactSupport'],
    queryFn: () => dataManager.legal.getContactSupport(),
    staleTime: 30 * 60 * 1000,
  });
};

export const useFAQ = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['legal', 'faq', searchTerm],
    queryFn: () => dataManager.legal.getFAQ(searchTerm),
    staleTime: 30 * 60 * 1000,
  });
};

export const useLegalSearch = (query: string) => {
  return useQuery({
    queryKey: ['legal', 'search', query],
    queryFn: () => dataManager.legal.searchLegalContent(query),
    enabled: query.length > 2,
    staleTime: 5 * 60 * 1000,
  });
};

// Brand hooks
export const useBrands = (options: BrandQueryOptions = {}) => {
  return useQuery({
    queryKey: ['brands', 'all', options],
    queryFn: () => dataManager.brands.getAllBrands(options),
    staleTime: 15 * 60 * 1000,
  });
};

export const useBrandsByCategory = (category: string, options: BrandQueryOptions = {}) => {
  return useQuery({
    queryKey: ['brands', 'category', category, options],
    queryFn: () => dataManager.brands.getBrandsByCategory(category, options),
    enabled: !!category,
    staleTime: 15 * 60 * 1000,
  });
};

export const useRandomBrands = (count: number = 5) => {
  return useQuery({
    queryKey: ['brands', 'random', count],
    queryFn: () => dataManager.brands.getRandomBrands(count),
    staleTime: 5 * 60 * 1000, // Shorter cache for random content
  });
};

export const useBrand = (name: string) => {
  return useQuery({
    queryKey: ['brands', 'brand', name],
    queryFn: () => dataManager.brands.getBrandByName(name),
    enabled: !!name,
    staleTime: 30 * 60 * 1000,
  });
};

export const useBrandCategories = () => {
  return useQuery({
    queryKey: ['brands', 'categories'],
    queryFn: () => dataManager.brands.getCategories(),
    staleTime: 30 * 60 * 1000,
  });
};

export const useFeaturedBrands = (count: number = 8) => {
  return useQuery({
    queryKey: ['brands', 'featured', count],
    queryFn: () => dataManager.brands.getFeaturedBrands(count),
    staleTime: 15 * 60 * 1000,
  });
};

export const useBrandsForCarousel = () => {
  return useQuery({
    queryKey: ['brands', 'carousel'],
    queryFn: () => dataManager.brands.getBrandsForCarousel(),
    staleTime: 15 * 60 * 1000,
  });
};

export const useBrandSearch = (query: string, options: BrandQueryOptions = {}) => {
  return useQuery({
    queryKey: ['brands', 'search', query, options],
    queryFn: () => dataManager.brands.searchBrands(query, options),
    enabled: query.length > 1,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBrandStats = () => {
  return useQuery({
    queryKey: ['brands', 'stats'],
    queryFn: () => dataManager.brands.getBrandStats(),
    staleTime: 30 * 60 * 1000,
  });
};

// System hooks
export const useDataSourceHealth = () => {
  return useQuery({
    queryKey: ['system', 'health'],
    queryFn: () => dataManager.healthCheck(),
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchInterval: 5 * 60 * 1000, // Check every 5 minutes
  });
};

// Utility hook to invalidate all queries from a specific data source
export const useInvalidateDataSource = () => {
  const queryClient = useQueryClient();

  return {
    invalidateBlog: () => queryClient.invalidateQueries({ queryKey: ['blog'] }),
    invalidateUserCategories: () => queryClient.invalidateQueries({ queryKey: ['userCategories'] }),
    invalidateLegal: () => queryClient.invalidateQueries({ queryKey: ['legal'] }),
    invalidateBrands: () => queryClient.invalidateQueries({ queryKey: ['brands'] }),
    invalidateAll: () => queryClient.invalidateQueries(),
  };
};

// Hook for prefetching commonly used data
export const usePrefetchCommonData = () => {
  const queryClient = useQueryClient();

  const prefetchCommonData = async () => {
    // Prefetch featured blog post
    await queryClient.prefetchQuery({
      queryKey: ['blog', 'featured'],
      queryFn: () => dataManager.blog.getFeaturedPost(),
      staleTime: 10 * 60 * 1000,
    });

    // Prefetch user categories for forms
    await queryClient.prefetchQuery({
      queryKey: ['userCategories', 'select'],
      queryFn: () => dataManager.userCategories.getCategoriesForSelect(),
      staleTime: 30 * 60 * 1000,
    });

    // Prefetch brands for carousel
    await queryClient.prefetchQuery({
      queryKey: ['brands', 'carousel'],
      queryFn: () => dataManager.brands.getBrandsForCarousel(),
      staleTime: 15 * 60 * 1000,
    });
  };

  return { prefetchCommonData };
};