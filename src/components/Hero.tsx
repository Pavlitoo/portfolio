import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
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
    
    observer.observe(title);
    
    return () => {
      if (title) observer.unobserve(title);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-red-900/20 dark:from-blue-900/40 dark:to-red-900/40"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
        >
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Спорт і Програмування
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Поєдную спортивний дух із пристрастю до коду. Готовий до нових викликів у світі IT.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Зв'язатися
          </button>
          
          <button 
            onClick={() => {
              const skillsSection = document.getElementById('skills');
              if (skillsSection) {
                window.scrollTo({
                  top: skillsSection.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="px-8 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-colors duration-300"
          >
            Мої навички
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors"
          aria-label="Прокрутити вниз"
        >
          <ChevronDown size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;