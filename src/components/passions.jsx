import React, { useState } from 'react';
import { Camera, Music, Train } from 'lucide-react';





const PassionsSection = () => {
  const [activePassion, setActivePassion] = useState(null);

  const passions = [
    {
      id: 1,
      title: "Photographie",
      description: "Capturer des moments uniques à travers mon objectif",
      icon: <Camera className="w-8 h-8" />,
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Musique",
      description: "Explorer différents genres et instruments",
      icon: <Music className="w-8 h-8" />,
      imageUrl: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Voyage",
      description: "Découvrir de nouvelles cultures et horizons",
      icon: <Train className="w-8 h-8" />,
      imageUrl: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id='hobbies' className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-indigo-900">
          Mes Passions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {passions.map((passion) => (
            <div
              key={passion.id}
              className="group relative transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setActivePassion(passion.id)}
              onMouseLeave={() => setActivePassion(null)}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${activePassion === passion.id ? 'opacity-40' : 'opacity-0'}`} />
                
                <img
                  src={passion.imageUrl}
                  alt={passion.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className={`absolute inset-0 flex flex-col justify-center items-center p-6 text-white transform transition-all duration-300 ${
                  activePassion === passion.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <div className="bg-indigo-600/80 p-4 rounded-full mb-4">
                    {passion.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{passion.title}</h3>
                  <p className="text-center text-lg">{passion.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;