import { blogDataSource } from "./blogDataSource";
import { userCategoryDataSource } from "./userCategoryDataSource";
import { legalDataSource } from "./legalDataSource";
import { brandDataSource } from "./brandDataSource";
import { IDataSource, ApiResponse } from "./types";

// Re-export types for easier importing
export type { 
  ApiResponse, 
  PaginatedResponse, 
  QueryOptions, 
  IDataSource,
  DataSourceError 
} from "./types";

export type { 
  BlogQueryOptions, 
  BlogFilters 
} from "./blogDataSource";

export type { 
  UserCategoryFilters 
} from "./userCategoryDataSource";

export type { 
  LegalPageType, 
  ContactSection, 
  ContactInfo, 
  FAQ,
  ContactSupportData 
} from "./legalDataSource";

export type { 
  BrandQueryOptions, 
  BrandFilters, 
  BrandStats 
} from "./brandDataSource";

export interface DataSourceHealth {
  name: string;
  isConnected: boolean;
  healthy: boolean;
  lastChecked: string;
}

export interface DataSourceManagerType {
  blog: typeof blogDataSource;
  userCategories: typeof userCategoryDataSource;
  legal: typeof legalDataSource;
  brands: typeof brandDataSource;
}

class DataSourceManager {
  private dataSources: IDataSource[];

  // Public accessors for data sources
  public blog = blogDataSource;
  public userCategories = userCategoryDataSource;
  public legal = legalDataSource;
  public brands = brandDataSource;

  constructor() {
    this.dataSources = [
      blogDataSource,
      userCategoryDataSource,
      legalDataSource,
      brandDataSource
    ];
  }

  // Initialize all data sources
  async initialize(): Promise<void> {
    try {
      await Promise.all(
        this.dataSources.map(source => source.connect())
      );
      console.log('All data sources initialized successfully');
    } catch (error) {
      console.error('Failed to initialize data sources:', error);
      throw error;
    }
  }

  // Disconnect all data sources
  async shutdown(): Promise<void> {
    try {
      await Promise.all(
        this.dataSources.map(source => source.disconnect())
      );
      console.log('All data sources disconnected successfully');
    } catch (error) {
      console.error('Failed to shutdown data sources:', error);
      throw error;
    }
  }

  // Health check for all data sources
  async healthCheck(): Promise<ApiResponse<DataSourceHealth[]>> {
    try {
      const healthChecks = await Promise.all(
        this.dataSources.map(async (source): Promise<DataSourceHealth> => {
          const healthy = await source.healthCheck();
          return {
            name: source.name,
            isConnected: source.isConnected,
            healthy,
            lastChecked: new Date().toISOString()
          };
        })
      );

      const allHealthy = healthChecks.every(check => check.healthy);
      
      return {
        data: healthChecks,
        success: allHealthy,
        message: allHealthy ? 'All data sources are healthy' : 'Some data sources have issues',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Health check failed: ${error}`);
    }
  }

  // Get specific data source
  getBlogDataSource() {
    return blogDataSource;
  }

  getUserCategoryDataSource() {
    return userCategoryDataSource;
  }

  getLegalDataSource() {
    return legalDataSource;
  }

  getBrandDataSource() {
    return brandDataSource;
  }

  // Check if all data sources are ready
  async isReady(): Promise<boolean> {
    try {
      const healthResponse = await this.healthCheck();
      return healthResponse.success;
    } catch {
      return false;
    }
  }

  // Get data source by name
  getDataSource(name: string): IDataSource | null {
    return this.dataSources.find(source => source.name === name) || null;
  }

  // Get all data sources
  getAllDataSources(): IDataSource[] {
    return [...this.dataSources];
  }

  // Reset all data sources (for testing purposes)
  async reset(): Promise<void> {
    await this.shutdown();
    await this.initialize();
  }
}

// Create singleton instance
const dataManager = new DataSourceManager();

// Export the manager instance and individual data sources for convenience
export default dataManager;

// Named exports for direct access to data sources
export const blog = blogDataSource;
export const userCategories = userCategoryDataSource;
export const legal = legalDataSource;
export const brands = brandDataSource;

// Initialize data sources when the module is imported
// In a real application, you might want to do this in your app's initialization
dataManager.initialize().catch(console.error);