import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Hook personnalisé pour détecter quand un élément est visible
const useOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isVisible;
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  const footerRef = useRef(null);
  const isVisible = useOnScreen(footerRef);

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:abdoulkarimcoulibaly525@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/coulby45',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'www.linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328',
    }
  ];

  const navigationLinks = [
    { name: 'Accueil', id: 'top' },
    { name: 'A propos', id: 'A propos' },
    { name: 'Projets', id: 'projets' },
    { name: 'Compétences', id: 'competences' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          {/* Nom */}
          <h3 className={`text-2xl font-bold mb-8 transition-all duration-700 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Coulibaly Abdoul Karim
          </h3>
          
          {/* Liens sociaux */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-700 delay-${index * 100} hover:text-white hover:scale-110 hover:-translate-y-1
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Section de contact rapide */}
          <div className={`text-center mb-8 transition-all duration-700 delay-300 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="mb-2">Disponible pour de nouvelles opportunités</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              Contactez-moi <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          
          {/* Navigation du footer */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6 text-sm">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-700 delay-${400 + (index * 100)} transform
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className={`text-sm text-gray-500 transition-all duration-700 delay-700 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>© {currentYear} Coulibaly Abdoul Karim. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;