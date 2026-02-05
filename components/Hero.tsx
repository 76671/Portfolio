
import React from 'react';

interface HeroProps {
  setView: (view: 'home' | 'projects' | 'profile') => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=1mc7rNIJO7zK7OvFKXssF7_2f5588yM-r";

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-900">Vivek Saurav</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-medium mt-2 block">
                Data Analyst | SQL | Power BI | Excel
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              I transform raw data into meaningful business insights using dashboards, reports, and data analysis techniques.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setView('projects')}
                className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all transform hover:-translate-y-1"
              >
                View Projects
              </button>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all transform hover:-translate-y-1 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-70"></div>
              
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 transform hover:rotate-1 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-2 w-24 bg-slate-100 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 bg-slate-200 rounded-full"></div>
                    <div className="h-2 w-2 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-20 bg-blue-50 rounded-xl p-3 flex flex-col justify-between">
                    <div className="h-1.5 w-8 bg-blue-200 rounded"></div>
                    <div className="h-3 w-16 bg-blue-900 rounded"></div>
                  </div>
                  <div className="h-20 bg-slate-50 rounded-xl p-3 flex flex-col justify-between">
                    <div className="h-1.5 w-8 bg-slate-200 rounded"></div>
                    <div className="h-3 w-16 bg-slate-400 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-slate-50 rounded-xl relative overflow-hidden p-4">
                    <div className="flex items-end gap-1.5 h-full">
                      {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-900/20 rounded-t transition-all hover:bg-blue-600" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-8 bg-white shadow-lg border border-slate-50 rounded-lg px-4 py-2 flex items-center gap-2 animate-bounce hover:animate-none">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-semibold text-slate-700">Insights Detected</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-white shadow-lg border border-slate-50 rounded-lg px-4 py-2 flex items-center gap-2 transform translate-y-4 animate-pulse">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-xs font-semibold text-slate-700">KPIs Tracked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
