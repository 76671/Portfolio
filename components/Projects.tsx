
import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tool: string;
  description: string;
  mainImage: string;
  color: string;
  features: string[];
  gallery: {
    url: string;
    caption: string;
  }[];
}

const Projects: React.FC<{ setView: (view: 'home' | 'projects' | 'profile') => void }> = ({ setView }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'vrinda',
      title: "Vrinda Store Annual Report",
      subtitle: "Retail Sales Dashboard",
      tool: "Excel, SQL",
      description: "A comprehensive retail analytics solution cleaning and processing over 30,000 transactions. This dashboard identifies high-value customer segments, channel performance, and seasonal sales trends.",
      mainImage: "https://i.ibb.co/LD671mNC/Screenshot-2026-02-03-203137.png",
      color: "bg-blue-600",
      features: [
        "KPI tracking for Sales (₹2.11Cr) and Orders (31k)",
        "Demographic insights: 64% Women buyers vs 36% Men",
        "Channel analysis: Amazon, Flipkart, and Myntra performance",
        "Trend visualization for monthly order volume",
        "Interactive slicers for Category and Month-wise drill-down"
      ],
      gallery: [
        { 
          url: "https://i.ibb.co/LD671mNC/Screenshot-2026-02-03-203137.png", 
          caption: "Comprehensive Annual Report Dashboard Layout" 
        }
      ]
    },
    {
      id: 'motorola',
      title: "Motorola Sales Analytics",
      subtitle: "Mobile Market Intelligence",
      tool: "Power BI, DAX",
      description: "A professional business intelligence dashboard analyzing mobile phone sales across multiple Indian cities, focusing on regional heatmaps, payment preferences, and model comparisons.",
      mainImage: "https://i.ibb.co/nNTGnLVr/Screenshot-2026-01-26-192407.png",
      color: "bg-purple-600",
      features: [
        "Geospatial heatmap of sales by city",
        "Daily quantity trends and transaction volume",
        "Payment method distribution analysis",
        "Customer rating sentiment funnel",
        "Competitive brand and model benchmarking"
      ],
      gallery: [
        { 
          url: "https://i.ibb.co/nNTGnLVr/Screenshot-2026-01-26-192407.png", 
          caption: "Full Motorola Market Intelligence Dashboard View" 
        }
      ]
    }
  ];

  return (
    <section id="projects" className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors">Home</button>
              <span>/</span>
              <span className="text-slate-900 font-medium">Project Gallery</span>
            </nav>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Analytical Insights</h2>
            <div className="mt-2 h-1.5 w-24 bg-blue-600 rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Professional dashboards designed to turn raw data into strategic business decisions. Click on any project to view the full screenshots.
            </p>
          </div>
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all group"
          >
            <svg className="w-5 h-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Back to Home
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${project.color}`}>
                    {project.tool}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/95 backdrop-blur-sm text-blue-900 px-6 py-3 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Screenshots
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{project.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center text-blue-900 font-bold text-sm">
                  Full Details & Gallery <span className="ml-2 group-hover:ml-3 transition-all">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-md transition-opacity" 
              onClick={() => setSelectedProject(null)}
            ></div>
            
            <div className="relative bg-white w-full max-w-6xl max-h-[95vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 leading-none">{selectedProject.title}</h3>
                  <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mt-2">{selectedProject.subtitle} • {selectedProject.tool}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900 shadow-sm border border-slate-50"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-y-auto flex-grow bg-slate-50">
                <div className="max-w-5xl mx-auto p-8 lg:p-16">
                  <div className="grid lg:grid-cols-3 gap-16 mb-16">
                    <div className="lg:col-span-1 space-y-10">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
                          <span className="h-1 w-6 bg-blue-600 rounded"></span>
                          Project Focus
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
                          <span className="h-1 w-6 bg-blue-600 rounded"></span>
                          Analytical Features
                        </h4>
                        <ul className="space-y-4">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm group/feature">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0 group-hover/feature:scale-150 transition-transform"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-12">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <span className="h-1 w-6 bg-blue-600 rounded"></span>
                        Interactive Visualization Gallery
                      </h4>
                      <div className="space-y-12">
                        {selectedProject.gallery.map((img, i) => (
                          <div key={i} className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 delay-150">
                            <div className="bg-white rounded-[2rem] p-3 border border-slate-200 shadow-2xl transition-transform hover:scale-[1.01] duration-500 overflow-hidden">
                              <img 
                                src={img.url} 
                                alt={img.caption} 
                                className="w-full rounded-[1.5rem] object-contain bg-slate-100"
                              />
                            </div>
                            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-wide">
                              {img.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white border-t border-slate-100 text-center flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-slate-500 font-medium italic">"Data is only as useful as the clarity of its presentation."</p>
                <a 
                  href="mailto:vivek.saurav@example.com"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-blue-900 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all hover:-translate-y-1"
                >
                  Contact Me for Analysis
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
