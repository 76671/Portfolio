
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentView: 'home' | 'projects' | 'profile';
  setView: (view: 'home' | 'projects' | 'profile') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, view: 'home' | 'projects' | 'profile', sectionId?: string) => {
    e.preventDefault();
    setView(view);
    if (sectionId && view === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-2xl font-bold text-blue-900 tracking-tight"
            >
              VS<span className="text-blue-600">.</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={(e) => handleNavClick(e, 'home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-900'}`}
              >
                Home
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'profile')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'profile' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-900'}`}
              >
                Profile
              </button>
              <button
                onClick={(e) => handleNavClick(e, 'projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentView === 'projects' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-900'}`}
              >
                Projects
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-slate-600 hover:text-blue-900 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
