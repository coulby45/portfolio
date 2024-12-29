import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import image from '../assets/IMG_1015.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const links = {
    github: "https://github.com/coulby45",
    linkedin: "https://www.linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328",
    mail: "mailto:abdoulkarim.coulibaly@viacesi.fr"
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fullText = "Développeur Full Stack";
    let currentIndex = 0;
    let mounted = true;

    const animateText = () => {
      if (!mounted) return;
      
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(animateText, 100);
      }
    };

    setTimeout(animateText, 500);
    setIsVisible(true);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''
      }`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex">
            <Link
              to="/"
              className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-indigo-600 hover:scale-110 transition-transform duration-300">
                Coulibaly Abdoul
              </span>
            </Link>
          </div>

          {/* Right buttons and social icons */}
          <div className="flex items-center space-x-6">
            

            {/* Navigation buttons */}
            <a
              href="#contact"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
            >
              Contact me
            </a>
            <Link
              to="/cv"
              className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
            >
              Voir CV
            </Link>

             {/* Social Icons */}
            <div className="hidden md:flex gap-4">
              {Object.entries(links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 transform hover:rotate-12"
                >
                  {key === 'github' && <Github className="h-5 w-5" />}
                  {key === 'linkedin' && <Linkedin className="h-5 w-5" />}
                  {key === 'mail' && <Mail className="h-5 w-5" />}
                </a>
              ))}
            </div> 

          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Animated background */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className={`text-center lg:text-left ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-1000`}>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </h1>
              <p className={`mt-6 text-lg leading-8 text-gray-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 delay-500`}>
                Étudiant en ingénierie informatique, passionné par le développement web, la data science et l'intelligence artificielle. 
                J'explore et conçois des solutions innovantes en combinant mes compétences techniques en React, node js et Python, tout en renforçant ma maîtrise des outils modernes de développement.
              </p>
              <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-1000 delay-700`}>
                <Link
                  to="/cv"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
                >
                  Voir mon CV
                </Link>
                <a 
                  href="#contact" 
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-300 flex items-center justify-center lg:justify-start"
                >
                  Me contacter <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-1000 delay-300`}>
              <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full bg-indigo-100 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-indigo-200 animate-spin-slow-reverse"></div>
                <div className="absolute inset-4 rounded-full bg-white"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src={image}
                    alt="Portrait"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-600/10 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-indigo-600/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;