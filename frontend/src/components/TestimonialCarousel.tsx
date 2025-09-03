// src/components/TestimonialCarousel.tsx
import { useState } from "react";

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
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#252526] p-6 rounded-md shadow-md border border-[#3c3c3c] max-w-2xl mx-auto text-center">
      <p className="italic text-muted text-sm">“{t.content}”</p>
      <div className="mt-4">
        <p className="text-accent font-semibold">{t.name}</p>
        <p className="text-xs text-muted">{t.position}</p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={prev}
          className="bg-accent text-black px-3 py-1 rounded hover:opacity-90 transition"
        >
          ◀ Prev
        </button>
        <button
          onClick={next}
          className="bg-accent text-black px-3 py-1 rounded hover:opacity-90 transition"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
