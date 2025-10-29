import { 
  Brand,
  partnerBrands,
  getBrandsByCategory,
  getBrandCategories
} from "@/constants/brandData";
import { ApiResponse, PaginatedResponse, QueryOptions, IDataSource } from "./types";

export interface BrandFilters {
  category?: string;
  searchTerm?: string;
  hasWebsite?: boolean;
}

export interface BrandQueryOptions extends Omit<QueryOptions, 'filters'> {
  filters?: BrandFilters;
}

export interface BrandStats {
  totalBrands: number;
  categoriesCount: number;
  brandsWithWebsites: number;
  categories: Array<{
    name: string;
    count: number;
  }>;
}

class BrandDataSource implements IDataSource {
  name = "BrandDataSource";
  isConnected = true;

  async connect(): Promise<void> {
    this.isConnected = true;
  }

  async disconnect(): Promise<void> {
    this.isConnected = false;
  }

  async healthCheck(): Promise<boolean> {
    return this.isConnected && partnerBrands.length > 0;
  }

  // Get all brands with pagination and filtering
  async getAllBrands(options: BrandQueryOptions = {}): Promise<PaginatedResponse<Brand>> {
    try {
      let filteredBrands = [...partnerBrands];

      // Apply filters
      if (options.filters) {
        const { category, searchTerm, hasWebsite } = options.filters;

        if (category) {
          filteredBrands = getBrandsByCategory(category);
        }

        if (searchTerm) {
          const search = searchTerm.toLowerCase();
          filteredBrands = filteredBrands.filter(brand =>
            brand.name.toLowerCase().includes(search) ||
            brand.description.toLowerCase().includes(search) ||
            brand.category.toLowerCase().includes(search)
          );
        }

        if (hasWebsite !== undefined) {
          filteredBrands = filteredBrands.filter(brand => 
            hasWebsite ? !!brand.website : !brand.website
          );
        }
      }

      // Apply sorting
      if (options.sortBy) {
        filteredBrands.sort((a, b) => {
          let aValue: string;
          let bValue: string;

          switch (options.sortBy) {
            case 'name':
              aValue = a.name.toLowerCase();
              bValue = b.name.toLowerCase();
              break;
            case 'category':
              aValue = a.category.toLowerCase();
              bValue = b.category.toLowerCase();
              break;
            default:
              aValue = a.name.toLowerCase();
              bValue = b.name.toLowerCase();
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
      const paginatedBrands = filteredBrands.slice(startIndex, endIndex);

      return {
        data: paginatedBrands,
        pagination: {
          page,
          limit,
          total: filteredBrands.length,
          totalPages: Math.ceil(filteredBrands.length / limit)
        },
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch brands: ${error}`);
    }
  }

  // Get brands by category
  async getBrandsByCategory(category: string, options: QueryOptions = {}): Promise<PaginatedResponse<Brand>> {
    try {
      return await this.getAllBrands({
        ...options,
        filters: { category }
      });
    } catch (error) {
      throw new Error(`Failed to fetch brands for category ${category}: ${error}`);
    }
  }

  // Get random brands
  async getRandomBrands(count: number = 5): Promise<ApiResponse<Brand[]>> {
    try {
      const shuffled = [...partnerBrands].sort(() => 0.5 - Math.random());
      const randomBrands = shuffled.slice(0, Math.min(count, partnerBrands.length));
      return {
        data: randomBrands,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch random brands: ${error}`);
    }
  }

  // Get brand by name
  async getBrandByName(name: string): Promise<ApiResponse<Brand | null>> {
    try {
      const brand = partnerBrands.find(b => 
        b.name.toLowerCase() === name.toLowerCase()
      );
      return {
        data: brand || null,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch brand with name ${name}: ${error}`);
    }
  }

  // Get all categories
  async getCategories(): Promise<ApiResponse<string[]>> {
    try {
      const categories = [...new Set(partnerBrands.map(brand => brand.category))];
      return {
        data: categories,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch brand categories: ${error}`);
    }
  }

  // Search brands
  async searchBrands(query: string, options: QueryOptions = {}): Promise<PaginatedResponse<Brand>> {
    try {
      return await this.getAllBrands({
        ...options,
        filters: { searchTerm: query }
      });
    } catch (error) {
      throw new Error(`Failed to search brands: ${error}`);
    }
  }

  // Get brand statistics
  async getBrandStats(): Promise<ApiResponse<BrandStats>> {
    try {
      const categories = [...new Set(partnerBrands.map(brand => brand.category))];
      const categoryCounts = categories.map(category => ({
        name: category,
        count: partnerBrands.filter(brand => brand.category === category).length
      }));

      const stats: BrandStats = {
        totalBrands: partnerBrands.length,
        categoriesCount: categories.length,
        brandsWithWebsites: partnerBrands.filter(brand => !!brand.website).length,
        categories: categoryCounts
      };

      return {
        data: stats,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch brand statistics: ${error}`);
    }
  }

  // Get featured brands (for carousel)
  async getFeaturedBrands(count: number = 8): Promise<ApiResponse<Brand[]>> {
    try {
      // For now, we'll return random brands, but this could be extended
      // to have a 'featured' property in the Brand interface
      const randomResponse = await this.getRandomBrands(count);
      return randomResponse;
    } catch (error) {
      throw new Error(`Failed to fetch featured brands: ${error}`);
    }
  }

  // Get brands for specific use cases (e.g., homepage carousel)
  async getBrandsForCarousel(): Promise<ApiResponse<Brand[]>> {
    try {
      // Return all brands for carousel display
      return {
        data: partnerBrands,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch brands for carousel: ${error}`);
    }
  }

  // Validate brand data
  async validateBrand(brand: Partial<Brand>): Promise<ApiResponse<{
    valid: boolean;
    errors: string[];
  }>> {
    try {
      const errors: string[] = [];

      if (!brand.name || brand.name.trim().length === 0) {
        errors.push('Brand name is required');
      }

      if (!brand.description || brand.description.trim().length === 0) {
        errors.push('Brand description is required');
      }

      if (!brand.category || brand.category.trim().length === 0) {
        errors.push('Brand category is required');
      }

      if (!brand.logo || brand.logo.trim().length === 0) {
        errors.push('Brand logo is required');
      }

      if (brand.website && brand.website.trim().length > 0) {
        try {
          new URL(brand.website);
        } catch {
          errors.push('Invalid website URL format');
        }
      }

      return {
        data: {
          valid: errors.length === 0,
          errors
        },
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to validate brand: ${error}`);
    }
  }
}

// Export singleton instance
export const brandDataSource = new BrandDataSource();