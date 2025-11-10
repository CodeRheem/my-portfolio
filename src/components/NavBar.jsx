import React from "react";
import downloadImage from "../assets/images/download.jpeg";

export default function NavBar() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative bg-black">
      <div className="relative z-10 min-h-screen">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center px-8 py-6 bg-black/30 backdrop-blur-lg border-b border-white/10 ">
          <div className="text-1xl font-[playwrite] text-white font-bold ml-15">
            CodeRheem
            <span className="font-serif text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400 animate-pulse">
              .dev
            </span>
          </div>
          <nav className="mr-25">
            <ul className="flex gap-8">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-110 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-110 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-110 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-110 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-cyan-400 after:to-purple-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Hero Section - Centered */}
        <div className="flex flex-row gap-10 items-center justify-center min-h-[calc(100vh-100px)] px-4">
          <div className="p-4 animate-fade-in-left">
            <div className="relative group">
              {/* Animated glow background */}
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 animate-pulse-glow"></div>

              {/* Image container */}
              <div className="relative border border-white/20 rounded-3xl">
                <img
                  src={downloadImage}
                  alt="Developer Avatar"
                  className="w-full max-w-sm lg:max-w-sm rounded-4xl shadow-2xl border-4 border-cyan-400/50 hover:border-purple-500/70 transition-all duration-700 hover:scale-105 hover:rotate-2 animate-float"
                />

                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-4 border-l-4 border-cyan-400 rounded-tl-2xl animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-4 border-r-4 border-purple-500 rounded-br-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="text-center space-y-8">
            <h1 className="text-8xl font-[playwrite] text-white opacity-0 animate-fade-in-down">
              Hello,
            </h1>
            <h2 className="text-4xl font-[playwrite] text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 animate-fade-in-up">
              <span className="font-light">I'm</span> CodeRheem.
            </h2>

            {/* Social Links */}
            <p className="flex gap-6 justify-center pt-[-9] opacity-0 animate-fade-in-scale">
              <a
                href="mailto:your.email@example.com"
                className="p-1 bg-black text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://x.com/IbraheemAb31008"
                className="p-1 bg-black hover:bg-sky-600 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-sky-500/50 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="p-1 bg-black hover:bg-blue-800 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-700/50 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                className="p-1 bg-black hover:bg-gray-900 text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-800/50 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes pulseGlow {
        0%, 100% {
          opacity: 0.75;
        }
        50% {
          opacity: 1;
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      .animate-pulse-glow {
        animation: pulseGlow 2s ease-in-out infinite;
      }
      `}</style>
    </div>
  );
}
