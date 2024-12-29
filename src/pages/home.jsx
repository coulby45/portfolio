import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';
import AboutSection from '../components/About';
import SkillsCards from '../components/Skills';
import PortfolioCarousel from '../components/Projets';
import Formation from '../components/formation';
import WhyChooseMe from '../components/whyme';
import Footer from '../components/footer';
import ContactSection from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <div id="top">
      <Header />
      <div id='A propos'>
        <AboutSection />
      </div>
      
      <div id="competences">
        <SkillsCards />
      </div>
      <div id="projets">
        <PortfolioCarousel />
      </div>
      <div id="formation">
        <Formation />
      </div>
      <WhyChooseMe />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;