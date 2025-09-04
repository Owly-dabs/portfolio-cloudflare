// src/data/links.ts
export const links = {
  // Social Media
  github: "https://github.com/owly-dabs",
  linkedin: "https://linkedin.com/in/darryllky",
  email: "mailto:darryllky@berkeley.edu",
  
  // Portfolio/Personal
  portfolio: "https://your-portfolio.com",
  blog: "https://your-blog.com",
  
  // Professional
  resume: "https://drive.google.com/file/d/your-resume-id/view",
  calendly: "https://calendly.com/your-calendly",
  
  // Project Links (if you have live demos)
  projects: {
    "maintainability-analyzer": "https://github.com/your-github/maintainability-analyzer",
    "gold-price-predictor": "https://github.com/your-github/gold-price-predictor",
    "aqw-cli": "https://github.com/your-github/aqw-cli",
  },
  
  // External Resources
  sutd: "https://sutd.edu.sg",
  
  // Contact Methods
  contact: {
    email: "you@example.com",
    phone: "+65 1234 5678", // Optional
    location: "Singapore", // Optional
  }
} as const;

// Type for better TypeScript support
export type LinkKey = keyof typeof links;
export type ProjectLinkKey = keyof typeof links.projects; 