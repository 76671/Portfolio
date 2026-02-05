
import React from 'react';

interface ProfileProps {
  setView: (view: 'home' | 'projects' | 'profile') => void;
}

const Profile: React.FC<ProfileProps> = ({ setView }) => {
  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Header */}
        <div className="mb-16">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <button onClick={() => setView('home')} className="hover:text-blue-600 transition-colors">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-medium">Professional Profile</span>
          </nav>
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Meet Vivek Saurav</h2>
          <div className="mt-2 h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Summary & Identity */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="mb-6">
                <img 
                  src="https://i.ibb.co/Y7kWF5Z5/Gemini-Generated-Image-7uw0ex7uw0ex7uw0.png" 
                  alt="Vivek Saurav Profile" 
                  className="w-32 h-32 rounded-3xl object-cover shadow-xl border-4 border-white ring-1 ring-slate-100"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Vivek Saurav</h3>
              <p className="text-blue-600 font-semibold text-sm mb-6">Data Analyst & SQL Developer</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Computer Science graduate (2024) focused on transforming complex data into clear, actionable business insights.
              </p>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  India
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  viveksaurav64@gmail.com
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                   <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/vivek-saurav-b11984225" target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn Profile</a>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-3xl p-8 text-white shadow-xl shadow-blue-900/20">
              <h4 className="text-lg font-bold mb-4">Core Philosophy</h4>
              <p className="text-blue-100 text-sm leading-relaxed italic">
                "Data is just numbers until you find the narrative. My mission is to translate those narratives into growth-driving strategies."
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Bio, Education, Certifications */}
          <div className="lg:col-span-2 space-y-12">
            {/* Professional Summary */}
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-slate-200"></span>
                The Journey
              </h4>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                <p className="text-lg leading-relaxed text-slate-700">
                  I am a Computer Science graduate passionate about turning complex data into clear, actionable business insights. Specializing in <strong>SQL, Power BI, and Excel</strong>, I focus on end-to-end data processing—from cleaning raw datasets to designing interactive dashboards that highlight key performance indicators (KPIs). 
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  My projects, including <strong>retail and mobile sales analysis</strong>, demonstrate my ability to use DAX and pivot tables to uncover trends and support data-driven decision-making. I am dedicated to continuous learning and helping organizations optimize their performance through structured analytical thinking.
                </p>
              </div>
            </section>

            {/* Practical Experience Highlights */}
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-slate-200"></span>
                Project Mastery
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   <h5 className="font-bold text-slate-900 mb-2">Retail Analytics (Excel)</h5>
                   <p className="text-sm text-slate-600 leading-relaxed">
                     Mastered raw data cleaning and pivot tables to track Sales, Orders, and Return Rates with interactive slicers.
                   </p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   <h5 className="font-bold text-slate-900 mb-2">Mobile Sales (Power BI)</h5>
                   <p className="text-sm text-slate-600 leading-relaxed">
                     Developed advanced DAX measures and map visualizations to analyze brand performance and customer trends.
                   </p>
                 </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-slate-200"></span>
                Academic Foundation
              </h4>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex gap-6 items-start">
                <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-slate-900">Bachelor of Technology (B.Tech)</h5>
                  <p className="text-blue-600 font-medium text-sm">Computer Science & Engineering</p>
                  <p className="text-slate-500 text-xs mt-2 uppercase tracking-wide">Class of 2024</p>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    Strong academic focus on Database Management Systems (DBMS), Data Structures, and analytical algorithms, providing a robust technical foundation for data-driven roles.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
