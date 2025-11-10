import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
    const frontendSkil = [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "Canva", icon: "canva" },
    { name: "Vue", icon: "vue" },
    { name: "Netlify", icon: "netlify" }
]
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-linear-to-b from-gray-900 via-black to-gray-900 text-white px-4 "
    >
      <div className="max-w-4xl w-full text-center p-8">
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          About Me
        </h2>
        <p className="text-lg mb-4 border-3 shadow-[0_0_15px_rgba(34,197,94,0.5)] border-cyan-400 rounded-3xl p-15 font-serif text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
          I specialize in front-end development, focusing on building responsive
          and user-friendly interfaces. My journey in web development started
          with a curiosity to understand how the web works, and it has since
          evolved into a full-fledged career. I enjoy working with modern
          technologies like React, Tailwind CSS, and JavaScript to bring my
          ideas to life.
        </p>
      </div>
      <div className="flex flex-col justify-center ">
        <motion.div
            className="rounded-xl p-8 mb-8"
            variants={fadeInUp}
          >
            <div className="rounded-xl p-6">
                <h3 className="text-3xl text-center font-bold mb-6 bg-linear-to-r
                bg-clip-text font-[cursive]">
                🚀 Frontend Skills
                </h3>
                <motion.div
                  className="flex flex-wrap justify-center gap-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                    {frontendSkil.map((skill, _index) => (
                        <motion.div
                            key={skill.name}
                            className="items-center p-2 rounded-lg"
                            variants={{
                              initial: { opacity: 0, scale: 0.8 },
                              animate: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <i className={`devicon-${skill.icon}-plain text-xl mr-2 text-cyan-500`}></i>
                            <span className="bg-linear-to-r  after:from-cyan-400 after:to-purple-400  text-purple-400 py-2 px-5 rounded-full text-sm border-2 border-cyan-400/40 font-semibold
                            hover:from-purple-500/30 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)] hover:scale-110 transition-all" style={{ fontFamily: "Poppins, sans-serif" }}>{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
