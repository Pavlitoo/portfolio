import React from 'react';
import { Github, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Портфоліо
            </span>
            <p className="mt-2 text-sm text-gray-400">
              Спорт і програмування — моя унікальна комбінація
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Pavlitoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.instagram.com/l.pashaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:pasalugovij@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Всі права захищено
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <p className="text-sm text-gray-500">
              Telegram: @lpashaaa
            </p>
            <button 
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Нагору ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;