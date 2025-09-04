// src/components/TestimonialCarousel.tsx
import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  position: string;
  content: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-card border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/5 to-secondary/5 rounded-full transform translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/5 to-accent-500/5 rounded-full transform -translate-x-12 translate-y-12" />
        
        {/* Quote icon */}
        <div className="absolute top-6 left-6 text-accent-500/20">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="relative z-10">
          {/* Testimonial content */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="text-lg text-foreground leading-relaxed mb-6 italic">
              "{t.content}"
            </p>
            
            {/* Author info */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-foreground font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.position}</p>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-accent-500/10 hover:bg-accent-500/20 text-accent-500 transition-all duration-200 hover:scale-110"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === index 
                      ? 'bg-accent-500 scale-125' 
                      : 'bg-muted hover:bg-accent-500/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-accent-500/10 hover:bg-accent-500/20 text-accent-500 transition-all duration-200 hover:scale-110"
              disabled={isTransitioning}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
