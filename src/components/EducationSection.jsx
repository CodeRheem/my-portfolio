import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 20px 40px rgba(34, 211, 238, 0.4)",
    transition: { duration: 0.3 }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.4
    }
  })
};

export default function EducationSection() {
  const education = [
    { degree: "Bachelor's in Computer Science", school: "Obafemi Awolowo University", year: "2022-2027" },
    { degree: "Frontend Development Bootcamp", school: "AltSchool Africa", year: "2024/25" },
    { degree: "High School Diploma", school: "Ota Total Academy", year: "2020-2023" }
  ];

  const experience = [
    { role: "Frontend Developer", company: "Tech Company", duration: "2023-Present" },
    { role: "Junior Developer", company: "Startup Inc", duration: "2022-2023" },
    { role: "Intern", company: "Digital Agency", duration: "2021-2022" }
  ];

  return (
    <div className="flex justify-center flex-wrap gap-10 px-4 py-16">
      {/* Education Card */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        variants={cardVariants}
        className="relative bg-linear-to-br from-gray-900 via-cyan-900/20 to-gray-900 border-2 border-cyan-500/50 rounded-2xl p-8 w-full md:w-96 backdrop-blur-lg shadow-2xl overflow-hidden"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradientEdu)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradientEdu" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Education
            </h3>
          </div>

          {/* Education List */}
          <ul className="space-y-4">
            {education.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                className="border-l-4 border-cyan-500 pl-4 py-2 hover:border-blue-500 transition-colors"
              >
                <h4 className="text-lg font-semibold text-cyan-300">{item.degree}</h4>
                <p className="text-gray-400 text-sm">{item.school}</p>
                <p className="text-gray-500 text-xs">{item.year}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        variants={cardVariants}
        className="relative bg-linear-to-br from-gray-900 via-purple-900/20 to-gray-900 border-2 border-purple-500/50 rounded-2xl p-8 w-full md:w-96 backdrop-blur-lg shadow-2xl overflow-hidden"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#gradientExp)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="gradientExp" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500" style={{ fontFamily: "Orbitron, sans-serif" }}>
              Experience
            </h3>
          </div>

          {/* Experience List */}
          <ul className="space-y-4">
            {experience.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                className="border-l-4 border-purple-500 pl-4 py-2 hover:border-pink-500 transition-colors"
              >
                <h4 className="text-lg font-semibold text-purple-300">{item.role}</h4>
                <p className="text-gray-400 text-sm">{item.company}</p>
                <p className="text-gray-500 text-xs">{item.duration}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}