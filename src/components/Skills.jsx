import React, { useState, useEffect } from 'react';
import ReactLogo from '../assets/skills/react.png';
import GitLogo from '../assets/skills/Git.png';
import GithubLogo from '../assets/skills/Github.png';
import PowerbiLogo from '../assets/skills/powerbi.png';
import Rlogo from '../assets/skills/R.jpg';
import PythonLogo from '../assets/skills/python.jpg';
import tailwindLogo from '../assets/skills/tailwind.png';
import sqlLogo from '../assets/skills/sql.png';
import phpLogo from '../assets/skills/php.png';
import kerasLogo from '../assets/skills/keras.png';
import tensorflowLogo from '../assets/skills/tensorflow.png';
import matplotlibLogo from '../assets/skills/matplotlib.jpg';
import PlotlyLogo from '../assets/skills/plotly.png';
import SeabornLogo from '../assets/skills/seaborn.png';
import numpyLogo from '../assets/skills/numpy.png';
import nodeLogo from '../assets/skills/node.jpg';
import pandas from '../assets/skills/pandas.png';
import scikitlearnLogo from '../assets/skills/scikitlearn.png';
import vscodeLogo from '../assets/skills/vscode.jpg';
import jupyterLogo from '../assets/skills/jupyter.png';
import mysqlLogo from '../assets/skills/mysql.png';


const SkillsCards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Développement Web");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const section = document.getElementById('compétences');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            category: "Développement Web",
            icon: "🌐",
            sections: [
                {
                    title: "Frontend",
                    skills: [
                        { name: "React", image: ReactLogo },
                        { name: "Tailwind CSS", image: tailwindLogo }
                    ]
                },
                {
                    title: "Backend",
                    skills: [
                        { name: "Node.js", image: nodeLogo },
                        { name: "SQL", image: sqlLogo },
                        { name: "PHP", image: phpLogo },
                    ]
                },
                {
                    title: "Base de données",
                    skills: [
                        { name: "MySQL", image: mysqlLogo },
                    ]
                }
            ]
        },
        {
            category: "Analyse de Données",
            icon: "📊",
            sections: [
                {
                    title: "Langages & Frameworks",
                    skills: [
                        { name: "Python", image: PythonLogo },
                        { name: "R", image: Rlogo },
                        { name: "NumPy", image: numpyLogo },
                        { name: "Pandas", image: pandas }
                    ]
                },
                {
                    title: "Visualisation",
                    skills: [
                        { name: "Seaborn", image: SeabornLogo },
                        { name: "Power BI", image: PowerbiLogo },
                        { name: "Matplotlib", image: matplotlibLogo },
                        { name: "Plotly", image: PlotlyLogo }
                    ]
                },
                {
                    title: "Machine Learning",
                    skills: [
                        { name: "Scikit-learn", image: scikitlearnLogo },
                        { name: "TensorFlow", image: tensorflowLogo },
                        { name: "Keras", image: kerasLogo }
                    ]
                }
            ]
        },
        {
            category: "Outils & DevOps",
            icon: "🛠",
            sections: [
                {
                    title: "Contrôle de Version",
                    skills: [
                        { name: "Git", image: GitLogo },
                        { name: "GitHub", image: GithubLogo },
                    ]
                },
                {
                    title: "Productivité",
                    skills: [
                        { name: "VS Code", image: vscodeLogo },
                        { name: "Jupyter", image: jupyterLogo }
                    ]
                }
            ]
        }
    ];

    return (
        <section
            id="compétences"
            className="py-16 sm:py-24 bg-gradient-to-b from-indigo-100 to-indigo-600"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre de la section avec animation */}
                <div
                    className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Compétences Techniques
                    </h2>
                    <div className="w-20 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>
    
                {/* Navigation des catégories */}
                <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-4">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.category}
                            onClick={() => setActiveCategory(cat.category)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                                activeCategory === cat.category
                                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                            }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
                            {cat.category}
                        </button>
                    ))}
                </div>
    
                {/* Contenu des compétences */}
                <div className="space-y-8 sm:space-y-12">
                    {skillCategories
                        .filter((cat) => cat.category === activeCategory)
                        .map((category) => (
                            <div
                                key={category.category}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                            >
                                {category.sections.map((section, sectionIndex) => (
                                    <div
                                        key={section.title}
                                        className={`bg-white rounded-2xl shadow-xl p-4 sm:p-6 transform transition-all duration-500 hover:shadow-2xl ${
                                            isVisible
                                                ? 'translate-y-0 opacity-100'
                                                : 'translate-y-10 opacity-0'
                                        }`}
                                        style={{
                                            transitionDelay: `${sectionIndex * 150}ms`,
                                        }}
                                    >
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 pb-2 border-b-2 border-indigo-100">
                                            {section.title}
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                            {section.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="group p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-all duration-300"
                                                >
                                                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                                                        <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center rounded-lg bg-white shadow-md group-hover:shadow-lg transition-all duration-300">
                                                            <img
                                                                src={skill.image}
                                                                alt={skill.name}
                                                                className="w-8 sm:w-12 h-8 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                                            />
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-indigo-600">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};    

export default SkillsCards;