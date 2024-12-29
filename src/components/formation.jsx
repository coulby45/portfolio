import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import CESILOGO from '../assets/schools/cesi.png';
import INHBLOGO from '../assets/schools/inphb.jpeg';
import LTAILOGO from '../assets/schools/lta.png';

const EducationCard = ({ years, degree, school, location, description, imageUrl }) => (
  <div className="group bg-indigo-100 from-indigo-100 to-indigo-600 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Côté gauche - Timeline et Image */}
      <div className="md:w-1/3 space-y-4">
        <div className="flex items-center space-x-2 text-blue-600">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">{years}</span>
        </div>
        
        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={`${school}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
      </div>
      
      {/* Côté droit - Contenu */}
      <div className="md:w-2/3 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {degree}
        </h3>
        
        <div className="flex items-start space-x-2 text-gray-700">
          <MapPin className="w-5 h-5 mt-1 text-blue-600 flex-shrink-0" />
          <div>
            <p className="font-semibold">{school}</p>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const Education = () => {
  const educationData = [
    {
      id: 1,
      years: "2024 - 2027",
      degree: "Cycle ingénieur en sciences du numérique",
      school: "CESI de saint-nazaire",
      location: "Saint-Nazaire, France",
      description: "Spécialisation en data science et intelligence artificielle",
      imageUrl: CESILOGO 
    },
    {
      id: 2,
      years: "2022 - 2024",
      degree: "Classes préparatoires aux grandes écoles PCSI/PSI",
      school: "Institut national Houphouët-Boigny",
      location: "Yamoussoukro, Côte d'Ivoire",
      description: "Formation approfondie en mathematiques appliquées,informatique et sciences de l'ingénieur",
      imageUrl: INHBLOGO 
    },
    {
      id: 3,
      years: "2019 - 2022",
      degree: "Baccalauréat série E (Mathématiques et Techniques de l'Ingénieur)",
      school: "Lycée Technique de d'Abidjan",
      location: "Bordeaux, France",
      description: "Spécialisation en mathématiques et techniques de l'ingénieur",
      imageUrl: LTAILOGO 
    }
  ];

  return (
    <section id="formation" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Formation</h2>
        </div>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;