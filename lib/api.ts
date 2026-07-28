// API utility functions for About section

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// About API functions
export const aboutAPI = {
  // Get about data
  get: async () => {
    const response = await fetch(`${API_BASE_URL}/about`);
    return await response.json();
  },

  // Update about data
  update: async (data: {
    about_tagline?: string;
    company_title?: string;
    company_subtitle?: string;
    main_heading?: string;
    description?: string;
    features_list?: string[];
    section_image_url?: string;
    section_image_alt?: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/about`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  },
};

export default aboutAPI;