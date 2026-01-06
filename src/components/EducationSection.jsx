import React, { useState, useEffect, useRef } from "react";

export default function EducationSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleItems, setVisibleItems] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsRef = useRef([]);
  const itemsRef = useRef({});

  const education = [
    { degree: "Bachelor's in Computer Science", school: "Obafemi Awolowo University", year: "2022-2027" },
    { degree: "Frontend Development Bootcamp", school: "AltSchool Africa", year: "2024/25" },
    { degree: "High School Diploma", school: "Ota Total Academy", year: "2020-2023" }
  ];

  const experience = [
    { role: "Frontend Developer", company: "NIL", duration: "2023-Present" },
    { role: "Junior Developer", company: "Startup Inc", duration: "2022-2023" },
    { role: "Intern", company: "Digital Agency", duration: "2026" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.cardIndex);
          setTimeout(() => {
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }, index * 200);
        }
      });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cardIndex = entry.target.dataset.cardIndex;
          const itemIndex = parseInt(entry.target.dataset.itemIndex);
          setTimeout(() => {
            setVisibleItems(prev => ({
              ...prev,
              [`${cardIndex}-${itemIndex}`]: true
            }));
          }, itemIndex * 100);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach(card => {
      if (card) cardObserver.observe(card);
    });

    Object.values(itemsRef.current).forEach(item => {
      if (item) itemObserver.observe(item);
    });

    return () => {
      cardObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Poppins:wght@400;600&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .card-visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .item-visible {
          animation: fadeInLeft 0.4s ease-out forwards;
        }
        
        .card-hover {
          transform: scale(1.05) rotateY(5deg);
          box-shadow: 0 20px 40px rgba(34, 211, 238, 0.4);
        }
        
        .card-hover-purple {
          transform: scale(1.05) rotateY(5deg);
          box-shadow: 0 20px 40px rgba(168, 85, 247, 0.4);
        }
        
        .bg-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        
        .gradient-text-cyan {
          background: linear-gradient(to right, #22d3ee, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-purple {
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <div className="flex justify-center flex-wrap gap-10 px-4 py-16">
        {/* Education Card */}
        <div
          ref={el => cardsRef.current[0] = el}
          data-card-index="0"
          className={`relative bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 border-2 border-cyan-500/50 rounded-2xl p-8 w-full md:w-96 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 ${
            visibleCards.includes(0) ? 'card-visible' : 'opacity-0'
          } ${hoveredCard === 0 ? 'card-hover' : ''}`}
          style={{ fontFamily: "Poppins, sans-serif" }}
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 bg-glow"></div>
          
          <div className="relative z-10">
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
              <h3 className="text-3xl font-bold gradient-text-cyan" style={{ fontFamily: "Orbitron, sans-serif" }}>
                Education
              </h3>
            </div>

            <ul className="space-y-4">
              {education.map((item, index) => (
                <li
                  key={index}
                  ref={el => itemsRef.current[`edu-${index}`] = el}
                  data-card-index="edu"
                  data-item-index={index}
                  className={`border-l-4 border-cyan-500 pl-4 py-2 hover:border-blue-500 transition-colors ${
                    visibleItems[`edu-${index}`] ? 'item-visible' : 'opacity-0'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-cyan-300">{item.degree}</h4>
                  <p className="text-gray-400 text-sm">{item.school}</p>
                  <p className="text-gray-500 text-xs">{item.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience Card */}
        <div
          ref={el => cardsRef.current[1] = el}
          data-card-index="1"
          className={`relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-2 border-purple-500/50 rounded-2xl p-8 w-full md:w-96 backdrop-blur-lg shadow-2xl overflow-hidden transition-all duration-300 ${
            visibleCards.includes(1) ? 'card-visible' : 'opacity-0'
          } ${hoveredCard === 1 ? 'card-hover-purple' : ''}`}
          style={{ fontFamily: "Poppins, sans-serif" }}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 bg-glow"></div>
          
          <div className="relative z-10">
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
              <h3 className="text-3xl font-bold gradient-text-purple" style={{ fontFamily: "Orbitron, sans-serif" }}>
                Experience
              </h3>
            </div>

            <ul className="space-y-4">
              {experience.map((item, index) => (
                <li
                  key={index}
                  ref={el => itemsRef.current[`exp-${index}`] = el}
                  data-card-index="exp"
                  data-item-index={index}
                  className={`border-l-4 border-purple-500 pl-4 py-2 hover:border-pink-500 transition-colors ${
                    visibleItems[`exp-${index}`] ? 'item-visible' : 'opacity-0'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-purple-300">{item.role}</h4>
                  <p className="text-gray-400 text-sm">{item.company}</p>
                  <p className="text-gray-500 text-xs">{item.duration}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}