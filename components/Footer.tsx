
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-slate-400">
            VS<span className="text-slate-200">.</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Vivek Saurav. All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">Twitter</a>
             <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
