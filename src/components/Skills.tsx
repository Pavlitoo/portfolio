import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'sport';
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate progress bars
            const progressBars = section.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('w-full');
              }, 300 + index * 100);
            });
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

  const programmingSkills: Skill[] = [
    { name: 'HTML/CSS', level: 85, category: 'programming', color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, category: 'programming', color: 'bg-yellow-500' },
    { name: 'React', level: 75, category: 'programming', color: 'bg-blue-400' },
    { name: 'TypeScript', level: 70, category: 'programming', color: 'bg-blue-600' },
    { name: 'Node.js', level: 65, category: 'programming', color: 'bg-green-600' },
  ];

  const sportSkills: Skill[] = [
    { name: 'Витривалість', level: 90, category: 'sport', color: 'bg-red-500' },
    { name: 'Командна робота', level: 85, category: 'sport', color: 'bg-red-600' },
    { name: 'Дисципліна', level: 95, category: 'sport', color: 'bg-red-400' },
    { name: 'Стратегічне мислення', level: 80, category: 'sport', color: 'bg-red-700' },
    { name: 'Адаптивність', level: 85, category: 'sport', color: 'bg-red-300' },
  ];

  const renderSkill = (skill: Skill) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full progress-bar transition-all duration-1000 ease-out`} 
          style={{ width: '0%', transitionProperty: 'width', transitionDuration: '1s' }}
          data-width={`${skill.level}%`}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Мої навички
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Програмування</h3>
            {programmingSkills.map(renderSkill)}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-red-600 dark:text-red-400">Спортивні навички</h3>
            {sportSkills.map(renderSkill)}
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Як спорт допомагає мені в програмуванні
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Дисципліна і фокус</h4>
              <p className="text-gray-600 dark:text-gray-400">Спорт навчив мене зосереджуватися на завданнях і доводити їх до кінця, що критично важливо в програмуванні.</p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Витривалість</h4>
              <p className="text-gray-600 dark:text-gray-400">Здатність працювати над складними проблемами тривалий час без втрати ефективності.</p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Командна робота</h4>
              <p className="text-gray-600 dark:text-gray-400">Вміння ефективно співпрацювати з іншими для досягнення спільної мети.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;