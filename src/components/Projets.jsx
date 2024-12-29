import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ia from '../assets/projets/ia.png';
import info from '../assets/projets/info.png';
import data from '../assets/projets/data.png';
import velo from '../assets/projets/velo.png';

const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, isVisible]);

  return isVisible;
};

const PortfolioCarousel = () => {
  const items = [
    {
      id: 1,
      title: "Défi de la nuit de l'info 2024",
      description: "Réalisaion d'une application web éducative et interactive qui explore les parallèles fascinants entre le corps humain et l'Océan, mettant en lumière leurs similarités dans le fonctionnement et les dysfonctionnements. Grâce à une interface intuitive et un contenu multimédia engageant, l'application sensibilise à l'importance cruciale de préserver l'Océan, garant de la vie sur Terre.",
      tools: "React, Tailwind CSS, Framer Motion , node.js",
      demoLink: "https://zitzitoune.zaidou-dataworks.com",
      image: info
    },
    {
      id: 2,
      title: "Projet scolaire IA forhumanforyou",
      description: "Le projet IA for HumanForYou visait à analyser les facteurs influençant le taux élevé de rotation des employés (15 %) au sein de l'entreprise pharmaceutique indienne HumanForYou. En utilisant des données variées (RH, évaluations, enquêtes, horaires), l'objectif était de développer des modèles prédictifs pour identifier des pistes d'amélioration afin de motiver les employés à rester et ainsi réduire les impacts négatifs liés au turnover.",
      tools: "Python, Scikit-learn, pandas, matplotlib",
      demoLink: "#",
      image: ia
    },
    {
      id: 4,
      title: "Analyse de données de vélos en libre-service",
      description: "Dans le cadre d'un projet scolaire, j'ai analysé les données d'un service de vélos en libre-service en utilisant Python pour l'extraction et le nettoyage, ainsi que Power BI pour la création de tableaux de bord interactifs. J'ai visualisé les tendances d'utilisation avec matplotlib et seaborn, tout en suivant les KPIs clés tels que le taux d'utilisation et la rotation des vélos.",
      tools: "Python, Power BI, matplotlib, seaborn",
      image: velo
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section 
      ref={sectionRef}
      id='projets' 
      className="relative py-12 md:py-24 bg-indigo-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mb-8 md:mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Projets
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative min-h-[650px] md:min-h-[500px] mb-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute top-0 left-0 w-full"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <div className="h-72 md:h-[500px] relative overflow-hidden">
                      <img
                        src={items[currentIndex].image}
                        alt={items[currentIndex].title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {items[currentIndex].title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 mb-6">
                      {items[currentIndex].description}
                    </p>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 italic">
                        <span className="font-semibold">Technologies utilisées:</span> {items[currentIndex].tools}
                      </p>
                      <div className="flex gap-4">
                        {items[currentIndex].demoLink && items[currentIndex].demoLink !== "#" && (
                          <a
                            href={items[currentIndex].demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Démo en ligne
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-900" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mb-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-indigo-300 hover:bg-indigo-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;