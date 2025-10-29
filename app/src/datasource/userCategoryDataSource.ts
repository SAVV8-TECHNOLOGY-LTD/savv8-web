import { 
  UserCategory,
  userCategories,
  getUserCategoryByValue,
  getUserCategoryLabel,
  getPublicServiceCategories,
  getBusinessCategories
} from "@/constants/userCategories";
import { ApiResponse, IDataSource } from "./types";

export interface UserCategoryFilters {
  type?: 'public-service' | 'business' | 'individual';
  searchTerm?: string;
}

class UserCategoryDataSource implements IDataSource {
  name = "UserCategoryDataSource";
  isConnected = true;

  async connect(): Promise<void> {
    this.isConnected = true;
  }

  async disconnect(): Promise<void> {
    this.isConnected = false;
  }

  async healthCheck(): Promise<boolean> {
    return this.isConnected && userCategories.length > 0;
  }

  // Get all user categories
  async getAllCategories(filters?: UserCategoryFilters): Promise<ApiResponse<UserCategory[]>> {
    try {
      let filteredCategories = [...userCategories];

      if (filters) {
        const { type, searchTerm } = filters;

        if (type) {
          switch (type) {
            case 'public-service':
              filteredCategories = getPublicServiceCategories();
              break;
            case 'business':
              filteredCategories = getBusinessCategories();
              break;
            case 'individual':
              filteredCategories = userCategories.filter(category => 
                !getPublicServiceCategories().some(ps => ps.value === category.value) &&
                !getBusinessCategories().some(b => b.value === category.value)
              );
              break;
          }
        }

        if (searchTerm) {
          const search = searchTerm.toLowerCase();
          filteredCategories = filteredCategories.filter(category =>
            category.label.toLowerCase().includes(search) ||
            category.description?.toLowerCase().includes(search) ||
            category.value.toLowerCase().includes(search)
          );
        }
      }

      return {
        data: filteredCategories,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch user categories: ${error}`);
    }
  }

  // Get category by value
  async getCategoryByValue(value: string): Promise<ApiResponse<UserCategory | null>> {
    try {
      const category = getUserCategoryByValue(value);
      return {
        data: category || null,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch category with value ${value}: ${error}`);
    }
  }

  // Get category label by value
  async getCategoryLabel(value: string): Promise<ApiResponse<string>> {
    try {
      const label = getUserCategoryLabel(value);
      return {
        data: label,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch category label for ${value}: ${error}`);
    }
  }

  // Get public service categories
  async getPublicServiceCategories(): Promise<ApiResponse<UserCategory[]>> {
    try {
      const categories = getPublicServiceCategories();
      return {
        data: categories,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch public service categories: ${error}`);
    }
  }

  // Get business categories
  async getBusinessCategories(): Promise<ApiResponse<UserCategory[]>> {
    try {
      const categories = getBusinessCategories();
      return {
        data: categories,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch business categories: ${error}`);
    }
  }

  // Get categories for dropdown/select components
  async getCategoriesForSelect(): Promise<ApiResponse<Array<{ value: string; label: string }>>> {
    try {
      const selectOptions = userCategories.map(category => ({
        value: category.value,
        label: category.label
      }));

      return {
        data: selectOptions,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch categories for select: ${error}`);
    }
  }

  // Validate if a category value exists
  async validateCategory(value: string): Promise<ApiResponse<boolean>> {
    try {
      const exists = userCategories.some(category => category.value === value);
      return {
        data: exists,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to validate category ${value}: ${error}`);
    }
  }

  // Get category statistics
  async getCategoryStats(): Promise<ApiResponse<{
    total: number;
    publicService: number;
    business: number;
    individual: number;
  }>> {
    try {
      const publicServiceCount = getPublicServiceCategories().length;
      const businessCount = getBusinessCategories().length;
      const individualCount = userCategories.length - publicServiceCount - businessCount;

      return {
        data: {
          total: userCategories.length,
          publicService: publicServiceCount,
          business: businessCount,
          individual: individualCount
        },
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch category statistics: ${error}`);
    }
  }
}

// Export singleton instance
export const userCategoryDataSource = new UserCategoryDataSource();