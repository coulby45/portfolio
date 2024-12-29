import React, { useState, useEffect } from 'react';
import { Code2, Heart, Target, Coffee, Book, Rocket } from 'lucide-react';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const aboutSection = document.getElementById('a propos');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => observer.disconnect();
    }, []);

    const passions = [
        { icon: <Code2 />, title: "Développement", text: "Passion pour le code propre et les nouvelles technologies" },
        { icon: <Book />, title: "Apprentissage", text: "Toujours en quête de nouvelles connaissances" },
        { icon: <Coffee />, title: "Design", text: "Créer des interfaces élégantes et intuitives" }
    ];

    const values = [
        { icon: <Heart />, title: "Excellence", description: "Recherche constante de la qualité et de l'innovation" },
        { icon: <Target />, title: "Impact", description: "Créer des solutions qui font vraiment la différence" },
        { icon: <Rocket />, title: "Croissance", description: "Évolution continue et adaptation aux nouvelles technologies" }
    ];

    return (
        <section id="a propos" className="bg-gray-50 py-24 relative overflow-hidden">
            {/* Cercles décoratifs animés */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl animate-pulse opacity-70" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-200 rounded-full blur-3xl animate-pulse opacity-70" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre principal */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full" />
                </div>

                {/* Présentation personnelle */}
                <div className={`bg-white rounded-2xl shadow-xl p-8 mb-16 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        En tant qu’étudiant passionné par le développement web, la data science et l’intelligence artificielle, je combine créativité, compétences techniques et soif d'apprendre pour réaliser des projets innovants. Spécialisé en React et Node.js, je développe des applications web performantes tout en explorant les possibilités offertes par les données et l’IA.


                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                        Mon intérêt pour la data et l’IA m’amène à approfondir mes connaissances en analyse de données, machine learning et automatisation des processus. Je suis convaincu que ces technologies peuvent transformer des idées complexes en solutions intelligentes et accessibles. En constante quête d'amélioration, je cherche à repousser mes limites, à apprendre de nouvelles techniques et à intégrer ces avancées dans mes projets web pour créer des expériences utilisateurs exceptionnelles.

                        </p>
                    </div>
                </div>

                {/* Passions */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {passions.map((passion, index) => (
                        <div
                            key={passion.title}
                            className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-700 hover:scale-105 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                {React.cloneElement(passion.icon, { size: 24 })}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{passion.title}</h3>
                            <p className="text-gray-600">{passion.text}</p>
                        </div>
                    ))}
                </div>

                {/* Valeurs et objectifs */}
                <div className="bg-indigo-50 rounded-2xl p-8">
                    <h3 className={`text-2xl font-bold text-center mb-8 ${
                        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                    }`}>
                        Mes valeurs et objectifs
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`transform transition-all duration-700 ${
                                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white mr-4">
                                        {React.cloneElement(value.icon, { size: 20 })}
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                                </div>
                                <p className="text-gray-600 pl-14">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;