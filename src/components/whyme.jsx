import React, { useState } from 'react';
import { Brain, Rocket, Target, Users, Puzzle, Lightbulb } from 'lucide-react';

const WhyChooseMe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      icon: Brain,
      title: "Expertise Data Science",
      description: "Maîtrise approfondie des outils d'analyse de données et du machine learning",
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Passionné par les nouvelles technologies et toujours à l'affût des dernières avancées",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: Target,
      title: "Orienté Résultats",
      description: "Focalisé sur la création de valeur et l'atteinte d'objectifs concrets",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "Esprit d'équipe",
      description: "Excellence dans la collaboration et la communication en environnement professionnel",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: Puzzle,
      title: "Résolution de problèmes",
      description: "Approche analytique et créative pour résoudre des défis complexes",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "Capacité à proposer des solutions innovantes et à penser différemment",
      color: "from-teal-400 to-cyan-600"
    }
  ];

  const Particles = ({ active }) => (
    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0'}`}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle 2s ease-out infinite`,
            animationDelay: `${i * 0.2}s`,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full   p-6 bg-indigo-100 from-indigo-100 to-indigo-600">
      {/* Titre animé */}
      <div className="text-center mb-12 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 relative z-10">
          Pourquoi me choisir ?
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full transform transition-transform duration-500 hover:scale-x-150" />
      </div>

      {/* Grille de cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="relative group perspective"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className={`
                h-full p-6 rounded-xl 
                transition-all duration-500 transform
                ${hoveredCard === index ? 'scale-105 rotate-y-10' : 'scale-100 rotate-y-0'}
                bg-gradient-to-br ${reason.color}
                text-white shadow-lg
                cursor-pointer
                hover:shadow-2xl
              `}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icône avec animation */}
                <div className={`
                  p-4 bg-white/20 rounded-full
                  transform transition-all duration-500
                  ${hoveredCard === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                `}>
                  <reason.icon className="w-8 h-8" />
                </div>

                {/* Titre avec animation */}
                <h3 className={`
                  text-xl font-bold
                  transition-all duration-500
                  ${hoveredCard === index ? 'transform -translate-y-1' : ''}
                `}>
                  {reason.title}
                </h3>

                {/* Description avec fade in */}
                <p className={`
                  text-sm opacity-90
                  transition-all duration-500
                  ${hoveredCard === index ? 'opacity-100' : 'opacity-80'}
                `}>
                  {reason.description}
                </p>

                {/* Particules d'animation */}
                <Particles active={hoveredCard === index} />

                {/* Effet de brillance */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  transform transition-transform duration-1000
                  ${hoveredCard === index ? 'translate-x-full' : '-translate-x-full'}
                  pointer-events-none
                `} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles pour les animations */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
          }
        }

        .perspective {
          perspective: 1000px;
        }

        .rotate-y-10 {
          transform: rotateY(10deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
};

export default WhyChooseMe;