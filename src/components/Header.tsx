import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode,
  mobileMenuOpen,
  toggleMobileMenu,
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    { id: 'hero', label: 'Головна' },
    { id: 'about', label: 'Про мене' },
    { id: 'skills', label: 'Навички' },
    { id: 'contact', label: 'Контакти' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Портфоліо
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                activeSection === item.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu size={24} className="text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;