import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectsRef = useRef([]);
  const projects = [
    {
      title: "Movix - Movie Booking App.",
      description: "A full-featured movie application built with Vue and Tailwind CSS. Users can browse movies, view showtimes.",
      image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your project image
      tags: ["Vue", "Tailwind", "API", "JavaScript"],
      liveLink: "https://movix-two-ruby.vercel.app/",
      githubLink: "https://github.com/CodeRheem/Movix",
      featured: true 
    },
    {
      title: "Break-Fitnezz - Fitness App.",
      description: "A fitness web application that helps users register for workout through gym instructor, and access exercise routines.",
      image: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
      tags: ["JavaScript", "React", "Tailwind"],
      liveLink: "https://break-fitnezz.vercel.app/",
      githubLink: "https://github.com/CodeRheem/Break-Fitnezz",
      featured: true
    },
    {
      title: "Project Name 3",
      description: "Your third project that demonstrates your expertise in web development and problem-solving.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["TypeScript", "Next.js", "MongoDB"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/yourusername/project",
      featured: false
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          setTimeout(() => {
            setVisibleProjects(prev => [...new Set([...prev, index])]);
          }, index * 150);
        }
      });
    }, observerOptions);

    projectsRef.current.forEach(project => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Poppins:wght@400;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .project-visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
        }
        
        .project-card:hover .project-image {
          transform: scale(1.1);
        }
        
        .project-image {
          transition: transform 0.6s ease;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .featured-badge {
          animation: float 3s ease-in-out infinite;
        }
        
        .tag-item {
          transition: all 0.3s ease;
        }
        
        .tag-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
        }
      `}</style>
      
      <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black py-10 px-4" id="projects">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code className="w-10 h-10 text-purple-400" />
            <h2 
              className="text-5xl md:text-6xl font-black gradient-text"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              My Projects
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            A collection of my recent work showcasing creativity, technical skills, and problem-solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
              data-index={index}
              className={`project-card relative bg-linear-to-br from-gray-900 via-purple-900/10 to-gray-900 border-2 border-purple-500/30 rounded-2xl overflow-hidden ${
                visibleProjects.includes(index) ? 'project-visible' : 'opacity-0'
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="featured-badge absolute top-4 right-4 z-20 bg-linear-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Featured
                </div>
              )}

              {/* Shimmer Effect Overlay */}
              {hoveredProject === index && (
                <div className="shimmer-effect absolute inset-0 z-10 pointer-events-none"></div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="tag-item px-3 py-1 bg-purple-500/20 border border-purple-500/40 text-purple-300 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2 mb-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 border border-gray-700 hover:border-purple-500"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}