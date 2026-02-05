
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'projects' | 'profile'>('home');

  // Handle browser scroll reset on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentView={view} setView={setView} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero setView={setView} />
            <About />
            <Skills />
            <Impact />
            <Contact />
          </>
        ) : view === 'projects' ? (
          <Projects setView={setView} />
        ) : (
          <Profile setView={setView} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
