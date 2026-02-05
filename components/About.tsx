
import React from 'react';

const About: React.FC = () => {
  const tags = [
    'SQL', 'Power BI', 'Excel', 'Data Cleaning', 'Data Visualization', 'DAX', 'Pivot Tables'
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900">Professional Summary</h2>
          <div className="mt-2 h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
          
          <div className="mt-8 space-y-4 text-lg text-slate-600 leading-relaxed text-justify md:text-center">
            <p>
              I am a <strong>Computer Science graduate (Class of 2024)</strong> and aspiring <strong>Data Analyst</strong>, eager to kickstart my professional journey in the world of Business Intelligence. 
            </p>
            <p>
              I am passionate about turning complex data into clear, actionable business insights. Specializing in <strong>SQL, Power BI, and Excel</strong>, I focus on end-to-end data processing—from cleaning raw datasets to designing interactive dashboards that highlight <strong>KPIs</strong>.
            </p>
            <p>
              My goal is to help organizations optimize their performance through structured analytical thinking and high-impact visual stories.
            </p>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full shadow-sm hover:border-blue-400 hover:text-blue-900 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
