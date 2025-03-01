import React, { useEffect, useRef } from 'react';
import { User, Trophy, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Про мене
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Спорт і програмування" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              Моя історія
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Я поєдную в собі спортивний дух та пристрасть до програмування. Моя спортивна кар'єра навчила мене дисципліні, наполегливості та вмінню працювати в команді — якості, які я тепер застосовую у світі IT.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Trophy size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Спортивний бекграунд</h4>
                  <p className="text-gray-600 dark:text-gray-400">Роки тренувань навчили мене досягати цілей та долати перешкоди.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                  <Code size={24} className="text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Програмування</h4>
                  <p className="text-gray-600 dark:text-gray-400">Постійно вдосконалюю свої навички в розробці, вивчаю нові технології.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  <User size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Особисті якості</h4>
                  <p className="text-gray-600 dark:text-gray-400">Цілеспрямованість, креативність та вміння швидко адаптуватися до змін.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;