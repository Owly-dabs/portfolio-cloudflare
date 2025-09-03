// src/data/projects.ts
export const projects = [
  {
    title: "Maintainability Analyzer",
    slug: "maintainability-analyzer",
    description: "LLM pipeline that flags poor code structure and generates explanations.",
    tech: ["FastAPI", "Celery", "CodeT5p"],
  },
  {
    title: "Gold Price Predictor",
    slug: "gold-price-predictor",
    description: "Uses macroeconomic data to predict gold price movements.",
    tech: ["scikit-learn", "XGBoost", "Streamlit"],
  },
  {
    title: "AQW Automation CLI",
    slug: "aqw-cli",
    description: "A Go-based bot that automates gameplay using OCR + window detection.",
    tech: ["Go", "xdotool", "Tesseract OCR"],
  },
];
