import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const links = {
  github: "https://github.com/coulby45",
  linkedin: "https://www.linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328",
  mail: "mailto:abdoulkarim.coulibaly@viacesi.fr"
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle scroll effect
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
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''
    }`}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button 
            onClick={() => scrollToSection('top')} 
            className="-m-1.5 p-1.5"
          >
            <span className="text-xl font-bold text-indigo-600 hover:scale-110 transition-transform duration-300">
              Coulibaly Abdoul
            </span>
          </button>
        </div>

        {/* Right section */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
          >
            Contact me
          </button>
          <Link
            to="/cv"
            className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
          >
            Voir CV
          </Link>
          <div className="flex gap-x-4 ml-4 pl-4 border-l border-gray-200">
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

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-300"
              >
                Contact me
              </button>
              <Link
                to="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 text-center"
              >
                Voir CV
              </Link>
              <div className="flex gap-6 pt-4">
                {Object.entries(links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                  >
                    {key === 'github' && <Github className="h-6 w-6" />}
                    {key === 'linkedin' && <Linkedin className="h-6 w-6" />}
                    {key === 'mail' && <Mail className="h-6 w-6" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;