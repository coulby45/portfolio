import React from 'react';
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "abdoulkarimcoulibaly525@gmail.com",
      color: "from-pink-500 to-rose-500",
      delay: "0"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Téléphone",
      value: "+33 7 68 42 55 95",
      color: "from-purple-500 to-indigo-500",
      delay: "100"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Localisation",
      value: "Paris, France",
      color: "from-blue-500 to-cyan-500",
      delay: "200"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", color: "from-gray-600 to-gray-900", link:"https://github.com/coulby45" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", color: "from-blue-400 to-blue-600", link:"https://www.linkedin.com/in/abdoul-karim-coulibaly-3ba1a1328" },
    { icon: <Mail className="w-6 h-6" />, label: "Email", color: "from-red-400 to-red-600", link:"mailto:abdoulkarimcoulibaly525@gmail.com"}
  ];

  return (
    <section id='contact' className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Cercles décoratifs animés en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full 
              animate-float transform -translate-y-1/2 blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '15s'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">
          Me Contacter
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid gap-12">
          {/* Cartes de contact avec animations */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${method.delay}ms` }}
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 
                  hover:-translate-y-2 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 
                    transition-opacity duration-500`} />
                  <div className="relative flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white 
                      group-hover:scale-110 transform transition-transform duration-500`}>
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{method.title}</h3>
                      <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Liens sociaux avec animations */}
          <div className="flex justify-center space-x-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target='_blank'
                className="group relative"
                aria-label={social.label}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-full opacity-0 
                  group-hover:opacity-20 transform transition-all duration-500 blur-xl group-hover:scale-150`} />
                <div className="relative bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform 
                  transition-all duration-500 group-hover:-translate-y-2">
                  <div className="group-hover:animate-bounce">{social.icon}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;