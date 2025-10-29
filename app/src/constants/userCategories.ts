export interface UserCategory {
  value: string;
  label: string;
  description?: string;
}

export const userCategories: UserCategory[] = [
  {
    value: "general",
    label: "General User",
    description: "Individual looking for everyday savings"
  },
  {
    value: "student",
    label: "Student",
    description: "University, college, or school student"
  },
  {
    value: "nhs",
    label: "NHS/Blue Light Worker",
    description: "Healthcare and emergency service workers"
  },
  {
    value: "teacher",
    label: "Teacher/Educator",
    description: "Education professionals and staff"
  },
  {
    value: "military",
    label: "Military/Veterans",
    description: "Active military personnel and veterans"
  },
  {
    value: "senior",
    label: "Senior Citizen",
    description: "Adults aged 60 and above"
  },
  {
    value: "corporate",
    label: "Corporate Employee",
    description: "Working for a company or organization"
  },
  {
    value: "freelancer",
    label: "Freelancer/Self-Employed",
    description: "Independent contractors and entrepreneurs"
  },
  {
    value: "charity",
    label: "Charity Worker",
    description: "Non-profit and charity organization employees"
  },
  {
    value: "government",
    label: "Government Employee",
    description: "Civil service and government workers"
  },
  {
    value: "business",
    label: "Business Owner/Partner",
    description: "Business partnerships and procurement"
  }
  
  
];

// Helper functions
export const getUserCategoryByValue = (value: string): UserCategory | undefined => {
  return userCategories.find(category => category.value === value);
};

export const getUserCategoryLabel = (value: string): string => {
  const category = getUserCategoryByValue(value);
  return category ? category.label : value;
};

export const getPublicServiceCategories = (): UserCategory[] => {
  return userCategories.filter(category => 
    ['nhs', 'teacher', 'military', 'charity', 'government'].includes(category.value)
  );
};

export const getBusinessCategories = (): UserCategory[] => {
  return userCategories.filter(category => 
    ['corporate', 'freelancer', 'business'].includes(category.value)
  );
};