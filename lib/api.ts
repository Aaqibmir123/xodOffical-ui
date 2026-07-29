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

export interface Partner {
  _id: string;
  name: string;
  image: string;
  description: string;
}

type PartnerPayload = Omit<Partner, "_id">;

export const partnersAPI = {
  getAll: async (): Promise<{ success: boolean; data: Partner[] }> => {
    const response = await fetch(`${API_BASE_URL}/partners`);
    return response.json();
  },
  create: async (data: PartnerPayload): Promise<{ success: boolean; data: Partner }> => {
    const response = await fetch(`${API_BASE_URL}/partners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id: string, data: PartnerPayload): Promise<{ success: boolean; data: Partner }> => {
    const response = await fetch(`${API_BASE_URL}/partners/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  remove: async (id: string): Promise<{ success: boolean }> => {
    const response = await fetch(`${API_BASE_URL}/partners/${id}`, { method: "DELETE" });
    return response.json();
  },
};

export interface Testimonial {
  _id: string;
  clientName: string;
  rating: number;
  description: string;
}

type TestimonialPayload = Omit<Testimonial, "_id">;

export const testimonialsAPI = {
  getAll: async (): Promise<{ success: boolean; data: Testimonial[] }> => {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    return response.json();
  },
  create: async (data: TestimonialPayload): Promise<{ success: boolean; data: Testimonial }> => {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  update: async (id: string, data: TestimonialPayload): Promise<{ success: boolean; data: Testimonial }> => {
    const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  remove: async (id: string): Promise<{ success: boolean }> => {
    const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, { method: "DELETE" });
    return response.json();
  },
};

export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  status: "new" | "read";
  createdAt: string;
}

type ContactPayload = Omit<ContactMessage, "_id" | "status" | "createdAt">;

const adminHeaders = () => {
  const token = typeof window === "undefined" ? null : localStorage.getItem("token");
  return { "Content-Type": "application/json", ...(token ? { Authorization: `Bearer ${token}` } : {}) };
};

export const contactAPI = {
  submit: async (data: ContactPayload): Promise<{ success: boolean; message?: string }> => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  getAll: async (): Promise<{ success: boolean; data: ContactMessage[] }> => {
    const response = await fetch(`${API_BASE_URL}/contact`, { headers: adminHeaders() });
    return response.json();
  },
  updateStatus: async (id: string, status: ContactMessage["status"]): Promise<{ success: boolean; data: ContactMessage }> => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}/status`, {
      method: "PATCH",
      headers: adminHeaders(),
      body: JSON.stringify({ status }),
    });
    return response.json();
  },
  remove: async (id: string): Promise<{ success: boolean }> => {
    const response = await fetch(`${API_BASE_URL}/contact/${id}`, { method: "DELETE", headers: adminHeaders() });
    return response.json();
  },
};

export interface SectionContent {
  label: string;
  heading: string;
  description: string;
}

export const sectionContentAPI = {
  get: async (key: "testimonials" | "partners"): Promise<{ success: boolean; data: SectionContent }> => {
    const response = await fetch(`${API_BASE_URL}/section-content/${key}`);
    return response.json();
  },
  update: async (key: "testimonials" | "partners", data: SectionContent): Promise<{ success: boolean; data: SectionContent }> => {
    const response = await fetch(`${API_BASE_URL}/section-content/${key}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default aboutAPI;
