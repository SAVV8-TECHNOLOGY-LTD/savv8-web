import { 
  LegalPage,
  LegalSection,
  privacyPolicyContent,
  termsOfServiceContent,
  cookiePolicyContent,
  contactSupportContent
} from "@/constants/legalContent";
import { ApiResponse, IDataSource } from "./types";

export type LegalPageType = 'privacy-policy' | 'terms-of-service' | 'cookie-policy' | 'contact-support';

export interface ContactSection {
  id: string;
  title: string;
  description: string;
  email: string;
  expectedResponse: string;
}

export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactSupportData {
  title: string;
  subtitle: string;
  sections: ContactSection[];
  companyInfo: ContactInfo;
  faq: FAQ[];
}

class LegalDataSource implements IDataSource {
  name = "LegalDataSource";
  isConnected = true;

  async connect(): Promise<void> {
    this.isConnected = true;
  }

  async disconnect(): Promise<void> {
    this.isConnected = false;
  }

  async healthCheck(): Promise<boolean> {
    return this.isConnected;
  }

  // Get privacy policy content
  async getPrivacyPolicy(): Promise<ApiResponse<LegalPage>> {
    try {
      return {
        data: privacyPolicyContent,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch privacy policy: ${error}`);
    }
  }

  // Get terms of service content
  async getTermsOfService(): Promise<ApiResponse<LegalPage>> {
    try {
      return {
        data: termsOfServiceContent,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch terms of service: ${error}`);
    }
  }

  // Get cookie policy content
  async getCookiePolicy(): Promise<ApiResponse<LegalPage>> {
    try {
      return {
        data: cookiePolicyContent,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch cookie policy: ${error}`);
    }
  }

  // Get contact support content
  async getContactSupport(): Promise<ApiResponse<ContactSupportData>> {
    try {
      return {
        data: contactSupportContent,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch contact support content: ${error}`);
    }
  }

  // Get legal page by type
  async getLegalPage(pageType: LegalPageType): Promise<ApiResponse<LegalPage | ContactSupportData>> {
    try {
      switch (pageType) {
        case 'privacy-policy':
          return await this.getPrivacyPolicy();
        case 'terms-of-service':
          return await this.getTermsOfService();
        case 'cookie-policy':
          return await this.getCookiePolicy();
        case 'contact-support':
          return await this.getContactSupport();
        default:
          throw new Error(`Unknown legal page type: ${pageType}`);
      }
    } catch (error) {
      throw new Error(`Failed to fetch legal page ${pageType}: ${error}`);
    }
  }

  // Get specific section from a legal page
  async getLegalSection(pageType: Exclude<LegalPageType, 'contact-support'>, sectionId: string): Promise<ApiResponse<LegalSection | null>> {
    try {
      let page: LegalPage;
      
      switch (pageType) {
        case 'privacy-policy':
          page = privacyPolicyContent;
          break;
        case 'terms-of-service':
          page = termsOfServiceContent;
          break;
        case 'cookie-policy':
          page = cookiePolicyContent;
          break;
        default:
          throw new Error(`Invalid page type for section lookup: ${pageType}`);
      }

      const section = page.sections.find(s => s.id === sectionId);
      
      return {
        data: section || null,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch section ${sectionId} from ${pageType}: ${error}`);
    }
  }

  // Get all available legal pages metadata
  async getLegalPagesMetadata(): Promise<ApiResponse<Array<{
    type: LegalPageType;
    title: string;
    lastUpdated: string;
    sectionsCount: number;
  }>>> {
    try {
      const metadata = [
        {
          type: 'privacy-policy' as LegalPageType,
          title: privacyPolicyContent.title,
          lastUpdated: privacyPolicyContent.lastUpdated,
          sectionsCount: privacyPolicyContent.sections.length
        },
        {
          type: 'terms-of-service' as LegalPageType,
          title: termsOfServiceContent.title,
          lastUpdated: termsOfServiceContent.lastUpdated,
          sectionsCount: termsOfServiceContent.sections.length
        },
        {
          type: 'cookie-policy' as LegalPageType,
          title: cookiePolicyContent.title,
          lastUpdated: cookiePolicyContent.lastUpdated,
          sectionsCount: cookiePolicyContent.sections.length
        },
        {
          type: 'contact-support' as LegalPageType,
          title: contactSupportContent.title,
          lastUpdated: new Date().toISOString().split('T')[0], // Current date for contact page
          sectionsCount: contactSupportContent.sections.length
        }
      ];

      return {
        data: metadata,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch legal pages metadata: ${error}`);
    }
  }

  // Search across all legal content
  async searchLegalContent(query: string): Promise<ApiResponse<Array<{
    pageType: LegalPageType;
    pageTitle: string;
    sectionId?: string;
    sectionTitle?: string;
    content: string;
    relevanceScore: number;
  }>>> {
    try {
      const searchTerm = query.toLowerCase();
      const results: Array<{
        pageType: LegalPageType;
        pageTitle: string;
        sectionId?: string;
        sectionTitle?: string;
        content: string;
        relevanceScore: number;
      }> = [];

      // Search in legal pages
      const legalPages = [
        { type: 'privacy-policy' as LegalPageType, data: privacyPolicyContent },
        { type: 'terms-of-service' as LegalPageType, data: termsOfServiceContent },
        { type: 'cookie-policy' as LegalPageType, data: cookiePolicyContent }
      ];

      for (const page of legalPages) {
        for (const section of page.data.sections) {
          const content = `${section.title} ${section.content}`.toLowerCase();
          const titleMatch = section.title.toLowerCase().includes(searchTerm);
          const contentMatch = section.content.toLowerCase().includes(searchTerm);
          
          if (titleMatch || contentMatch) {
            const relevanceScore = titleMatch ? 2 : 1; // Higher score for title matches
            results.push({
              pageType: page.type,
              pageTitle: page.data.title,
              sectionId: section.id,
              sectionTitle: section.title,
              content: section.content,
              relevanceScore
            });
          }
        }
      }

      // Search in contact support content
      const contactContent = contactSupportContent;
      for (const section of contactContent.sections) {
        const content = `${section.title} ${section.description}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            pageType: 'contact-support',
            pageTitle: contactContent.title,
            sectionId: section.id,
            sectionTitle: section.title,
            content: section.description,
            relevanceScore: 1
          });
        }
      }

      // Search in FAQ
      for (const faqItem of contactContent.faq) {
        const content = `${faqItem.question} ${faqItem.answer}`.toLowerCase();
        if (content.includes(searchTerm)) {
          results.push({
            pageType: 'contact-support',
            pageTitle: contactContent.title,
            sectionTitle: faqItem.question,
            content: faqItem.answer,
            relevanceScore: 1
          });
        }
      }

      // Sort by relevance score
      results.sort((a, b) => b.relevanceScore - a.relevanceScore);

      return {
        data: results,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to search legal content: ${error}`);
    }
  }

  // Get contact support sections by type
  async getContactSectionsByType(type?: string): Promise<ApiResponse<ContactSection[]>> {
    try {
      let sections = contactSupportContent.sections;
      
      if (type) {
        // Filter sections by type (could be expanded with more specific filtering logic)
        sections = sections.filter(section => 
          section.title.toLowerCase().includes(type.toLowerCase()) ||
          section.id.includes(type.toLowerCase())
        );
      }

      return {
        data: sections,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch contact sections: ${error}`);
    }
  }

  // Get FAQ items
  async getFAQ(searchTerm?: string): Promise<ApiResponse<FAQ[]>> {
    try {
      let faqItems = contactSupportContent.faq;
      
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        faqItems = faqItems.filter(item =>
          item.question.toLowerCase().includes(search) ||
          item.answer.toLowerCase().includes(search)
        );
      }

      return {
        data: faqItems,
        success: true,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to fetch FAQ: ${error}`);
    }
  }
}

// Export singleton instance
export const legalDataSource = new LegalDataSource();