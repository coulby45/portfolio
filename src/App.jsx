// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import de React Router
import Home from './pages/home'; // Importation de la page d'accueil
import CV from './pages/cv'; // Importation de la page CV
import Header from './components/Header'; // Importation du Header
import Footer from './components/footer'; // Importation du Footer

const App = () => {
  return (
    <Router> {/* Enveloppe l'application pour activer le routing */}
       
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/cv" element={<CV />} /> {/* Route pour la page CV */}
      </Routes>
      
 {/* Le Footer est affiché sur toutes les pages */}
    </Router>
  );
};

export default App;
