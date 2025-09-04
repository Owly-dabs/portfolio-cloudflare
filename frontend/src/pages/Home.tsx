// src/pages/Home.tsx
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import { links } from "../data/links";
import ProjectCard from "../components/ProjectCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="absolute inset-0 bg-background" />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-bounce-slow" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="fade-in-up">
            {/* Greeting */}
            <div className="mb-6">
              <span className="text-accent-500 font-medium">👋 Hello, I'm</span>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Darryl Lim</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Computer Science and Design @ SUTD • Software Engineer 
              
              Builder of fun tools that make an impact.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#projects"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-500 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={links.email}
                className="text-muted-foreground hover:text-accent-500 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-500 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Passionate about elegant solutions to real problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  I'm a Computer Science and Design student at <a href={links.sutd} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-400 transition-colors duration-200">SUTD</a>  with a passion for software, AI, 
                  systems engineering, and building tools that solves real problems.
                    Whether it's building a new LLM app, making a telegram bot, or creating new software for my friends and family,
                  I strive to write code that is easy to understand and maintain, and that is scalable and efficient.
                </p>
                <p className="text-foreground leading-relaxed">
                  Always looking for new projects to work on, and new opportunities to learn and grow.
                </p>
                
                {/* Skills */}
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Go', 'OOP', 'AI/ML', 'DevOps','Linux', 'MERN Stack', 'TypeScript', 'AWS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent-500/10 text-accent-500 text-sm font-medium rounded-full border border-accent-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Highlights */}
              <div className="relative">
                <div className="bg-gradient-to-br from-accent-500/20 to-secondary/20 rounded-2xl p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                      <span className="text-foreground font-medium">LLM-enabled Applications & Pipelines</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-foreground font-medium">Intuitive CLI Automation Tools</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-foreground font-medium">Elegant Software Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                      <span className="text-foreground font-medium">Thoughtful Systems Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in software engineering, 
              systems design, and full-stack development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProjectCard {...proj} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-accent-500 hover:text-accent-400 transition-colors duration-200"
            >
              <span>View more on GitHub</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">What People Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Feedback from colleagues, mentors, and collaborators
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={links.email}
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
              >
                Send Email
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Darryl Lim. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

