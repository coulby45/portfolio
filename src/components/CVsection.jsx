import { X } from 'lucide-react';
import React, { useState } from 'react';
import cv from '../assets/cv/cv.pdf'; // Importez le fichier PDF depuis src

const CVSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id='cv' className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-dark mb-4">Mon CV</h2>
                    <p className="text-gray-600 mb-8">Consultez et téléchargez mon CV</p>
                </div>

                {/* Boîte d'aperçu */}
                <div className="flex flex-col items-center space-y-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full max-w-2xl p-8 border rounded-lg shadow-md bg-light hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-2 text-dark">Aperçu du CV</h3>
                            <p className="text-gray-600">Cliquez pour agrandir</p>

                            {/* Icône de document */}
                            <div className="mt-4 flex justify-center">
                                <svg
                                    className="w-24 h-24 text-primary group-hover:scale-110 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>

                    {/* Bouton de téléchargement */}
                    <a
                        href={cv}
                        download="Moncv.pdf"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                        </svg>
                        Télécharger mon CV
                    </a>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg max-w-6xl w-full h-[90vh] relative">
                            {/* Bouton fermeture */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Contenu du CV */}
                            <div className="h-full p-6">
                                <object
                                    data={cv}
                                    type="application/pdf"
                                    className="w-full h-full rounded-lg"
                                >
                                    <p>
                                        Il semble que votre navigateur ne puisse pas afficher le PDF.{' '}
                                        <a href={cv} download className="text-primary hover:underline">
                                            Cliquez ici pour le télécharger
                                        </a>
                                    </p>
                                </object>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CVSection;
