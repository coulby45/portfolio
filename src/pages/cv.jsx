import Header from '../components/header_2';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';



import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Award, Book, Code, Languages, Heart, Download } from 'lucide-react';

const CV = () => {
  const [downloading, setDownloading] = useState(false);
  
  
  const personalInfo = {
    name: "COULIBALY Abdoul Karim",
    title: "Etudiant en Recherche de Stage - Data scientist",
    period: "Janvier à Avril",
    email: "abdoulkarim.coulibaly@viacesi.fr",
    phone: "07 68 42 55 95",
    location: "Saint-Nazaire, France",
    linkedin: "linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328",
    profile: "Passionné par l'analyse de données et la transformation des informations en décisions stratégiques, je maîtrise les outils et méthodologies pour traiter, visualiser et exploiter des données complexes. Mon objectif : accompagner les entreprises dans l'amélioration de leurs performances grâce à des insights actionnables."
  };

  const handleDownload = () => {
    setDownloading(true);
    // Simulation du téléchargement
    setTimeout(() => {
      setDownloading(false);
      // Ici vous pouvez ajouter la logique réelle de téléchargement du PDF
    }, 1500);
  };

  // Composants existants
  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-indigo-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-2 mb-6">
      <div className="bg-indigo-100 p-2 rounded-lg">
        <Icon className="w-6 h-6 text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8 ">
      {/* Bouton de téléchargement flottant */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="top-8 right-8 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg 
                 hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2
                 hover:scale-105 active:scale-95 disabled:opacity-50"
      >
        <Download className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''}`} />
        <span>{downloading ? 'Téléchargement...' : 'Télécharger PDF'}</span>
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transform  transition-all duration-300">
        {/* Le reste du code du CV reste identique */}
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight animate-fade-in">{personalInfo.name}</h1>
            <p className="text-2xl font-light">{personalInfo.title}</p>
            <div className="flex flex-wrap gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2 hover:text-indigo-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="flex gap-6">
              <a href={`https://${personalInfo.linkedin}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 hover:bg-white/20 rounded-lg px-4 py-2 transition-all">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" 
                 className="flex items-center gap-2 hover:bg-white/20 rounded-lg px-4 py-2 transition-all">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-12 space-y-12">
          {/* Profile Section */}
          <section className="hover:bg-indigo-50/50 p-6 rounded-xl transition-colors">
            <SectionTitle icon={Award} title="Profil" />
            <p className="text-gray-600 leading-relaxed text-lg">{personalInfo.profile}</p>
          </section>

          {/* Formation Section */}
          <section className="hover:bg-indigo-50/50 p-6 rounded-xl transition-colors">
            <SectionTitle icon={Book} title="Formation" />
            <div className="space-y-8">
              {[
                {
                  period: "09/2024 – En cours",
                  title: "Cycle ingénieur en sciences du numérique",
                  school: "CESI",
                  description: "Analyse de données, Programmation Python, Gestion de projet, Gouvernance digitale, Statistiques avancées.",
                  location: "Saint-Nazaire, France"
                },
                {
                  period: "09/2022 – 06/2024",
                  title: "Classes préparatoires PCSI/PSI",
                  school: "Institut national polytechnique Houphouët Boigny",
                  description: "Formation approfondie en mathématiques appliquées et sciences de l'ingénieur.",
                  location: "Yamoussoukro, Côte d'Ivoire"
                }
              ].map((education, index) => (
                <div key={index} 
                     className="grid grid-cols-1 md:grid-cols-4 gap-6 hover:bg-white/80 p-4 rounded-lg transition-colors">
                  <div className="text-indigo-600 font-medium">{education.period}</div>
                  <div className="md:col-span-3">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{education.title}</h3>
                    <p className="text-gray-700 font-medium mb-2">{education.school}</p>
                    <p className="text-gray-600 mb-2">{education.description}</p>
                    <p className="text-gray-500 text-sm">{education.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Compétences Section */}
          <section className="hover:bg-indigo-50/50 p-6 rounded-xl transition-colors">
            <SectionTitle icon={Code} title="Compétences" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-gray-800 mb-6">Compétences techniques</h3>
                <div className="space-y-4">
                  <SkillBar skill="Python (Pandas, NumPy)" level={90} />
                  <SkillBar skill="Machine Learning (Scikit-learn, Keras)" level={85} />
                  <SkillBar skill="SQL & MySQL" level={85} />
                  <SkillBar skill="Power BI & Visualisation" level={75} />
                  <SkillBar skill="React & Node.js" level={70} />
                  <SkillBar skill="PHP" level={70} />
                  <SkillBar skill="Django" level={70} />


                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-6">Soft skills</h3>
                <div className="space-y-4">
                  <SkillBar skill="Rigueur" level={95} />
                  <SkillBar skill="Communication" level={95} />
                  <SkillBar skill="Gestion de projet" level={90} />
                  <SkillBar skill="Travail d'équipe" level={90} />
                  <SkillBar skill="Adaptabilité" level={85} />
                  <SkillBar skill="Leadership" level={80} />
                  <SkillBar skill="Créativité" level={80}/>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Langues et Centres d'intérêt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="hover:bg-indigo-50/50 p-6 rounded-xl transition-colors">
              <SectionTitle icon={Languages} title="Langues" />
              <div className="space-y-4">
                <SkillBar skill="Français" level={100} />
                <SkillBar skill="Anglais (TOEIC 775)" level={75} />
              </div>
            </section>
            
            <section className="hover:bg-indigo-50/50 p-6 rounded-xl transition-colors">
              <SectionTitle icon={Heart} title="Centres d'intérêt" />
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Taekwondo (3e Dan)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Basket-ball & Volley-ball</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Innovation en Data Science</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Jeu d'échecs (1200 elo)</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
    </div>
    
    </div>
    <Footer />
    </>
  );
};

export default CV;