// src/pages/Home.tsx
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import ProjectCard from "../components/ProjectCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen container w-full mx-auto">
      {/* 👋 Hero Section */}
      <section className="bg-[#1e1e1e] min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-accent">
          {"<"}Hey, I'm Darryl Lim{"/>"}
        </h1>
        <p className="text-muted mt-4 max-w-xl">
          Computer Science and Design @ SUTD • AI • Systems • Builder of tools that think, explain, and scale.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            className="underline text-secondary"
          >
            GitHub
          </a>
          <a
            href="mailto:you@example.com"
            className="underline text-secondary"
          >
            Email
          </a>
        </div>
      </section>

      {/* 💬 Testimonial Section */}
      <section className="bg-[#2a2d2e] mt-20">
        <h2 className="text-3xl font-bold text-accent mb-6 text-center">💬 Testimonials</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* 🛠 Projects Section */}
      <section className="bg-[#1e1e1e] mt-20 ">
        <h2 className="text-3xl font-bold text-accent mb-6 text-center">🛠 Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 justify-center">
          {projects.map((proj, idx) => (
            <Link key={idx} to={`/projects/${proj.slug}`}>
              <ProjectCard {...proj} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

